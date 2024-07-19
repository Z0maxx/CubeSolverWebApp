#pragma once

#include "cuda_runtime.h"
#include "device_launch_parameters.h"
#include "device_atomic_functions.h"
#include "structs.cuh"
#include "ms_clock.cuh"
#include "hsl_rgb_converter.cuh"
#include <stdlib.h>
#include <math.h>
#include <stdio.h>
#include <vector>
#include <string>
#include <thread>
#include <atomic>
#include <algorithm>

#define PI 3.14159265358979323846

#ifdef __INTELLISENSE__
#define CUDA_KERNEL(...)
#else
#define CUDA_KERNEL(...) <<< __VA_ARGS__ >>>
#endif

extern __constant__ int const_width;
extern __constant__ int const_height;
extern __constant__ int const_imageLength;

extern __device__ int getIdx();
extern __device__ int getY(int idx);
extern __device__ int getX(int idx);

extern int width;
extern int height;
extern int imageLength;
extern int baseImageLength;
extern int heightSize;
extern int widthIntSize;
extern int widthDoubleSize;
extern int widthRGBSize;
extern int threadsPerBlock;
extern int blocks;
extern cudaError_t error;
extern char* fileName;