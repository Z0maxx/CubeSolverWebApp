#include "pll_orient_solver.cuh"

__device__ bool doesPLLOrientEdgeMatch(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx)
{
	Color colors[2]{};
	for (int i = 0; i < 2; i++)
	{
		colors[i] = dev_F2LEdgeCubeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_PLLOrientEdgeMatchReferences[i].layer][const_PLLOrientEdgeMatchReferences[i].cube][const_PLLOrientEdgeMatchReferences[i].side];
	}
	return colors[0] == colors[1];
}

__device__ bool doesPLLOrientCornerMatch(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx)
{
	Color colors[4]{};
	for (int i = 0; i < 4; i++)
	{
		colors[i] = dev_F2LEdgeCubeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_PLLOrientCornerMatchReferences[i].layer][const_PLLOrientCornerMatchReferences[i].cube][const_PLLOrientCornerMatchReferences[i].side];
	}
	return colors[0] == colors[1] && colors[2] == colors[3];
}

__device__ int PLLOrientCorrectCount(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx, const Color targetColor)
{
	int j = 0;
	while (j < 4 && dev_F2LEdgeCubeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_PLLOrientTargetReferences[j].layer][const_PLLOrientTargetReferences[j].cube][const_PLLOrientTargetReferences[j].side] == targetColor)
	{
		j++;
	}
	return j;
}

__device__ bool isPLLOrientCurrentCorrect(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx, const Color targetColor)
{
	return dev_F2LEdgeCubeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_PLLOrientCurrentTargetReference.layer][const_PLLOrientCurrentTargetReference.cube][const_PLLOrientCurrentTargetReference.side] == targetColor;
}

__device__ bool isPLLOrientTopLayerCorrect(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx, const Color targetColor)
{
	return dev_F2LEdgeCubeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_PLLOrientFinalReferences[0].layer][const_PLLOrientFinalReferences[0].cube][const_PLLOrientFinalReferences[0].side] == targetColor;
}

__device__ void PLLOrientSolve(const int cubeIdx, const uint2 crossIdx, const uint2 cornerIdx, const uint2 edgeIdx)
{
	Color targetColor = dev_F2LEdgeCubeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_PLLOrientReference.layer][const_PLLOrientReference.cube][const_PLLOrientReference.side];
	int idx = 0;
	int roundIdx = 0;
	int correctCount = PLLOrientCorrectCount(cubeIdx, crossIdx, cornerIdx, edgeIdx, targetColor);
	bool edgeMatch = doesPLLOrientEdgeMatch(cubeIdx, crossIdx, cornerIdx, edgeIdx);
	bool cornerMatch = doesPLLOrientCornerMatch(cubeIdx, crossIdx, cornerIdx, edgeIdx);
	while (correctCount != 4 && !(edgeMatch && cornerMatch && correctCount == 3))
	{
		bool currentCorrect = isPLLOrientCurrentCorrect(cubeIdx, crossIdx, cornerIdx, edgeIdx, targetColor);
		roundIdx = 0;

		while (!currentCorrect && !(edgeMatch && cornerMatch && correctCount == 3))
		{
			executePLLOrientSequence(cubeIdx, crossIdx, cornerIdx, edgeIdx, idx, roundIdx);
			currentCorrect = isPLLOrientCurrentCorrect(cubeIdx, crossIdx, cornerIdx, edgeIdx, targetColor);
			if (!currentCorrect)
			{
				roundIdx++;
			}

			edgeMatch = doesPLLOrientEdgeMatch(cubeIdx, crossIdx, cornerIdx, edgeIdx);
			cornerMatch = doesPLLOrientCornerMatch(cubeIdx, crossIdx, cornerIdx, edgeIdx);
			if (edgeMatch && cornerMatch && !currentCorrect && correctCount == 3)
			{
				cornerError = true;
			}
		}
		correctCount = PLLOrientCorrectCount(cubeIdx, crossIdx, cornerIdx, edgeIdx, targetColor);
		if (correctCount != 4)
		{
			turnF2LEdgeLayer(cubeIdx, crossIdx, cornerIdx, edgeIdx, CubeLayer_Top, Direction_Left, false);
			dev_PLLOrientLayerMoves[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][idx][roundIdx][4] = U;
			idx++;
		}

		edgeMatch = doesPLLOrientEdgeMatch(cubeIdx, crossIdx, cornerIdx, edgeIdx);
		cornerMatch = doesPLLOrientCornerMatch(cubeIdx, crossIdx, cornerIdx, edgeIdx);
		if (edgeMatch && cornerMatch && correctCount == 3)
		{
			cornerError = true;
		}
	}
	int i = 0;
	targetColor = dev_F2LEdgeCubeColors[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][const_PLLOrientFinalReferences[1].layer][const_PLLOrientFinalReferences[1].cube][const_PLLOrientFinalReferences[1].side];
	while (!isPLLOrientTopLayerCorrect(cubeIdx, crossIdx, cornerIdx, edgeIdx, targetColor))
	{
		turnF2LEdgeLayer(cubeIdx, crossIdx, cornerIdx, edgeIdx, CubeLayer_Top, Direction_Left, false);
		i++;
	}

	Notation lastMove = None;
	switch (i)
	{
	case 1:
		lastMove = U;
		break;
	case 2:
		lastMove = U2;
		break;
	case 3:
		lastMove = Up;
		break;
	}

	dev_PLLOrientLayerMoves[cubeIdx][crossIdx.x][crossIdx.y][cornerIdx.x][cornerIdx.y][edgeIdx.x][edgeIdx.y][idx][roundIdx][4] = lastMove;
}

__global__ void solvePLLOrientThread()
{
	const int cubeIdx = blockIdx.x;

	const int crossIdxX = blockIdx.y;
	const int crossIdxY = blockIdx.z;
	const uint2 crossIdx = make_uint2(crossIdxX, crossIdxY);

	const int cornerIdxX = threadIdx.x % 4;
	const int cornerIdxY = threadIdx.x / 4;
	const uint2 cornerIdx = make_uint2(cornerIdxX, cornerIdxY);

	const int edgeIdxX = threadIdx.y;
	const int edgeIdxY = threadIdx.z;
	const uint2 edgeIdx = make_uint2(edgeIdxX, edgeIdxY);

	PLLOrientSolve(cubeIdx, crossIdx, cornerIdx, edgeIdx);
}

void solvePLLOrient()
{
	solvePLLOrientThread CUDA_KERNEL(dim3(6, 4, 6), dim3(24, 4, 6))();
	cudaDeviceSynchronize();
}