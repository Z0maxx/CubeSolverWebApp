#include "cube_rotations.cuh"

__shared__ Color shr_tempCubeColors[6][3][9][6];

__device__ void rotateLayerColors(const int cubeIdx, const CubeLayer cubeLayer, const Direction direction)
{
    memcpy(shr_tempCubeColors[cubeIdx], dev_colors[cubeIdx], sizeof(dev_colors[cubeIdx]));

    int alwaysMoveIdx = cubeLayer / 3;
    int directionIdx = direction % 2;

    for (int x = 0; x < 4; x++)
    {
        Move cornerMove = const_layerCornerMoves[cubeLayer][directionIdx][x];
        
        for (int y = 0; y < 2; y++)
        {
            shr_tempCubeColors[cubeIdx][cornerMove.targetLayer][cornerMove.targetCube][cornerMove.targetSides[y]] = dev_colors[cubeIdx][cornerMove.originLayer][cornerMove.originCube][cornerMove.originSides[y]];
            shr_tempCubeColors[cubeIdx][cornerMove.targetLayer][cornerMove.targetCube][const_layerAlwaysMoves[alwaysMoveIdx][y]] = dev_colors[cubeIdx][cornerMove.originLayer][cornerMove.originCube][const_layerAlwaysMoves[alwaysMoveIdx][y]];
        }
    }

    for (int x = 0; x < 4; x++)
    {
        Move edgeMove = const_layerEdgeMoves[cubeLayer][directionIdx][x];
        shr_tempCubeColors[cubeIdx][edgeMove.targetLayer][edgeMove.targetCube][edgeMove.targetSides[0]] = dev_colors[cubeIdx][edgeMove.originLayer][edgeMove.originCube][edgeMove.originSides[0]];
        for (int y = 0; y < 2; y++)
        {
            shr_tempCubeColors[cubeIdx][edgeMove.targetLayer][edgeMove.targetCube][const_layerAlwaysMoves[alwaysMoveIdx][y]] = dev_colors[cubeIdx][edgeMove.originLayer][edgeMove.originCube][const_layerAlwaysMoves[alwaysMoveIdx][y]];
        }
    }

    memcpy(dev_colors[cubeIdx], shr_tempCubeColors[cubeIdx], sizeof(shr_tempCubeColors[cubeIdx]));
}

__device__ void rotateFaceColors(const int cubeIdx, const MoveIdx moveIdx)
{
    if (moveIdx == MoveIdx_None) return;

    int alwaysMoveIdx = moveIdx / 2;

    for (int x = 0; x < 8; x++)
    {
        Move cornerMove = const_faceCornerMoves[moveIdx][x];
        for (int y = 0; y < 2; y++)
        {
            shr_tempCubeColors[cubeIdx][cornerMove.targetLayer][cornerMove.targetCube][cornerMove.targetSides[y]] = dev_colors[cubeIdx][cornerMove.originLayer][cornerMove.originCube][cornerMove.originSides[y]];
            shr_tempCubeColors[cubeIdx][cornerMove.targetLayer][cornerMove.targetCube][const_faceAlwaysMoves[alwaysMoveIdx][y]] = dev_colors[cubeIdx][cornerMove.originLayer][cornerMove.originCube][const_faceAlwaysMoves[alwaysMoveIdx][y]];
        }
    }

    for (int x = 0; x < 12; x++)
    {
        Move edgeMove = const_faceEdgeMoves[moveIdx][x];
        if (x < 8)
        {
            shr_tempCubeColors[cubeIdx][edgeMove.targetLayer][edgeMove.targetCube][edgeMove.targetSides[0]] = dev_colors[cubeIdx][edgeMove.originLayer][edgeMove.originCube][edgeMove.originSides[0]];
        }
        else
        {
            for (int y = 0; y < 2; y++)
            {
                shr_tempCubeColors[cubeIdx][edgeMove.targetLayer][edgeMove.targetCube][edgeMove.targetSides[y]] = dev_colors[cubeIdx][edgeMove.originLayer][edgeMove.originCube][edgeMove.originSides[y]];
            }
        }

        for (int i = 0; i < 2; i++)
        {
            shr_tempCubeColors[cubeIdx][edgeMove.targetLayer][edgeMove.targetCube][const_faceAlwaysMoves[alwaysMoveIdx][i]] = dev_colors[cubeIdx][edgeMove.originLayer][edgeMove.originCube][const_faceAlwaysMoves[alwaysMoveIdx][i]];
        }
    }

    for (int x = 0; x < 6; x++)
    {
        Move centerMove = const_faceCenterMoves[moveIdx][x];
        shr_tempCubeColors[cubeIdx][centerMove.targetLayer][centerMove.targetCube][centerMove.targetSides[0]] = dev_colors[cubeIdx][centerMove.originLayer][centerMove.originCube][centerMove.originSides[0]];
    }

    memcpy(dev_colors[cubeIdx], shr_tempCubeColors[cubeIdx], sizeof(shr_tempCubeColors[cubeIdx]));
}

__device__ void turnLayer(const int cubeIdx, const CubeLayer cubeLayer, const Direction direction, const bool twice) {
    rotateLayerColors(cubeIdx, cubeLayer, direction);
    if (twice)
    {
        rotateLayerColors(cubeIdx, cubeLayer, direction);
    }
}

__device__ void turnCube(const int cubeIdx, const Direction direction, bool twice) {
    MoveIdx moveIdx = const_cubeTurnMoveIdxs[direction];
    rotateFaceColors(cubeIdx, moveIdx);
    if (twice)
    {
        rotateFaceColors(cubeIdx, moveIdx);
    }
}