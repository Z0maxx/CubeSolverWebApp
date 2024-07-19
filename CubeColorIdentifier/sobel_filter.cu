#include "sobel_filter.cuh"

__constant__ int const_kernelAvg5x5[5] = { 1, 4, 6, 4, 1 };
__constant__ int const_kernelDiff5x5[5] = { -1, -2, 0, 2, 1 };

__global__ void sobelXAvg5x5Pixel(int** dev_image, int** dev_sobelXAvg)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	int sum = 0;
	int i = y - 2;
	for (int j = 0; j < 5; j++)
	{
		if (i >= 0 && i < const_height)
		{
			sum += dev_image[i][x] * const_kernelAvg5x5[j];
		}
		else
		{
			int mirror = 0;
			if (i < 0)
			{
				mirror = dev_image[-i][x];
			}
			else
			{
				mirror = dev_image[const_height - (i - const_height + 2)][x];
			}
			sum += mirror * const_kernelAvg5x5[j];
		}
		i++;
	}
	dev_sobelXAvg[y][x] = sum;
}

__global__ void sobelYAvg5x5Pixel(int** dev_image, int** dev_sobelYAvg)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	int sum = 0;
	int i = x - 2;
	for (int j = 0; j < 5; j++)
	{
		if (i >= 0 && i < const_width)
		{
			sum += dev_image[y][i] * const_kernelAvg5x5[j];
		}
		else
		{
			int mirror = 0;
			if (i < 0)
			{
				mirror = dev_image[y][-i];
			}
			else
			{
				mirror = dev_image[y][const_width - (i - const_width + 2)];
			}
			sum += mirror * const_kernelAvg5x5[j];
		}
		i++;
	}
	dev_sobelYAvg[y][x] = sum;
}

__global__ void sobelXDiff5x5Pixel(int** dev_sobelXAvg, int** dev_sobelXDiff)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	int sum = 0;
	int i = x - 2;
	for (int j = 0; j < 5; j++)
	{
		if (i >= 0 && i < const_width)
		{
			sum += dev_sobelXAvg[y][i] * const_kernelDiff5x5[j];
		}
		else
		{
			int mirror = 0;
			if (i < 0)
			{
				mirror = dev_sobelXAvg[y][-i];
			}
			else
			{
				mirror = dev_sobelXAvg[y][const_width - (i - const_width + 2)];
			}
			sum += mirror * const_kernelDiff5x5[j];
		}
		i++;
	}
	dev_sobelXDiff[y][x] = sum;
}

__global__ void sobelYDiff5x5Pixel(int** dev_sobelYAvg, int** dev_sobelYDiff)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	int sum = 0;
	int i = y - 2;
	for (int j = 0; j < 5; j++)
	{
		if (i >= 0 && i < const_height)
		{
			sum += dev_sobelYAvg[i][x] * const_kernelDiff5x5[j];
		}
		else
		{
			int mirror = 0;
			if (i < 0)
			{
				mirror = dev_sobelYAvg[-i][x];
			}
			else
			{
				mirror = dev_sobelYAvg[const_height - (i - const_height + 2)][x];
			}
			sum += mirror * const_kernelDiff5x5[j];
		}
		i++;
	}
	dev_sobelYDiff[y][x] = sum;
}

__global__ void sobelGradientPixel(int** dev_sobelXDiff, int** dev_sobelYDiff, int** dev_sobelGradient)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	dev_sobelGradient[y][x] = sqrt(pow((float)dev_sobelXDiff[y][x], 2) + pow((float)dev_sobelYDiff[y][x], 2));
}

int** sobelX5x5(int** dev_image)
{
	int** dev_sobelXAvg;
	int** dev_sobelXDiff;
	cudaMalloc(&dev_sobelXAvg, heightSize);
	cudaMalloc(&dev_sobelXDiff, heightSize);
	int** sobelXAvg = (int**)malloc(heightSize);
	int** sobelXDiff = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&sobelXAvg[i], widthIntSize);
		cudaMalloc(&sobelXDiff[i], widthIntSize);
	}
	cudaMemcpy(dev_sobelXAvg, sobelXAvg, heightSize, cudaMemcpyHostToDevice);
	cudaMemcpy(dev_sobelXDiff, sobelXDiff, heightSize, cudaMemcpyHostToDevice);

	sobelXAvg5x5Pixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_sobelXAvg);
	cudaDeviceSynchronize();
	sobelXDiff5x5Pixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_sobelXAvg, dev_sobelXDiff);
	cudaDeviceSynchronize();

	return dev_sobelXDiff;
}

int** sobelY5x5(int** dev_image)
{
	int** dev_sobelYAvg;
	int** dev_sobelYDiff;
	cudaMalloc(&dev_sobelYAvg, heightSize);
	cudaMalloc(&dev_sobelYDiff, heightSize);
	int** sobelYAvg = (int**)malloc(heightSize);
	int** sobelYDiff = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&sobelYAvg[i], widthIntSize);
		cudaMalloc(&sobelYDiff[i], widthIntSize);
	}
	cudaMemcpy(dev_sobelYAvg, sobelYAvg, heightSize, cudaMemcpyHostToDevice);
	cudaMemcpy(dev_sobelYDiff, sobelYDiff, heightSize, cudaMemcpyHostToDevice);


	sobelYAvg5x5Pixel CUDA_KERNEL(blocks, threadsPerBlock) (dev_image, dev_sobelYAvg);
	cudaDeviceSynchronize();
	sobelYDiff5x5Pixel CUDA_KERNEL(blocks, threadsPerBlock) (dev_sobelYAvg, dev_sobelYDiff);
	cudaDeviceSynchronize();

	return dev_sobelYDiff;
}

int** sobel(int** dev_sobelX, int** dev_sobelY)
{
	int** dev_sobelGradient;
	cudaMalloc(&dev_sobelGradient, heightSize);
	int** sobelGradient = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&sobelGradient[i], widthIntSize);
	}
	cudaMemcpy(dev_sobelGradient, sobelGradient, heightSize, cudaMemcpyHostToDevice);

	sobelGradientPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_sobelX, dev_sobelY, dev_sobelGradient);
	cudaDeviceSynchronize();

	return dev_sobelGradient;
}