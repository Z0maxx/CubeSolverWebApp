#include "gaussian_blur_filter.cuh"

__global__ void gaussianBlurPixel1(int** dev_image, float** dev_blurred, float* dev_kernel, int radius, int kernelLength)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	float sum = 0.0;
	int i = x - radius;
	for (int j = 0; j < kernelLength; j++)
	{
		if (i >= 0 && i < const_width)
		{
			sum += dev_image[y][i] * dev_kernel[j];
		}
		else
		{
			int mirror = 0;
			if (i < 0)
			{
				mirror = dev_image[y][-i];
			}
			else
			{
				mirror = dev_image[y][const_width - (i - const_width + 2)];
			}
			sum += mirror * dev_kernel[j];
		}
		i++;
	}
	dev_blurred[y][x] = sum;
}

__global__ void gaussianBlurPixel2(float** dev_blurred1, int** dev_blurred2, float* dev_kernel, int radius, int kernelLength)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);
	if (idx >= const_imageLength) return;

	float sum = 0.0;
	int i = y - radius;
	for (int j = 0; j < kernelLength; j++)
	{
		if (i >= 0 && i < const_height)
		{
			sum += dev_blurred1[i][x] * dev_kernel[j];
		}
		else
		{
			int mirror = 0;
			if (i < 0)
			{
				mirror = dev_blurred1[-i][x];
			}
			else
			{
				mirror = dev_blurred1[const_height - (i - const_height + 2)][x];
			}
			sum += mirror * dev_kernel[j];
		}
		i++;
	}
	dev_blurred2[y][x] = sum;
}

float getGaussianValue(int pos, float sigma)
{
	float sigmaSquared = sigma * sigma;
	return exp(-pow(pos, 2) / (2 * sigmaSquared));
}

int getKernelLength(float sigma)
{
	int kernelLength = (int)(2 * PI * sigma);
	if (kernelLength % 2 == 0) kernelLength++;
	return kernelLength;
}

float* getKernel(float sigma)
{
	int kernelLength = getKernelLength(sigma);
	float* kernel = new float[kernelLength];
	kernel[kernelLength / 2] = getGaussianValue(0, sigma);
	int pos = 1;
	float sum = 1.0;
	while (pos <= kernelLength / 2)
	{
		float value = getGaussianValue(pos, sigma);
		kernel[kernelLength / 2 - pos] = value;
		kernel[kernelLength / 2 + pos] = value;
		sum += 2 * value;
		pos++;
	}
	float alfa = 1.0 / sum;
	for (int i = 0; i < kernelLength; i++)
	{
		kernel[i] = kernel[i] * alfa;
	}
	return kernel;
}

int** gaussianBlur(int** dev_image, float sigma)
{
	int kernelLength = getKernelLength(sigma);
	int kernelSize = kernelLength * sizeof(float);
	float* dev_kernel;
	cudaMalloc(&dev_kernel, kernelSize);
	float* kernel = getKernel(sigma);
	cudaMemcpy(dev_kernel, kernel, kernelSize, cudaMemcpyHostToDevice);
	int radius = (kernelLength - 3) / 2 + 1;

	float** dev_blurred1;
	int** dev_blurred2;
	cudaMalloc(&dev_blurred1, heightSize);
	cudaMalloc(&dev_blurred2, heightSize);
	float** blurred1 = (float**)malloc(heightSize);
	int** blurred2 = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&blurred1[i], widthDoubleSize);
		cudaMalloc(&blurred2[i], widthIntSize);
	}
	cudaMemcpy(dev_blurred1, blurred1, heightSize, cudaMemcpyHostToDevice);
	cudaMemcpy(dev_blurred2, blurred2, heightSize, cudaMemcpyHostToDevice);
	
	gaussianBlurPixel1 CUDA_KERNEL(blocks, threadsPerBlock)(dev_image, dev_blurred1, dev_kernel, radius, kernelLength);
	cudaDeviceSynchronize();
	gaussianBlurPixel2 CUDA_KERNEL(blocks, threadsPerBlock)(dev_blurred1, dev_blurred2, dev_kernel, radius, kernelLength);
	cudaDeviceSynchronize();

	return dev_blurred2;
}