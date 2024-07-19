#include "reduce.cuh"

__global__ void reducePixel(int** dev_thresholded, int** dev_reducedThresholded, float** dev_angles, float** dev_reducedAngles, int** dev_baseImage, Color** dev_reducedBaseImage, int minX, int minY)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	dev_reducedThresholded[y][x] = dev_thresholded[y + minY][x + minX];
	dev_reducedAngles[y][x] = dev_angles[y + minY][x + minX];
	dev_reducedBaseImage[y][x] = { dev_baseImage[y + minY][(x + minX) * 3], dev_baseImage[y + minY][(x + minX) * 3 + 1], dev_baseImage[y + minY][(x + minX) * 3 + 2] };
}

void reduce(int** dev_thresholded, int** dev_reducedThresholded, float** dev_angles, float** dev_reducedAngles, int** dev_baseImage, Color** reducedBaseImage, Color** dev_reducedBaseImage, int minX, int minY)
{
	int** reducedThresholded = (int**)malloc(heightSize);
	float** reducedAngles = (float**)malloc(heightSize);
	int widthColorSize = width * sizeof(Color);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&reducedThresholded[i], widthIntSize);
		cudaMalloc(&reducedAngles[i], widthDoubleSize);
		cudaMalloc(&reducedBaseImage[i], widthColorSize);
	}

	cudaMemcpy(dev_reducedThresholded, reducedThresholded, heightSize, cudaMemcpyHostToDevice);
	cudaMemcpy(dev_reducedAngles, reducedAngles, heightSize, cudaMemcpyHostToDevice);
	cudaMemcpy(dev_reducedBaseImage, reducedBaseImage, heightSize, cudaMemcpyHostToDevice);

	reducePixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_thresholded, dev_reducedThresholded, dev_angles, dev_reducedAngles, dev_baseImage, dev_reducedBaseImage, minX, minY);
	cudaDeviceSynchronize();
}