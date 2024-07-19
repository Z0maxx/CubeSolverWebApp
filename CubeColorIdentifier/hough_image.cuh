#pragma once

#include "variables.cuh"

extern int** houghImage(std::vector<HoughLine> houghLines, int** image, int** thresholded, int** dev_thresholded);