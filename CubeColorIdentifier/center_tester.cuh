#pragma once

#include "variables.cuh";

extern void testCenters(Center* dev_centers, int* length, int* minY, int* minX, int* maxY, int* maxX);
extern __device__ __host__ bool checkSize(Center center);