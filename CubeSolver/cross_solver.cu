#include "cross_solver.cuh"

__device__ int dev_crossRotations[6][4][6];

__device__ void solveCrossPiece(const int cubeIdx, const uint2 crossIdx, const int idx, const int solveOrderIdx)
{
	SolveRotation solveRotation = findSolveRotation(dev_crossRotations[cubeIdx][crossIdx.x][crossIdx.y], solveOrderIdx);
	if (solveRotation.rotation != 99)
	{
		turnCrossCube(cubeIdx, crossIdx, solveRotation.direction, solveRotation.twice);
		dev_crossRotationMoves[cubeIdx][crossIdx.x][crossIdx.y][idx] = solveRotation.notation;
		dev_crossRotations[cubeIdx][crossIdx.x][crossIdx.y] = solveRotation.newRotation;
	}
	Color colors[2]{};
	for (int i = 0; i < 2; i++)
	{
		colors[i] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][const_crossReferences[i].layer][const_crossReferences[i].cube][const_crossReferences[i].side];
	}
	uint2 edge = findEdge(dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y], colors, 12);
	Color targetColor = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][const_crossTargetReference.layer][const_crossTargetReference.cube][const_crossTargetReference.side];
	const Notation* sequence = findCrossSequence(edge, dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][edge.x][edge.y], targetColor);
	executeCrossSequence(cubeIdx, crossIdx, sequence, idx);
}

__global__ void solveCrossThread()
{
	int cubeIdx = blockIdx.x;
	int crossIdxX = threadIdx.x;
	int crossIdxY = threadIdx.y;
	uint2 crossIdx = make_uint2(crossIdxX, crossIdxY);

	for (int i = 0; i < 4; i++)
	{
		solveCrossPiece(cubeIdx, crossIdx, i, const_solveOrders[crossIdx.x][crossIdx.y][i]);
	}
}

__global__ void copyCrossColorThread()
{
	memcpy(dev_crossColors[threadIdx.x][threadIdx.y][threadIdx.z], dev_colors[threadIdx.x], sizeof(dev_colors[threadIdx.x]));
}

void solveCross()
{
	copyCrossColorThread CUDA_KERNEL(1, dim3(6, 4, 6))();
	cudaDeviceSynchronize();
	solveCrossThread CUDA_KERNEL(6, dim3(4, 6))();
	cudaDeviceSynchronize();
}