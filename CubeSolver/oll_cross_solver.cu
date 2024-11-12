#include "oll_cross_solver.cuh"

__device__ bool setOLLCrossMatch(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx, const Color targetColor, bool match[4])
{
	for (int i = 0; i < 4; i++)
	{
		match[i] = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_OLLCrossReferences[i].layer][const_OLLCrossReferences[i].cube][const_OLLCrossReferences[i].side] == targetColor;
	}
	int j = 0;
	while (j < 4 && match[j])
	{
		j++;
	}
	return j == 4;
}
__device__ void OLLCrossSolve(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx)
{
	Color targetColor = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_OLLCrossTargetReference.layer][const_OLLCrossTargetReference.cube][const_OLLCrossTargetReference.side];
	bool match[4];
	int idx = 0;
	bool foundSequence = true;

	while (foundSequence && !setOLLCrossMatch(cubeIdx, crossIdx, cornerIdx, edgeIdx, targetColor, match))
	{
		const Notation* sequence = findOLLCrossSequence(match);
		if (sequence == 0)
		{
			edgeError = true;
			foundSequence = false;
		}
		else
		{
			executeOLLCrossSequence(cubeIdx, crossIdx, cornerIdx, edgeIdx, sequence, idx);
			idx++;
		}
	}
}

__global__ void solveOLLCrossThread()
{
	int cubeIdx = blockIdx.x;

	int crossIdxX = blockIdx.y;
	int crossIdxY = blockIdx.z;
	uint2 crossIdx = make_uint2(crossIdxX, crossIdxY);

	int cornerIdxX = threadIdx.x % 4;
	int cornerIdxY = threadIdx.x / 4;
	uint2 cornerIdx = make_uint2(cornerIdxX, cornerIdxY);

	int edgeIdxX = threadIdx.y;
	int edgeIdxY = threadIdx.z;
	uint2 edgeIdx = make_uint2(edgeIdxX, edgeIdxY);

	OLLCrossSolve(cubeIdx, crossIdx, cornerIdx, edgeIdx);
}

void solveOLLCross()
{
	solveOLLCrossThread CUDA_KERNEL(dim3(6, 4, 6), dim3(24, 4, 6))();
	cudaDeviceSynchronize();
}