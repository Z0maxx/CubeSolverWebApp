#pragma once

#include "variables.cuh"

extern int** gaussianBlur(int** dev_image, float sigma);