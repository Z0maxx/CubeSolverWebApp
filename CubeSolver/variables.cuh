#pragma once

#ifdef __INTELLISENSE__
#define CUDA_KERNEL(...)
#else
#define CUDA_KERNEL(...) <<< __VA_ARGS__ >>>
#endif

#include <string.h>

#include "cuda_runtime.h"
#include "device_launch_parameters.h"
#include "enums.h"
#include "structs.h"

__constant__ const int solveCount = 82944;
__constant__ const int maxStepCount = 263;

extern __managed__ bool edgeError;
extern __managed__ bool cornerError;

extern __constant__ const Move const_layerCornerMoves[9][2][4];
extern __constant__ const Move const_layerEdgeMoves[9][2][4];

extern __constant__ const Move const_faceCornerMoves[6][8];
extern __constant__ const Move const_faceEdgeMoves[6][12];
extern __constant__ const Move const_faceCenterMoves[6][6];

extern __constant__ const Side const_layerAlwaysMoves[3][2];
extern __constant__ const CubeAlwaysMove const_layerCubeAlwaysMoves[9];
extern __constant__ const Side const_faceAlwaysMoves[3][2];

extern __constant__ const MoveIdx const_cubeTurnMoveIdxs[7];

extern __constant__ const SolvePiece const_solvePieces[4];
extern __constant__ const int const_solveOrders[4][6][4];

extern __device__ Color dev_colors[6][3][9][6];
extern __device__ Color dev_crossColors[6][4][6][3][9][6];
extern __device__ Color dev_F2LCornerColors[6][4][6][4][6][3][9][6];
extern __device__ Color dev_F2LEdgeColors[6][4][6][4][6][4][6][3][9][6];

extern __device__ Notation dev_cubeRotationMoves[6];
extern __device__ Notation dev_crossRotationMoves[6][4][6][4];
extern __device__ Notation dev_F2LCornerRotationMoves[6][4][6][4][6][4];
extern __device__ Notation dev_F2LEdgeRotationMoves[6][4][6][4][6][4][6][4];

extern __device__ Notation dev_crossLayerMoves[6][4][6][4][4];
extern __device__ Notation dev_F2LCornerLayerMoves[6][4][6][4][6][4][8];
extern __device__ Notation dev_F2LEdgeLayerMoves[6][4][6][4][6][4][6][4][16];
extern __device__ Notation dev_OLLCrossLayerMoves[6][4][6][4][6][4][6][3][6];
extern __device__ Notation dev_OLLEdgeLayerMoves[6][4][6][4][6][4][6][16];
extern __device__ Notation dev_PLLCycleLayerMoves[6][4][6][4][6][4][6][3][8];
extern __device__ Notation dev_PLLOrientLayerMoves[6][4][6][4][6][4][6][4][4][5];

extern __device__ Notation dev_sequence[maxStepCount];
extern __device__ Notation dev_moves[solveCount][maxStepCount];

