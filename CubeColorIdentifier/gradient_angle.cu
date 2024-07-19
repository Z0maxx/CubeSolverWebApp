#include "gradient_angle.cuh"

__global__ void gradientAnglePixel(int** dev_sobelX, int** dev_sobelY, float** dev_angles)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	float angle = 180.0 / PI * atan2((float)dev_sobelY[y][x], (float)((float)dev_sobelX[y][x] + 0.0000000001));
	dev_angles[y][x] = angle;
}

float** gradientAngle(int** dev_gradientX, int** dev_gradientY)
{
	float** dev_angles;
	cudaMalloc(&dev_angles, heightSize);
	float** angles = (float**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&angles[i], widthDoubleSize);
	}
	cudaMemcpy(dev_angles, angles, heightSize, cudaMemcpyHostToDevice);
	
	gradientAnglePixel CUDA_KERNEL(blocks, threadsPerBlock)(dev_gradientX, dev_gradientY, dev_angles);
	cudaDeviceSynchronize();

	return dev_angles;
}