#include "mean_shift.cuh"

const int sample = 2;
__constant__ const int const_sample = 2;

__device__ int get3DDistance(int r1, int r2, int g1, int g2, int b1, int b2)
{
	return sqrt(pow(r1 - r2, 2) + pow(g1 - g2, 2) + pow(b1 - b2, 2));
}

__global__ void meanShiftPixel(int** dev_image, int** dev_temp, int bandwidth)
{
	int idx = getIdx();
	if (idx >= const_height / const_sample * const_width / const_sample) return;

	int ySample = idx / (const_width / const_sample);
	int y = ySample * const_sample;

	int xSample1 = idx % (const_width / const_sample);
	int xSample2 = xSample1 * 3;
	int x1 = xSample1 * const_sample;

	int x2 = x1 * 3;
	int tx = threadIdx.x;

	extern __shared__ MeanShiftVars shr_vars[];

	unsigned char blue1 = dev_image[y][x2 + 2];
	unsigned char green1 = dev_image[y][x2 + 1];
	unsigned char red1 = dev_image[y][x2];

	shr_vars[tx].meanShiftRed = 0;
	shr_vars[tx].meanShiftGreen = 0;
	shr_vars[tx].meanShiftBlue = 0;
	shr_vars[tx].count = 0;

	int bandwidthYM = y - bandwidth;
	int bandwidthYP = y + bandwidth;
	if (bandwidthYM < 0)
	{
		bandwidthYM = 0;
	}
	if (bandwidthYP >= const_height)
	{
		bandwidthYP = const_height - 1;
	}
	int bandwidthXM = x1 - bandwidth;
	int bandwidthXP = x1 + bandwidth;
	if (bandwidthXM < 0)
	{
		bandwidthXM = 0;
	}
	if (bandwidthXP >= const_width)
	{
		bandwidthXP = const_width - 1;
	}

	int count = 0;

	for (int i = bandwidthYM; i <= bandwidthYP; i++)
	{
		for (int j = bandwidthXM; j <= bandwidthXP; j++)
		{
			shr_vars[tx].rx = j * 3;
			shr_vars[tx].red2 = dev_image[i][shr_vars[tx].rx];
			shr_vars[tx].green2 = dev_image[i][shr_vars[tx].rx + 1];
			shr_vars[tx].blue2 = dev_image[i][shr_vars[tx].rx + 2];
			if (get3DDistance(red1, shr_vars[tx].red2, green1, shr_vars[tx].green2, blue1, shr_vars[tx].blue2) <= bandwidth)
			{
				shr_vars[tx].meanShiftRed += shr_vars[tx].red2 - red1;
				shr_vars[tx].meanShiftGreen += shr_vars[tx].green2 - green1;
				shr_vars[tx].meanShiftBlue += shr_vars[tx].blue2 - blue1;
				shr_vars[tx].count++;
			}
		}
	}

	dev_temp[ySample][xSample2] = (red1 + shr_vars[tx].meanShiftRed / shr_vars[tx].count);
	dev_temp[ySample][xSample2 + 1] = (green1 + shr_vars[tx].meanShiftGreen / shr_vars[tx].count);
	dev_temp[ySample][xSample2 + 2] = (blue1 + shr_vars[tx].meanShiftBlue / shr_vars[tx].count);
}

__global__ void setTempPixel(int** dev_image, int** dev_temp)
{
	int idx = getIdx();
	if (idx >= const_height / const_sample * const_width / const_sample) return;

	int ySample = idx / (const_width / const_sample);
	int y = ySample * const_sample;

	int xSample = idx % (const_width / const_sample) * 3;
	int x = xSample * const_sample;

	dev_image[y][x] = dev_temp[ySample][xSample];
	dev_image[y][x + 1] = dev_temp[ySample][xSample + 1];
	dev_image[y][x + 2] = dev_temp[ySample][xSample + 2];
}

__global__ void setPixelColor(int** dev_image, int** dev_meanShifted)
{
	int idx = getIdx();
	if (idx >= const_height / const_sample * const_width / const_sample) return;

	int y1 = idx / (const_width / const_sample);
	int y2 = y1 * const_sample;
	int x1 = idx % (const_width / const_sample);
	int x2 = x1 * 3;
	int x3 = x2 * const_sample;

	dev_meanShifted[y1][x2] = dev_image[y2][x3];
	dev_meanShifted[y1][x2 + 1] = dev_image[y2][x3 + 1];
	dev_meanShifted[y1][x2 + 2] = dev_image[y2][x3 + 2];
}

int** meanShift(int** dev_image)
{
	int meanShiftHeight = height / sample;
	int meanShiftHeightSize = meanShiftHeight * sizeof(int*);
	int meanShiftWidth = width / sample;
	int meanShiftWidthSize = meanShiftWidth * sizeof(int*) * 3;

	int meanShiftBlocks = ceil((float)height / sample * width / sample / threadsPerBlock);
	int** dev_temp;
	cudaMalloc(&dev_temp, heightSize);
	int** temp = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		cudaMalloc(&temp[i], widthRGBSize);
	}
	cudaMemcpy(dev_temp, temp, heightSize, cudaMemcpyHostToDevice);
	for (int i = 0; i < 3; i++)
	{
		meanShiftPixel CUDA_KERNEL(meanShiftBlocks, threadsPerBlock, threadsPerBlock * sizeof(MeanShiftVars))(dev_image, dev_temp, 20);
		error = cudaDeviceSynchronize();
		setTempPixel  CUDA_KERNEL(meanShiftBlocks, threadsPerBlock)(dev_image, dev_temp);
		error = cudaDeviceSynchronize();
	}
	
	int** dev_meanShifted;
	cudaMalloc(&dev_meanShifted, meanShiftHeightSize);
	int** meanShifted = (int**)malloc(meanShiftHeightSize);
	for (int i = 0; i < meanShiftHeight; i++)
	{
		cudaMalloc(&meanShifted[i], meanShiftWidthSize);
	}
	cudaMemcpy(dev_meanShifted, meanShifted, meanShiftHeightSize, cudaMemcpyHostToDevice);

	setPixelColor CUDA_KERNEL(meanShiftBlocks, threadsPerBlock)(dev_image, dev_meanShifted);
	cudaDeviceSynchronize();

	return dev_meanShifted;
}