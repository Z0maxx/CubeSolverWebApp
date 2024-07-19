#include "non_maximum_supression.cuh"

__global__ void nonMaximumSupressionPixel(float** dev_angles, int** dev_gradient, int** dev_supressed)
{

	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	float angle = dev_angles[y][x];
	if (angle < 0) angle += 180;

	if (x > 0 && x < const_width - 1 && y > 0 && y < const_height - 1)
	{
		int a = 0;
		int b = 0;
		if (angle < 22.5 || angle >= 157.5)
		{
			a = dev_gradient[y][x - 1];
			b = dev_gradient[y][x + 1];
		}
		else if (angle >= 22.5 && angle < 67.5)
		{
			a = dev_gradient[y + 1][x + 1];
			b = dev_gradient[y - 1][x - 1];
		}
		else if (angle >= 67.5 && angle < 112.5)
		{
			a = dev_gradient[y + 1][x];
			b = dev_gradient[y - 1][x];
		}
		else if (angle >= 112.5 && angle < 157.5)
		{
			a = dev_gradient[y + 1][x - 1];
			b = dev_gradient[y - 1][x + 1];
		}

		int current = dev_gradient[y][x];
		if (current > a && current > b)
		{
			dev_supressed[y][x] = current;
		}
		else
		{
			dev_supressed[y][x] = 0;
		}
	}
	else
	{
		dev_supressed[y][x] = dev_gradient[y][x];
	}
}

int** nonMaximumSupression(int** dev_gradientX, int** dev_gradientY, int** dev_gradient, float** dev_angles)
{
	int** dev_supressed;
	cudaMalloc(&dev_supressed, heightSize);
	int** supressed = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&supressed[i], widthIntSize);
	}
	cudaMemcpy(dev_supressed, supressed, heightSize, cudaMemcpyHostToDevice);

	nonMaximumSupressionPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_angles, dev_gradient, dev_supressed);
	cudaDeviceSynchronize();

	return dev_supressed;
}