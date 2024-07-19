#include "hysteresis_threshold.cuh"

__global__ void hysteresisThresholdPixel(int** dev_image, int** dev_thresholded, int lowerLimit, int upperLimit)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	if (x > 0 && x < const_width - 1 && y > 0 && y < const_height - 1)
	{
		if (dev_image[y][x] < lowerLimit)
		{
			dev_thresholded[y][x] = 0;
		}
		else
		{
			bool needed = false;
			int i = y - 1;
			int j = x - 1;
			int checked = 0;
			while (!needed && checked < 9)
			{
				if (dev_image[i][j] > upperLimit)
				{
					needed = true;
				}
				checked++;
				j++;
				if (j > x + 1)
				{
					i++;
					j = x - 1;
				}
			}
			if (needed)
			{
				dev_thresholded[y][x] = 255;
			}
			else
			{
				dev_thresholded[y][x] = 0;
			}
		}
	}
	else
	{
		dev_thresholded[y][x] = 0;
	}
}

int** hysteresisThreshold(int** dev_image, int** thresholded, int lowerLimit, int upperLimit)
{
	int** dev_thresholded;
	cudaMalloc(&dev_thresholded, heightSize);
	
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&thresholded[i], widthIntSize);
	}
	cudaMemcpy(dev_thresholded, thresholded, heightSize, cudaMemcpyHostToDevice);

	hysteresisThresholdPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_thresholded, lowerLimit, upperLimit);
	cudaDeviceSynchronize();

	return dev_thresholded;
}