#include "center_tester.cuh"

__constant__ const int const_testRange = 4;

__device__ __host__ bool checkSize(Center center)
{
	return center.size >= 250 && center.width > 5 && center.height > 5;
}

__global__ void testCenter(Center* dev_centers, int* length, int* dev_minY, int* dev_minX, int* dev_maxY, int* dev_maxX)
{
	int idx = threadIdx.x;
	Center center = dev_centers[idx];

	int i = 0;
	Center acceptedOtherCenter;
	Center acceptedTestedCenter;
	int acceptedhalfDiff = -1;

	if (!checkSize(center)) return;

	while (i < *length && !center.accepted)
	{
		Center otherCenter = dev_centers[i];
		if (i != idx &&
			checkSize(otherCenter) &&
			(
				center.y - const_testRange < otherCenter.y && center.y + const_testRange > otherCenter.y ||
				otherCenter.y - const_testRange < center.y && otherCenter.y + const_testRange > center.y
				))
		{
			int diff = abs(center.x - otherCenter.x);
			int halfDiff = diff / 2;
			int centerPoint = center.x < otherCenter.x ? center.x + halfDiff : otherCenter.x + halfDiff;
			int j = 0;
			while (j < *length && !center.accepted)
			{
				Center testedCenter = dev_centers[j];
				if (j != i && j != idx &&
					checkSize(testedCenter) &&
					centerPoint - const_testRange < testedCenter.x &&
					centerPoint + const_testRange > testedCenter.x &&
					(
						center.y - const_testRange < testedCenter.y && center.y + const_testRange > testedCenter.y ||
						otherCenter.y - const_testRange < testedCenter.y && otherCenter.y + const_testRange > testedCenter.y
						))
				{
					acceptedOtherCenter = otherCenter;
					acceptedTestedCenter = testedCenter;
					acceptedhalfDiff = halfDiff;

					center.accepted = true;
				}
				j++;
			}
		}
		i++;
	}

	if (center.accepted)
	{
		i = 0;
		center.accepted = false;
		while (i < *length && !center.accepted)
		{
			Center otherCenter = dev_centers[i];
			if (i != idx &&
				checkSize(otherCenter) &&
				(center.x - const_testRange < otherCenter.x && center.x + const_testRange > otherCenter.x ||
					otherCenter.x - const_testRange < center.x && otherCenter.x + const_testRange > center.x))
			{
				int diff = abs(center.y - otherCenter.y);
				int halfDiff = diff / 2;

				if (halfDiff - const_testRange < acceptedhalfDiff && halfDiff + const_testRange > acceptedhalfDiff ||
					acceptedhalfDiff - const_testRange < halfDiff && acceptedhalfDiff + const_testRange > halfDiff)
				{
					int centerPoint = center.y < otherCenter.y ? center.y + halfDiff : otherCenter.y + halfDiff;
					int j = 0;
					while (j < *length && !center.accepted)
					{
						Center testedCenter = dev_centers[j];
						if (j != i && j != idx &&
							checkSize(testedCenter) &&
							centerPoint - const_testRange < testedCenter.y && centerPoint + const_testRange > testedCenter.y &&
							(center.x - const_testRange < testedCenter.x && center.x + const_testRange > testedCenter.x ||
								otherCenter.x - const_testRange < testedCenter.x && otherCenter.x + const_testRange > testedCenter.x)
							)
						{
							atomicMin(dev_minY, center.y - center.height);
							atomicMin(dev_minY, otherCenter.y - otherCenter.height);

							atomicMin(dev_minX, center.x - center.width);
							atomicMin(dev_minX, otherCenter.x - otherCenter.width);
							atomicMin(dev_minX, testedCenter.x - testedCenter.width);

							atomicMax(dev_maxY, center.y + center.height);
							atomicMax(dev_maxY, otherCenter.y + otherCenter.height);

							atomicMax(dev_maxX, center.x + center.width);
							atomicMax(dev_maxX, otherCenter.x + otherCenter.width);
							atomicMax(dev_maxX, testedCenter.x + testedCenter.width);

							center.accepted = true;
						}
						j++;
					}
				}
			}
			i++;
		}
	}

	if (center.accepted)
	{
		atomicMin(dev_minY, acceptedOtherCenter.y - acceptedOtherCenter.height);
		atomicMin(dev_minY, acceptedTestedCenter.y - acceptedTestedCenter.height);

		atomicMin(dev_minX, acceptedOtherCenter.x - acceptedOtherCenter.width);

		atomicMax(dev_maxY, acceptedOtherCenter.y + acceptedOtherCenter.height);
		atomicMax(dev_maxY, acceptedTestedCenter.y + acceptedTestedCenter.height);

		atomicMax(dev_maxX, acceptedOtherCenter.x + acceptedOtherCenter.width);
	}
}

void testCenters(Center* dev_centers, int* length, int* minY, int* minX, int* maxY, int* maxX)
{
	*minY = height - 1;
	*minX = width - 1;
	*maxY = 0;
	*maxX = 0;
	int* dev_length;
	int* dev_minY;
	int* dev_minX;
	int* dev_maxY;
	int* dev_maxX;
	cudaMalloc(&dev_length, sizeof(int*));
	cudaMalloc(&dev_minY, sizeof(int*));
	cudaMalloc(&dev_minX, sizeof(int*));
	cudaMalloc(&dev_maxY, sizeof(int*));
	cudaMalloc(&dev_maxX, sizeof(int*));
	cudaMemcpy(dev_length, length, sizeof(int*), cudaMemcpyHostToDevice);
	cudaMemcpy(dev_minX, minX, sizeof(int*), cudaMemcpyHostToDevice);
	cudaMemcpy(dev_minY, minY, sizeof(int*), cudaMemcpyHostToDevice);
	testCenter CUDA_KERNEL(1, *length)(dev_centers, dev_length, dev_minY, dev_minX, dev_maxY, dev_maxX);
	cudaDeviceSynchronize();
	cudaMemcpy(minX, dev_minX, sizeof(int*), cudaMemcpyDeviceToHost);
	cudaMemcpy(minY, dev_minY, sizeof(int*), cudaMemcpyDeviceToHost);
	cudaMemcpy(maxX, dev_maxX, sizeof(int*), cudaMemcpyDeviceToHost);
	cudaMemcpy(maxY, dev_maxY, sizeof(int*), cudaMemcpyDeviceToHost);
}