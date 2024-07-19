#include "hough_transform.cuh"

__global__ void linePixel(int** dev_image, int** dev_votes, int maxRho, int minVotes)
{
	int idx = getIdx();
	int y = getY(idx);
	int x = getX(idx);

	if (idx >= const_imageLength || dev_image[y][x] == 0) return;

	int angle = blockIdx.y;
	float radian = (angle - 90) * PI / 180;
	int distance = round(y * sin(radian) + x * cos(radian));
	float cosRes = cos(radian);
	float sinRes = sin(radian);
	atomicAdd(&(dev_votes[maxRho + distance][angle]), 1);
}

std::vector<HoughLine> houghTransform(int** dev_image, float** dev_angles, int minPoints)
{
	int maxRho = ceil(sqrt(pow((float)height, 2) + pow((float)width, 2)));
	int doubleRho = 2 * maxRho;
	int doubleRhoSize = doubleRho * sizeof(int*);
	int angles = 180;
	int angleSize = angles * sizeof(int);

	int** dev_votes;
	cudaMalloc(&dev_votes, doubleRhoSize);
	int** votes = (int**)malloc(doubleRhoSize);
	
	for (int i = 0; i < doubleRho; i++)
	{
		cudaMalloc(&votes[i], angleSize);
	}
	cudaMemcpy(dev_votes, votes, doubleRhoSize, cudaMemcpyHostToDevice);

	linePixel CUDA_KERNEL(dim3(blocks, angles), threadsPerBlock)(dev_image, dev_votes, maxRho, minPoints);
	cudaDeviceSynchronize();

	std::vector<HoughLine> houghLines;
	int** resVotes = (int**)malloc(doubleRhoSize);
	for (int i = 0; i < doubleRho; i++)
	{
		resVotes[i] = (int*)malloc(angleSize);
		cudaMemcpy(resVotes[i], votes[i], angleSize, cudaMemcpyDeviceToHost);
		for (int j = 0; j < angles; j++)
		{
			if (resVotes[i][j] >= minPoints)
			{
				houghLines.push_back({ i - maxRho, j - 90 });
			}
		}
	}

	return houghLines;
}