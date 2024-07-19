#pragma once

#include <math.h>

#include "cuda_runtime.h"
#include "device_launch_parameters.h"
#include "variables.cuh"
#include "structs.h"
#include "device_atomic_functions.h"

extern void findSequence(bool whiteOnly);