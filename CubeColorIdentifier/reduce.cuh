#pragma once

#include "variables.cuh"

extern void reduce(int** dev_thresholded, int** dev_reducedThresholded, float** dev_angles, float** dev_reducedAngles, int** dev_baseImage, Color** reducedBaseImage, Color** dev_reducedBaseImage, int minX, int minY);