#pragma once

#include "variables.cuh"
#include "rgb_cube_color_converter.cuh"

extern int** filterColor(int** dev_image, int** dev_segmented, int** filtered);