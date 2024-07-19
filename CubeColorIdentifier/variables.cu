#include "variables.cuh"

__constant__ int const_width;
__constant__ int const_height;
__constant__ int const_imageLength;

__device__ int getIdx()
{
	return blockIdx.x * blockDim.x + threadIdx.x;
}

__device__ int getY(int idx)
{
	return idx / const_width;
}

__device__ int getX(int idx)
{
	return idx % const_width;
}

int width;
int height;
int imageLength;
int baseImageLength;
int heightSize;
int widthIntSize;
int widthDoubleSize;
int widthRGBSize;
int threadsPerBlock;
int blocks;
cudaError_t error;
char* fileName;