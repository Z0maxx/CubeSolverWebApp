#include "oll_edge_solver.cuh"

__device__ bool setOLLEdgeMatch(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx, bool match[4])
{
	for (int i = 0; i < 4; i++)
	{
		Color color = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_OLLEdgeReferences[i].layer][const_OLLEdgeReferences[i].cube][const_OLLEdgeReferences[i].side];
		Color targetColor = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_OLLEdgeTargetReferences[i].layer][const_OLLEdgeTargetReferences[i].cube][const_OLLEdgeTargetReferences[i].side];
		match[i] = color == targetColor;
	}
	int j = 0;
	while (j < 4 && !match[j])
	{
		j++;
	}
	return j < 4;
}

__device__ void setOLLEdgeNear(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx, bool near[4])
{
	for (int i = 0; i < 4; i++)
	{
		Color origin = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_OLLEdgeNearReferences[i].origin.layer][const_OLLEdgeNearReferences[i].origin.cube][const_OLLEdgeNearReferences[i].origin.side];
		Color leftTarget = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_OLLEdgeNearReferences[i].leftTarget.layer][const_OLLEdgeNearReferences[i].leftTarget.cube][const_OLLEdgeNearReferences[i].leftTarget.side];
		Color rightTarget = dev_F2LEdgeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_OLLEdgeNearReferences[i].rightTarget.layer][const_OLLEdgeNearReferences[i].rightTarget.cube][const_OLLEdgeNearReferences[i].rightTarget.side];
		near[i] = origin == leftTarget || origin == rightTarget;
	}
}

__device__ void OLLEdgeSolve(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx)
{
	Notation firstMove = None;
	bool match[4]{};
	int i = 0;
	while (!setOLLEdgeMatch(cubeIdx, crossIdx, cornerIdx, edgeIdx, match))
	{
		turnF2LEdgeLayer(cubeIdx, crossIdx, cornerIdx, edgeIdx, CubeLayer_Top, Direction_Left, false);
		i++;
	}
	switch (i)
	{
	case 1:
		firstMove = U;
		break;
	case 2:
		firstMove = U2;
		break;
	case 3:
		firstMove = Up;
		break;
	}
	
	dev_OLLEdgeLayerMoves[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][0] = firstMove;
	bool near[4]{};
	setOLLEdgeNear(cubeIdx, crossIdx, cornerIdx, edgeIdx, near);
	const Notation* sequence = findOLLEdgeSequence(match, near);
	executeOLLEdgeSequence(cubeIdx, crossIdx, cornerIdx, edgeIdx, sequence);
}

__global__ void solveOLLEdgeThread()
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

	OLLEdgeSolve(cubeIdx, crossIdx, cornerIdx, edgeIdx);
}

void solveOLLEdge()
{
	solveOLLEdgeThread CUDA_KERNEL(dim3(6, 4, 6), dim3(24, 4, 6))();
	cudaDeviceSynchronize();
}