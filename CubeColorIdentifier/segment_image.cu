#include "segment_image.cuh"

__global__ void segmentPixel(int** dev_image, int** dev_segmentedImage)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);

	bool diff = false;

	int i = y - 1;
	while (!diff && i <= y + 1)
	{
		int j = x - 1;
		while (!diff && j <= x + 1)
		{
			if (i >= 0 && i < const_height && j >= 0 && j < const_width)
			{
				if (abs(dev_image[y][x] - dev_image[i][j]) > 2)
				{
					dev_segmentedImage[y][x] = 255;
					diff = true;
				}
			}
			j++;
		}
		i++;
	}
}

int** segmentImage(int** dev_image)
{
	int** dev_segmentedImage;
	cudaMalloc(&dev_segmentedImage, heightSize);
	int** segmentedImage = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&segmentedImage[i], width * sizeof(int));
	}
	cudaMemcpy(dev_segmentedImage, segmentedImage, heightSize, cudaMemcpyHostToDevice);

	segmentPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_segmentedImage);
	cudaDeviceSynchronize();
	
	return dev_segmentedImage;
}