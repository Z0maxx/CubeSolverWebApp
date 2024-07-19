#include "reduce_mean_shifted.cuh"

__global__ void reduceMeanShiftedPixel(int** dev_blurred, int** dev_reducedBlurred, int** dev_meanShifted, int** dev_reducedMeanShifted, int minX, int minY)
{
	int idx = getIdx();
	if (idx >= const_imageLength) return;

	int y1 = getY(idx);
	int y2 = y1 + minY;
	int x1 = getX(idx);
	int x2 = x1 * 3;
	int x3 = (x1 + minX) * 3;

	dev_reducedBlurred[y1][x1] = dev_blurred[y2][x1 + minX];
	dev_reducedMeanShifted[y1][x2] = dev_meanShifted[y2][x3];
	dev_reducedMeanShifted[y1][x2 + 1] = dev_meanShifted[y2][x3 + 1];
	dev_reducedMeanShifted[y1][x2 + 2] = dev_meanShifted[y2][x3 + 2];
}

void reduceMeanShifted(int** dev_blurred, int** dev_reducedBlurred, int** dev_meanShifted, int** dev_reducedMeanShifted, int minX, int minY)
{
	int** reducedBlurred = (int**)malloc(heightSize);
	int** reducedMeanShifted = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&reducedBlurred[i], widthIntSize);
		cudaMalloc(&reducedMeanShifted[i], widthRGBSize);
	}
	cudaMemcpy(dev_reducedBlurred, reducedBlurred, heightSize, cudaMemcpyHostToDevice);
	cudaMemcpy(dev_reducedMeanShifted, reducedMeanShifted, heightSize, cudaMemcpyHostToDevice);

	reduceMeanShiftedPixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_blurred, dev_reducedBlurred, dev_meanShifted, dev_reducedMeanShifted, minX, minY);
	cudaDeviceSynchronize();
}