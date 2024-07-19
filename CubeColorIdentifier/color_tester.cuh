#pragma once

#include "variables.cuh"
#include "rgb_cube_color_converter.cuh"

extern std::vector<Center> testColors(Center* dev_centers, Color** image, Color** dev_image, int maxWidth, int maxHeight, int length);