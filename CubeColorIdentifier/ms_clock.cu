#include "ms_clock.cuh"

cudaEvent_t start, stop;

void startTimer()
{
	cudaEventCreate(&start);
	cudaEventRecord(start, 0);
}

void stopTimer()
{
	cudaEventCreate(&stop);
	cudaEventRecord(stop, 0);
	cudaEventSynchronize(stop);
}

float getElapsedTime()
{
	float time;
	cudaEventElapsedTime(&time, start, stop);
	return time;
}
