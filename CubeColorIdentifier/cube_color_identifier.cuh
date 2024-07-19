#pragma once

#include "color_filter.cuh"
#include "segment_image.cuh"
#include "mean_shift.cuh"
#include "center_tester.cuh"
#include "reduce_mean_shifted.cuh"
#include "rgb_image_sharpener.cuh"
#include "grayscale_filter.cuh"
#include "gaussian_blur_filter.cuh"
#include "sobel_filter.cuh"
#include "gradient_angle.cuh"
#include "non_maximum_supression.cuh"
#include "hysteresis_threshold.cuh"
#include "hough_transform.cuh"
#include "hough_image.cuh"
#include "inside_image.cuh"
#include "min_max_coords.cuh"
#include "reduce.cuh"
#include "cube_centers.cuh"
#include "cube_colors.cuh"
#include "color_tester.cuh"

extern void identifyColors(int* image);
extern void setVariables(int newWidth, int newHeight);