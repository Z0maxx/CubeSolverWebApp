#include "inside_image.cuh"

__global__ void setFromTop(int** dev_image)
{
	int idx = blockIdx.x * blockDim.x + threadIdx.x;
	if (idx >= const_width) return;

	dev_image[0][idx] = 50;
	int i = 0;
	while (i < const_height && dev_image[i][idx] != 255)
	{
		dev_image[i][idx] = 50;
		i++;
	}
}

__global__ void setFromBottom(int** dev_image)
{
	int idx = blockIdx.x * blockDim.x + threadIdx.x;
	if (idx >= const_width) return;

	dev_image[const_height - 1][idx] = 50;
	int i = const_height - 1;
	while (i > -1 && dev_image[i][idx] != 255)
	{
		dev_image[i][idx] = 50;
		i--;
	}
}

__global__ void setFromLeft(int** dev_image)
{
	int idx = blockIdx.x * blockDim.x + threadIdx.x;
	if (idx >= const_height) return;

	dev_image[idx][0] = 50;
	int i = 0;
	while (i < const_width && dev_image[idx][i] != 255)
	{
		dev_image[idx][i] = 50;
		i++;
	}
}

__global__ void setFromRight(int** dev_image)
{
	int idx = blockIdx.x * blockDim.x + threadIdx.x;
	if (idx >= const_height) return;

	dev_image[idx][const_width - 1] = 50;
	int i = const_width - 1;
	while (i > -1 && dev_image[idx][i] != 255)
	{
		dev_image[idx][i] = 50;
		i--;
	}
}

__global__ void setMissed(int** dev_image)
{
	int idx = getIdx();
	int y = getY(idx) + 1;
	int x = getX(idx) + 1;
	if (y < 1 || y >= const_height - 1 || x < 1 || x >= const_width - 1 || dev_image[y][x] != 50) return;
	
	if (dev_image[y][x + 1] == 0)
	{
		x++;
		while (dev_image[y][x] != 255)
		{
			dev_image[y][x] = 50;
			x++;
		}
	}
	x = getX(idx) + 1;
	if (dev_image[y][x - 1] == 0)
	{
		x--;
		while (dev_image[y][x] != 255)
		{
			dev_image[y][x] = 50;
			x--;
		}
	}
	x = getX(idx) + 1;
	if (dev_image[y + 1][x] == 0)
	{
		y++;
		while (dev_image[y][x] != 255)
		{
			dev_image[y][x] = 50;
			y++;
		}
	}
	y = getY(idx) + 1;
	if (dev_image[y - 1][x] == 0)
	{
		y--;
		while (dev_image[y][x] != 255)
		{
			dev_image[y][x] = 50;
			y--;
		}
	}
}

void insideImage(int** dev_image, int** image)
{
	int blocksTopBottom = ceil((float)width / threadsPerBlock);
	int blocksLeftRight = ceil((float)height / threadsPerBlock);
	setFromTop CUDA_KERNEL(blocksTopBottom, threadsPerBlock)(dev_image);
	setFromBottom CUDA_KERNEL(blocksTopBottom, threadsPerBlock)(dev_image);
	setFromLeft CUDA_KERNEL(blocksLeftRight, threadsPerBlock)(dev_image);
	setFromRight CUDA_KERNEL(blocksLeftRight, threadsPerBlock)(dev_image);
	cudaDeviceSynchronize();
	int missedBlocks = ceil((float)(height - 2) * (width - 2) / threadsPerBlock);
	setMissed CUDA_KERNEL(missedBlocks, threadsPerBlock)(dev_image);
	cudaDeviceSynchronize();
}