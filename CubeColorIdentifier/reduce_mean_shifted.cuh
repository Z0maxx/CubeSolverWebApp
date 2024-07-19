#pragma once

#include "variables.cuh"

extern void reduceMeanShifted(int** dev_blurred, int** dev_reducedBlurred, int** dev_meanShifted, int** dev_reducedMeanShifted, int minX, int minY);