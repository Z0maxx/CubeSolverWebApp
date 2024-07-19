#pragma once

#include "variables.cuh"

extern std::vector<HoughLine> houghTransform(int** dev_image, float** dev_angles, int minPoints);