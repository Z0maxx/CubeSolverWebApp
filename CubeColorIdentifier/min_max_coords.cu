#include "min_max_coords.cuh"

__global__ void minMaxCoordPixel(int** dev_image, int* dev_minX, int* dev_minY, int* dev_maxX, int* dev_maxY)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength || y >= const_height - 1 || y <= 0 || x >= const_width - 1 || x <= 0) return;

	if (dev_image[y][x] == 0 && (dev_image[y + 1][x] == 255 || dev_image[y - 1][x] == 255 || dev_image[y][x - 1] == 255 || dev_image[y][x + 1] == 255))
	{
		atomicMin(dev_minX, x);
		atomicMin(dev_minY, y);
		atomicMax(dev_maxX, x);
		atomicMax(dev_maxY, y);
	}
}

void minMaxCoords(int** dev_image, int* minX, int* minY, int* maxX, int* maxY)
{
	*minX = width - 1;
	*minY = height - 1;
	int* dev_minX;
	int* dev_minY;
	int* dev_maxX;
	int* dev_maxY;
	cudaMalloc(&dev_minX, sizeof(int*));
	cudaMalloc(&dev_minY, sizeof(int*));
	cudaMalloc(&dev_maxX, sizeof(int*));
	cudaMalloc(&dev_maxY, sizeof(int*));
	cudaMemcpy(dev_minX, minX, sizeof(int*), cudaMemcpyHostToDevice);
	cudaMemcpy(dev_minY, minY, sizeof(int*), cudaMemcpyHostToDevice);
	minMaxCoordPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_minX, dev_minY, dev_maxX, dev_maxY);
	cudaDeviceSynchronize();
	cudaMemcpy(minX, dev_minX, sizeof(int*), cudaMemcpyDeviceToHost);
	cudaMemcpy(minY, dev_minY, sizeof(int*), cudaMemcpyDeviceToHost);
	cudaMemcpy(maxX, dev_maxX, sizeof(int*), cudaMemcpyDeviceToHost);
	cudaMemcpy(maxY, dev_maxY, sizeof(int*), cudaMemcpyDeviceToHost);
	*minX -= 8;
	*minY -= 8;
	*maxX += 8;
	*maxY += 8;
	if (*minX < 0) *minX = 0;
	if (*minY < 0) *minY = 0;
	if (*maxX >= width) *maxX = width - 1;
	if (*maxY >= height) *maxY = height - 1;
}