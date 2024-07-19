#include "color_tester.cuh"

__device__ Color translateToRGB(CubeColor color)
{
	switch (color)
	{
	case (CubeColor_Red):
		return { 255, 0, 0 };
	case (CubeColor_Green):
		return { 0, 255, 0 };
	case (CubeColor_Orange):
		return { 255, 125, 0 };
	case (CubeColor_Yellow):
		return { 255, 255, 0 };
	case (CubeColor_Blue):
		return { 0, 0, 255 };
	case (CubeColor_White):
		return { 255, 255, 255 };
	case (CubeColor_None):
		return { 0,0,0 };
	}
}

__global__ void setPixelColor(Center* dev_centers, Color** dev_image, unsigned int** dev_cubeColorCounts)
{
	Center center = dev_centers[blockIdx.x];
	int idx = (blockIdx.y * blockDim.x + threadIdx.x);
	if (idx >= center.size) return;

	int y = idx / center.width;
	int x = idx % center.width;

	int displacedY = center.y - (center.halfHeight - y);
	int displacedX = center.x - (center.halfWidth - x);
	Color color = dev_image[displacedY][displacedX];
	CubeColor cubeColor = convertRgbToCubeColor(color.r, color.g, color.b);
	Color rgb = translateToRGB(cubeColor);
	dev_image[displacedY][displacedX].r = rgb.r;
	dev_image[displacedY][displacedX].g = rgb.g;
	dev_image[displacedY][displacedX].b = rgb.b;
	atomicAdd(&dev_cubeColorCounts[blockIdx.x][cubeColor], 1);
}

void testCenter(Center* centers, unsigned int** cubeColorCounts, std::vector<Center>* centerVec, int threadId)
{
	Center center = centers[threadId];
	unsigned int* counts = cubeColorCounts[threadId];
	if (counts[0] <= 0.05 * center.size)
	{
		int differentColors = 0;
		int max = 0;
		for (int i = 1; i < 7; i++)
		{
			if (counts[i] > 0)
			{
				differentColors++;
			}
			if (counts[i] > counts[max])
			{
				max = i;
			}
		}
		if (differentColors <= 2)
		{
			center.accepted = true;
			center.mainColor = (CubeColor)max;
		}
	}
	
	(*centerVec)[threadId] = center;
}

bool compCenter(Center center1, Center center2)
{
	return center1.y < center2.y;
}

std::vector<Center> testColors(Center* dev_centers, Color** image, Color** dev_image, int maxWidth, int maxHeight, int length)
{
	int widthHeight = maxWidth * maxHeight;
	int lengthSize = length * sizeof(unsigned int**);
	unsigned int** dev_cubeColorCounts;
	cudaMalloc(&dev_cubeColorCounts, lengthSize);
	CubeColor** cubeColorCounts = (CubeColor**)malloc(lengthSize);
	int size = 7 * sizeof(unsigned int*);
	for (int i = 0; i < length; i++)
	{
		cudaMalloc(&cubeColorCounts[i], size);
	}
	cudaMemcpy(dev_cubeColorCounts, cubeColorCounts, lengthSize, cudaMemcpyHostToDevice);

	int centerBlocks = ceil((float)widthHeight / threadsPerBlock);
	setPixelColor CUDA_KERNEL(dim3(length, centerBlocks), widthHeight > threadsPerBlock ? threadsPerBlock : widthHeight)(dev_centers, dev_image, dev_cubeColorCounts);
	cudaDeviceSynchronize();

	unsigned int** resCubeColorCounts = (unsigned int**)malloc(lengthSize);
	for (int i = 0; i < length; i++)
	{
		resCubeColorCounts[i] = (unsigned int*)malloc(size);
		cudaMemcpy(resCubeColorCounts[i], cubeColorCounts[i], size, cudaMemcpyDeviceToHost);
	}

	int centerSize = length * sizeof(Center);
	Center* centers = (Center*)malloc(centerSize);
	cudaMemcpy(centers, dev_centers, centerSize, cudaMemcpyDeviceToHost);

	std::vector<std::thread> threads;
	std::vector<Center> centerVec(length);
	for (int i = 0; i < length; i++)
	{
		int id = i;
		threads.emplace_back(std::thread(testCenter, centers, resCubeColorCounts, &centerVec, id));
	}

	for (auto& thread : threads)
	{
		thread.join();
	}

	std::sort(centerVec.begin(), centerVec.end(), compCenter);

	int** res = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		res[i] = (int*)malloc(widthRGBSize);
		cudaMemcpy(res[i], image[i], widthRGBSize, cudaMemcpyDeviceToHost);
	}

	FILE* f = fopen(fileName, "wb");
	for (int i = 0; i < height; i++)
	{
		for (int j = 0; j < width; j++)
		{
			fprintf(f, "%c%c%c", res[i][j * 3 + 2], res[i][j * 3 + 1], res[i][j * 3]);
		}
	}
	fclose(f);

	return centerVec;
}