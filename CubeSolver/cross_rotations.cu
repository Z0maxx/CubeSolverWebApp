#include "variables.cuh"
#include "cross_rotations.cuh"

__shared__ Color shr_tempCrossColors[4][6][3][9][6];

__device__ void rotateCrossLayerColors(const int cubeIdx, const uint2 crossIdx, const CubeLayer cubeLayer, const Direction direction)
{
    memcpy(shr_tempCrossColors[crossIdx.x][crossIdx.y], dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y], sizeof(shr_tempCrossColors[crossIdx.x][crossIdx.y]));

    int alwaysMoveIdx = cubeLayer / 3;
    int directionIdx = direction % 2;

    for (int x = 0; x < 4; x++)
    {
        Move cornerMove = const_layerCornerMoves[cubeLayer][directionIdx][x];

        for (int y = 0; y < 2; y++)
        {
            shr_tempCrossColors[crossIdx.x][crossIdx.y][cornerMove.targetLayer][cornerMove.targetCube][cornerMove.targetSides[y]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][cornerMove.originLayer][cornerMove.originCube][cornerMove.originSides[y]];
            shr_tempCrossColors[crossIdx.x][crossIdx.y][cornerMove.targetLayer][cornerMove.targetCube][const_layerAlwaysMoves[alwaysMoveIdx][y]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][cornerMove.originLayer][cornerMove.originCube][const_layerAlwaysMoves[alwaysMoveIdx][y]];
        }
    }

    for (int x = 0; x < 4; x++)
    {
        Move edgeMove = const_layerEdgeMoves[cubeLayer][directionIdx][x];
        shr_tempCrossColors[crossIdx.x][crossIdx.y][edgeMove.targetLayer][edgeMove.targetCube][edgeMove.targetSides[0]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][edgeMove.originLayer][edgeMove.originCube][edgeMove.originSides[0]];
        for (int y = 0; y < 2; y++)
        {
            shr_tempCrossColors[crossIdx.x][crossIdx.y][edgeMove.targetLayer][edgeMove.targetCube][const_layerAlwaysMoves[alwaysMoveIdx][y]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][edgeMove.originLayer][edgeMove.originCube][const_layerAlwaysMoves[alwaysMoveIdx][y]];
        }
    }

    memcpy(dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y], shr_tempCrossColors[crossIdx.x][crossIdx.y], sizeof(shr_tempCrossColors[crossIdx.x][crossIdx.y]));
}

__device__ void rotateCrossFaceColors(const int cubeIdx, const uint2 crossIdx, const MoveIdx moveIdx)
{
    if (moveIdx == MoveIdx_None) return;

    int alwaysMoveIdx = moveIdx / 2;

    for (int x = 0; x < 8; x++)
    {
        Move cornerMove = const_faceCornerMoves[moveIdx][x];
        for (int y = 0; y < 2; y++)
        {
            shr_tempCrossColors[crossIdx.x][crossIdx.y][cornerMove.targetLayer][cornerMove.targetCube][cornerMove.targetSides[y]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][cornerMove.originLayer][cornerMove.originCube][cornerMove.originSides[y]];
            shr_tempCrossColors[crossIdx.x][crossIdx.y][cornerMove.targetLayer][cornerMove.targetCube][const_faceAlwaysMoves[alwaysMoveIdx][y]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][cornerMove.originLayer][cornerMove.originCube][const_faceAlwaysMoves[alwaysMoveIdx][y]];
        }
    }

    for (int x = 0; x < 12; x++)
    {
        Move edgeMove = const_faceEdgeMoves[moveIdx][x];
        if (x < 8)
        {
            shr_tempCrossColors[crossIdx.x][crossIdx.y][edgeMove.targetLayer][edgeMove.targetCube][edgeMove.targetSides[0]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][edgeMove.originLayer][edgeMove.originCube][edgeMove.originSides[0]];
        }
        else
        {
            for (int y = 0; y < 2; y++)
            {
                shr_tempCrossColors[crossIdx.x][crossIdx.y][edgeMove.targetLayer][edgeMove.targetCube][edgeMove.targetSides[y]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][edgeMove.originLayer][edgeMove.originCube][edgeMove.originSides[y]];
            }
        }

        for (int i = 0; i < 2; i++)
        {
            shr_tempCrossColors[crossIdx.x][crossIdx.y][edgeMove.targetLayer][edgeMove.targetCube][const_faceAlwaysMoves[alwaysMoveIdx][i]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][edgeMove.originLayer][edgeMove.originCube][const_faceAlwaysMoves[alwaysMoveIdx][i]];
        }
    }

    for (int x = 0; x < 6; x++)
    {
        Move centerMove = const_faceCenterMoves[moveIdx][x];
        shr_tempCrossColors[crossIdx.x][crossIdx.y][centerMove.targetLayer][centerMove.targetCube][centerMove.targetSides[0]] = dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y][centerMove.originLayer][centerMove.originCube][centerMove.originSides[0]];
    }

    memcpy(dev_crossColors[cubeIdx][crossIdx.x][crossIdx.y], shr_tempCrossColors[crossIdx.x][crossIdx.y], sizeof(shr_tempCrossColors[crossIdx.x][crossIdx.y]));
}

__device__ void turnCrossLayer(const int cubeIdx, const uint2 crossIdx, const CubeLayer cubeLayer, const Direction direction, const bool twice) {
    rotateCrossLayerColors(cubeIdx, crossIdx, cubeLayer, direction);
    if (twice)
    {
        rotateCrossLayerColors(cubeIdx, crossIdx, cubeLayer, direction);
    }
}

__device__ void turnCrossCube(const int cubeIdx, const uint2 crossIdx, const Direction direction, const bool twice) {
    MoveIdx moveIdx = const_cubeTurnMoveIdxs[direction];
    rotateCrossFaceColors(cubeIdx, crossIdx, moveIdx);
    if (twice)
    {
        rotateCrossFaceColors(cubeIdx, crossIdx, moveIdx);
    }
}