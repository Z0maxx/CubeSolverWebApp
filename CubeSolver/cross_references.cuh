#pragma once

#include "cuda_runtime.h"
#include "enums.h"
#include "structs.h"

extern __constant__ Reference const_crossReferences[2];
extern __constant__ Reference const_crossTargetReference;