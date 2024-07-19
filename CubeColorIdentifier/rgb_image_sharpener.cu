#include "rgb_image_sharpener.cuh"

__device__ int averageFilterPixel(int** dev_image, int y, int x1, int x2, int offset)
{
	int sum = dev_image[y][x2 + offset];

	if (x1 > 0)
	{
		sum += dev_image[y][x2 - 3 + offset];
	}

	if (x1 < const_width - 1)
	{
		sum += dev_image[y][x2 + 3 + offset];
	}

	if (y > 0)
	{
		sum += dev_image[y - 1][x2 + offset];
		if (x1 > 0)
		{
			sum += dev_image[y - 1][x2 - 3 + offset];
		}

		if (x1 < const_width - 1)
		{
			sum += dev_image[y - 1][x2 + 3 + offset];
		}
	}
	if (y < const_height - 1)
	{
		sum += dev_image[y + 1][x2 + offset];
		if (x1 > 0)
		{
			sum += dev_image[y + 1][x2 - 3 + offset];
		}
		if (x1 < const_width - 1)
		{
			sum += dev_image[y + 1][x2 + 3 + offset];
		}
	}

	return sum / 9;
}

__global__ void smoothPixel(int** dev_image, int** dev_smoothed)
{
	int idx = getIdx();
	if (idx >= const_imageLength) return;

	int y = getY(idx);
	int x1 = getX(idx);
	int x2 = x1 * 3;

	for (int i = 0; i < 3; i++)
	{
		int color = averageFilterPixel(dev_image, y, x1, x2, i);
		if (color < 0)
		{
			color = 0;
		}
		else if (color > 255)
		{
			color = 255;
		}
		dev_smoothed[y][x2 + i] = color;
	}
}

__device__ int laplacePixel(int** dev_image, int y, int x1, int x2, int offset)
{
	int sum = dev_image[y][x2 + offset] * (-9);

	if (x1 > 0)
	{
		sum += dev_image[y][x2 - 3 + offset];
	}

	if (x1 < const_width - 1)
	{
		sum += dev_image[y][x2 + 3 + offset];
	}

	if (y > 0)
	{
		sum += dev_image[y - 1][x2 + offset];
		if (x1 > 0)
		{
			sum += dev_image[y - 1][x2 - 3 + offset];
		}

		if (x1 < const_width - 1)
		{
			sum += dev_image[y - 1][x2 + 3 + offset];
		}
	}
	if (y < const_height - 1)
	{
		sum += dev_image[y + 1][x2 + offset];
		if (x1 > 0)
		{
			sum += dev_image[y + 1][x2 - 3 + offset];
		}
		if (x1 < const_width - 1)
		{
			sum += dev_image[y + 1][x2 + 3 + offset];
		}
	}

	return -sum;
}

__global__ void sharpenPixel(int** dev_image, int** dev_sharpened)
{
	int idx = getIdx();
	if (idx >= const_imageLength) return;

	int y = getY(idx);
	int x1 = getX(idx);
	int x2 = x1 * 3;

	for (int i = 0; i < 3; i++)
	{
		int color = laplacePixel(dev_image, y, x1, x2, i);
		if (color < 0)
		{
			color = 0;
		}
		else if (color > 255)
		{
			color = 255;
		}
		dev_sharpened[y][x2 + i] = color;
	}
}

int** sharpenImage(int** dev_image)
{
	int** dev_smoothed;
	int** dev_sharpened;
	cudaMalloc(&dev_smoothed, heightSize);
	cudaMalloc(&dev_sharpened, heightSize);
	int** sharpened = (int**)malloc(heightSize);
	int** smoothed = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&smoothed[i], widthRGBSize);
		cudaMalloc(&sharpened[i], widthRGBSize);
	}
	cudaMemcpy(dev_smoothed, smoothed, heightSize, cudaMemcpyHostToDevice);
	cudaMemcpy(dev_sharpened, sharpened, heightSize, cudaMemcpyHostToDevice);

	smoothPixel	CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_smoothed);
	cudaDeviceSynchronize();

	sharpenPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_smoothed, dev_sharpened);
	cudaDeviceSynchronize();

	return dev_sharpened;
}