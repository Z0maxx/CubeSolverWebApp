#include "f2l_corner_solver.cuh"

__device__ int dev_F2LCornerRotations[6][4][6][4][6];

__device__ void solveF2LCornerPiece(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const int idx, const int solveOrderIdx)
{
	SolveRotation solveRotation = findSolveRotation(dev_F2LCornerRotations[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y], solveOrderIdx);
	if (solveRotation.rotation != 99)
	{
		turnF2LCornerCube(cubeIdx, crossIdx, cornerIdx, solveRotation.direction, solveRotation.twice);
		dev_F2LCornerRotationMoves[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][idx] = solveRotation.notation;
		dev_F2LCornerRotations[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y] = solveRotation.newRotation;
	}
	Color colors[3]{};
	for (int i = 0; i < 3; i++)
	{
		colors[i] = dev_F2LCornerColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][const_F2LCornerReferences[i].layer][const_F2LCornerReferences[i].cube][const_F2LCornerReferences[i].side];
	}
	uint2 corner = findCorner(dev_F2LCornerColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y], colors, 8);
	Color targetColor = dev_F2LCornerColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][const_F2LCornerTargetReference.layer][const_F2LCornerTargetReference.cube][const_F2LCornerTargetReference.side];
	const Notation* sequence = findCornerSequence(const_F2LCornerSequences, corner, dev_F2LCornerColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][corner.x][corner.y], targetColor);
	executeF2LCornerSequence(cubeIdx, crossIdx, cornerIdx, sequence, idx);
}

__global__ void solveF2LCornerThread()
{
	int cubeIdx = blockIdx.x;

	int crossIdxX = blockIdx.y;
	int crossIdxY = blockIdx.z;
	uint2 crossIdx = make_uint2(crossIdxX, crossIdxY);

	int cornerIdxX = threadIdx.x;
	int cornerIdxY = threadIdx.y;
	uint2 cornerIdx = make_uint2(cornerIdxX, cornerIdxY);

	for (int i = 0; i < 4; i++)
	{
		solveF2LCornerPiece(cubeIdx, crossIdx, cornerIdx, i, const_solveOrders[cornerIdx.x][cornerIdx.y][i]);
	}
}

__global__ void copyF2LCornerColorThread()
{
	memcpy(dev_F2LCornerColors[blockIdx.x][blockIdx.y][blockIdx.z][threadIdx.x][threadIdx.y], dev_crossColors[blockIdx.x][blockIdx.y][blockIdx.z], sizeof(dev_crossColors[blockIdx.x][blockIdx.y][blockIdx.z]));
}

void solveF2LCorner()
{
	copyF2LCornerColorThread CUDA_KERNEL(dim3(6, 4, 6), dim3(4, 6))();
	cudaDeviceSynchronize();
	solveF2LCornerThread CUDA_KERNEL(dim3(6, 4, 6), dim3(4, 6))();
	cudaDeviceSynchronize();
}