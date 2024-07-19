#pragma once

#include "variables.cuh"

extern int** sobelX5x5(int** dev_image);
extern int** sobelY5x5(int** dev_image);
extern int** sobel(int** dev_sobelX, int** dev_sobelY);