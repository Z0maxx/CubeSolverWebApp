#include "cube_centers.cuh"

__global__ void squareCenterPixel(int** dev_image, Center* dev_centers, int* dev_maxSquareWidth, int* dev_maxSquareHeight, unsigned int* dev_count)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength || dev_image[y][x] != 0) return;

	int left = 0;
	int right = 0;
	int top = 0;
	int bottom = 0;
	while (x - left - 1 >= 0 && dev_image[y][x - left - 1] != 255)
	{
		left++;
	}
	while (x + right + 1 < const_width && dev_image[y][x + right + 1] != 255)
	{
		right++;
	}
	while (y - top - 1 >= 0 && dev_image[y - top - 1][x] != 255)
	{
		top++;
	}
	while (y + bottom + 1 < const_height && dev_image[y + bottom + 1][x] != 255)
	{
		bottom++;
	}
	if (left > 1 && right > 1 && top > 1 && bottom > 1 && abs(left - right) <= 1 && abs(top - bottom) <= 1)
	{
		int halfHeight = top * 0.7;
		int halfWidth = left * 0.7;
		int height = 2 * halfHeight + 1;
		int width = 2 * halfWidth + 1;
		atomicMax(dev_maxSquareHeight, height);
		atomicMax(dev_maxSquareWidth, width);
		dev_image[y][x] = 100;
		int centerIdx = atomicAdd(dev_count, 1);
		dev_centers[centerIdx].y = y;
		dev_centers[centerIdx].x = x;
		dev_centers[centerIdx].halfHeight = halfHeight;
		dev_centers[centerIdx].halfWidth = halfWidth;
		dev_centers[centerIdx].height = height;
		dev_centers[centerIdx].width = width;
		dev_centers[centerIdx].size = width * height;
	}
}

__global__ void squareSingleCenter(int** dev_image, Center* dev_centers, Center* dev_filteredCenters, unsigned int* dev_filteredCount)
{
	Center center = dev_centers[threadIdx.x];
	int x = center.x;
	int y = center.y;

	if (dev_image[y][x - 1] != 100 && 
		dev_image[y - 1][x] != 100 && 
		dev_image[y - 1][x - 1] != 100 &&
		dev_image[y + 1][x - 1] != 100)
	{
		dev_filteredCenters[atomicAdd(dev_filteredCount, 1)] = center;
		for (int i = center.y - 5; i <= center.y + 5; i++)
		{
			if (i >= 0 && i < const_height)
			{
				dev_image[i][x] = 125;
			}
		}
		for (int i = center.x - 5; i <= center.x + 5; i++)
		{
			if (i >= 0 && i < const_width)
			{
				dev_image[y][i] = 125;
			}
		}
	}
	else
	{
		dev_image[y][x] = 0;
	}
}

int compCenter1(const void* a, const void* b)
{
	return ((dim3*)a)->y - ((dim3*)b)->y;
}

bool compCenter2(dim3 center1, dim3 center2)
{
	return center1.x < center2.x;
}

Center* cubeCenters(int** dev_image, int* maxSquareHeight, int* maxSquareWidth, int* length)
{
	int* dev_maxSquareHeight;
	int* dev_maxSquareWidth;
	cudaMalloc(&dev_maxSquareHeight, sizeof(int*));
	cudaMalloc(&dev_maxSquareWidth, sizeof(int*));
	Center* dev_centers;
	unsigned int* dev_count;
	cudaMalloc(&dev_count, sizeof(unsigned int*));
	int centersSize = width * height * sizeof(Center);
	cudaMalloc(&dev_centers, centersSize);
	squareCenterPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_centers, dev_maxSquareHeight, dev_maxSquareWidth, dev_count);
	cudaDeviceSynchronize();
	cudaMemcpy(maxSquareHeight, dev_maxSquareHeight, sizeof(int*), cudaMemcpyDeviceToHost);
	cudaMemcpy(maxSquareWidth, dev_maxSquareWidth, sizeof(int*), cudaMemcpyDeviceToHost);
	int* count = new int;
	cudaMemcpy(count, dev_count, sizeof(int*), cudaMemcpyDeviceToHost);

	centersSize = *count * sizeof(Center);
	Center* dev_filteredCenters;
	cudaMalloc(&dev_filteredCenters, centersSize);
	unsigned int* dev_filteredCount;
	cudaMalloc(&dev_filteredCount, sizeof(unsigned int*));
	squareSingleCenter CUDA_KERNEL(1, *count)(dev_image, dev_centers, dev_filteredCenters, dev_filteredCount);
	cudaDeviceSynchronize();
	cudaMemcpy(length, dev_filteredCount, sizeof(int*), cudaMemcpyDeviceToHost);

	return dev_filteredCenters;
}