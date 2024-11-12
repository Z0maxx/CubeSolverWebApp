#include "f2l_edge_solver.cuh"

__device__ int dev_F2LEdgeRotations[6][4][6][4][6][4][6];

__device__ void solveF2LEdgePiece(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx, const int idx, const int solveOrderIdx)
{
	SolveRotation solveRotation = findSolveRotation(dev_F2LEdgeRotations[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y], solveOrderIdx);
	if (solveRotation.rotation != 99)
	{
		turnF2LEdgeCube(cubeIdx, crossIdx, cornerIdx, edgeIdx, solveRotation.direction, solveRotation.twice);
		dev_F2LEdgeRotationMoves[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][idx] = solveRotation.notation;
		dev_F2LEdgeRotations[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y] = solveRotation.newRotation;
	}
	
	Color colors[2]{};
	for (int i = 0; i < 2; i++)
	{
		colors[i] = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_F2LEdgeReferences[i].layer][const_F2LEdgeReferences[i].cube][const_F2LEdgeReferences[i].side];
	}
	uint2 edge = findEdge(dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y], colors, 8);
	Color targetColor = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_F2LEdgeTargetReference.layer][const_F2LEdgeTargetReference.cube][const_F2LEdgeTargetReference.side];
	const Notation* sequence = findF2LEdgeSequence(edge, dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][edge.x][edge.y], targetColor);
	executeF2LEdgeSequence(cubeIdx, crossIdx, cornerIdx, edgeIdx, sequence, idx);
}

__global__ void solveF2LEdgeThread()
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

	for (int i = 0; i < 4; i++)
	{
		solveF2LEdgePiece(cubeIdx, crossIdx, cornerIdx, edgeIdx, i, const_solveOrders[edgeIdx.x][edgeIdx.y][i]);
	}
}

__global__ void copyF2LEdgeColorThread()
{
	for (int i = 0; i < 6; i++)
	{
		memcpy(dev_F2LEdgeColors[blockIdx.x][blockIdx.y][blockIdx.z][threadIdx.x][threadIdx.y][threadIdx.z][i], dev_F2LCornerColors[blockIdx.x][blockIdx.y][blockIdx.z][threadIdx.x][threadIdx.y], sizeof(dev_F2LCornerColors[blockIdx.x][blockIdx.y][blockIdx.z][threadIdx.x][threadIdx.y]));
		memcpy(dev_tempF2LEdgeColors[blockIdx.x][blockIdx.y][blockIdx.z][threadIdx.x][threadIdx.y][threadIdx.z][i], dev_F2LCornerColors[blockIdx.x][blockIdx.y][blockIdx.z][threadIdx.x][threadIdx.y], sizeof(dev_F2LCornerColors[blockIdx.x][blockIdx.y][blockIdx.z][threadIdx.x][threadIdx.y]));

	}
}

void solveF2LEdge()
{
	copyF2LEdgeColorThread CUDA_KERNEL(dim3(6, 4, 6), dim3(4, 6, 4))();
	cudaDeviceSynchronize();
	solveF2LEdgeThread CUDA_KERNEL(dim3(6, 4, 6), dim3(24, 4, 6))();
	cudaDeviceSynchronize();
}