#pragma once

#include "variables.cuh"

extern int** hysteresisThreshold(int** dev_image, int** thresholded, int lowerLimit, int upperLimit);