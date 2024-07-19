#include "color_filter.cuh"

#ifdef __INTELLISENSE__
#define CUDA_KERNEL(...)
#else
#define CUDA_KERNEL(...) <<< __VA_ARGS__ >>>
#endif

__global__ void filterColorPixel(int** dev_image, int** dev_segmented, int** dev_filtered)
{
	int idx = getIdx();
	if (idx >= const_imageLength) return;
	int y = getY(idx);
	int x1 = getX(idx);
	int x2 = x1 * 3;
	float blue = dev_image[y][x2 + 2];
	float green = dev_image[y][x2 + 1];
	float red = dev_image[y][x2];
	CubeColor cubeColor = convertRgbToCubeColor(red, green, blue);
	if (cubeColor == CubeColor_None || dev_segmented[y][x1] == 255)
	{
		dev_filtered[y][x1] = 255;
	}
}

int** filterColor(int** dev_image, int** dev_segmented, int** filtered)
{
	int** dev_filtered;
	cudaMalloc(&dev_filtered, heightSize);
	
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&filtered[i], widthIntSize);
	}
	cudaMemcpy(dev_filtered, filtered, heightSize, cudaMemcpyHostToDevice);

	filterColorPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_segmented, dev_filtered);
	cudaDeviceSynchronize();

	return dev_filtered;
}