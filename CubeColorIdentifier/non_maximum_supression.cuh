#pragma once

#include "variables.cuh"

extern int** nonMaximumSupression(int** dev_gradientX, int** dev_gradientY, int** dev_gradient, float** dev_angles);