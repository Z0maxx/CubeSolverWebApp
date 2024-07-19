#include "grayscale_filter.cuh"

#ifdef __INTELLISENSE__
#define CUDA_KERNEL(...)
#else
#define CUDA_KERNEL(...) <<< __VA_ARGS__ >>>
#endif

__global__ void grayscalePixel(int** dev_image, int** dev_grayscaled)
{
	int idx = getIdx();
	if (idx >= const_imageLength) return;
	int y = getY(idx);
	int x1 = getX(idx);
	int x2 = x1 * 3;
	float blue = dev_image[y][x2 + 2];
	float green = dev_image[y][x2 + 1];
	float red = dev_image[y][x2];
	int res = (int)(0.299 * red + 0.587 * green + 0.114 * blue);
	dev_grayscaled[y][x1] = res;
}

int** grayscale(int** dev_image)
{
	int** dev_grayscaled;
	cudaMalloc(&dev_grayscaled, heightSize);
	int** grayscaled = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&grayscaled[i], widthIntSize);
	}
	cudaMemcpy(dev_grayscaled, grayscaled, heightSize, cudaMemcpyHostToDevice);
	
	grayscalePixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_grayscaled);
	cudaDeviceSynchronize();

	return dev_grayscaled;
}