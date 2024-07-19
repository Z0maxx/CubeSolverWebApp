#include "hough_image.cuh"

__global__ void houghImageLine(int** dev_image, HoughLine* dev_houghLines, bool* dev_accepted)
{
	if (!dev_accepted[threadIdx.x]) return;

	HoughLine line = dev_houghLines[threadIdx.x];
	int rho = line.rho;
	float radian = line.theta * PI / 180;
	float sinRes = sin(radian);
	float cosRes = cos(radian);

	for (int i = 0; i < const_width; i++)
	{
		int ycoord = round((rho - i * cosRes) / sinRes);
		if (ycoord >= 0 && ycoord < const_height)
		{
			dev_image[ycoord][i] = 255;
		}
	}

	for (int i = 0; i < const_height; i++)
	{
		int xcoord = round((rho - i * sinRes) / cosRes);
		if (xcoord >= 0 && xcoord < const_width)
		{
			dev_image[i][xcoord] = 255;
		}
	}
}

bool compHough(HoughLine line1, HoughLine line2)
{
	if (line1.rho == line2.rho)
	{
		return line1.theta < line2.theta;
	}
	return line1.rho < line2.rho;
}

std::vector<HoughLine> groupLines(std::vector<HoughLine> houghLines, float range, float angle)
{
	std::vector<HoughLine> uniqueLines;
	std::vector<std::vector<HoughLine>> lineGroups;

	for (int i = 0; i < houghLines.size(); i++)
	{
		HoughLine line = houghLines[i];
		bool unique = true;
		int rho = line.rho;
		int theta = line.theta;

		int j = 0;
		while (unique && j < uniqueLines.size())
		{
			int uniqueRho = uniqueLines[j].rho;
			int uniqueTheta = uniqueLines[j].theta;
			if (abs(uniqueRho - rho) < range && abs(uniqueTheta - theta) < angle)
			{
				unique = false;
			}
			else
			{
				j++;
			}
		}

		if (unique)
		{
			uniqueLines.push_back(line);
			std::vector<HoughLine> group;
			group.push_back(line);
			lineGroups.push_back(group);
		}
		else
		{
			lineGroups[j].push_back(line);
		}
	}

	for (int i = 0; i < uniqueLines.size(); i++)
	{
		int sumRho = 0;
		int sumTheta = 0;

		std::vector<HoughLine> lineGroup = lineGroups[i];
		int groupLength = lineGroup.size();

		for (int j = 0; j < groupLength; j++)
		{
			HoughLine line = lineGroup[j];
			sumRho += line.rho;
			sumTheta += line.theta;
		}

		uniqueLines[i] = { (int)round((float)sumRho / groupLength), (int)round((float)sumTheta / groupLength) };
	}

	return uniqueLines;
}

__device__ int getRhoDiff(HoughLine line1, HoughLine line2)
{
	return abs(line1.rho - line2.rho);
}

__device__ int getThetaDiff(HoughLine line1, HoughLine line2)
{
	return abs(line1.theta - line2.theta);
}

__global__ void setAcceptedLines(HoughLine* dev_lines, bool* dev_accepted, int length)
{
	int lineIdx = threadIdx.x;
	HoughLine line1 = dev_lines[lineIdx];
	bool accepted = false;
	int i = lineIdx + 1;
	while (!accepted && i < length)
	{
		HoughLine line2 = dev_lines[i];
		int rhoDiff1 = getRhoDiff(line1, line2);
		int thetaDiff1 = getThetaDiff(line1, line2);
		if (thetaDiff1 < 8)
		{
			int j = i + 1;
			while (!accepted && j < length)
			{
				HoughLine line3 = dev_lines[j];
				int rhoDiff2 = getRhoDiff(line2, line3);
				int thetaDiff2 = getThetaDiff(line2, line3);
				if (abs(rhoDiff1 - rhoDiff2) < rhoDiff1 * 0.15 && thetaDiff2 < 5)
				{
					int k = j + 1;
					while (!accepted && k < length)
					{
						HoughLine line4 = dev_lines[k];
						int rhoDiff3 = getRhoDiff(line3, line4);
						int thetaDiff3 = getThetaDiff(line3, line4);
						if (abs(rhoDiff2 - rhoDiff3) < rhoDiff2 * 0.15 && thetaDiff3 < 5)
						{
							accepted = true;
							dev_accepted[lineIdx] = true;
							dev_accepted[i] = true;
							dev_accepted[j] = true;
							dev_accepted[k] = true;
						}
						k++;
					}
				}
				j++;
			}
		}
		i++;
	}
}

int** houghImage(std::vector<HoughLine> houghLines, int** image, int** thresholded, int** dev_thresholded)
{
	for (int i = 0; i < houghLines.size(); i++)
	{
		int rho = houghLines[i].rho;
		if (rho < 0)
		{
			houghLines[i].rho = -rho;
			houghLines[i].theta += 180;
		}
	}
	std::sort(houghLines.begin(), houghLines.end(), compHough);
	std::vector<HoughLine> uniqueLines = groupLines(houghLines, 20, 10);

	int length = uniqueLines.size();
	int size = length * sizeof(HoughLine);
	HoughLine* dev_lines;
	cudaMalloc(&dev_lines, size);
	HoughLine* lines = (HoughLine*)malloc(size);
	for (int i = 0; i < length; i++)
	{
		lines[i] = uniqueLines[i];
	}
	cudaMemcpy(dev_lines, lines, size, cudaMemcpyHostToDevice);

	bool* dev_accepted;
	cudaMalloc(&dev_accepted, length * sizeof(bool));
	setAcceptedLines CUDA_KERNEL(1, length - 3)(dev_lines, dev_accepted, length);
	cudaDeviceSynchronize();

	HoughLine* dev_houghLines;
	cudaMalloc(&dev_houghLines, size);
	HoughLine* uniqueHoughLines = (HoughLine*)malloc(size);
	for (int i = 0; i < length; i++)
	{
		uniqueHoughLines[i] = uniqueLines[i];
	}
	cudaMemcpy(dev_houghLines, uniqueHoughLines, size, cudaMemcpyHostToDevice);

	int** dev_image;
	cudaMalloc(&dev_image, heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&image[i], widthIntSize);
	}
	cudaMemcpy(dev_image, image, heightSize, cudaMemcpyHostToDevice);

	houghImageLine CUDA_KERNEL(1, length)(dev_image, dev_houghLines, dev_accepted);
	cudaDeviceSynchronize();

	return dev_image;
}