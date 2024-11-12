#pragma once

#include "cuda_runtime.h"
#include "enums.h"
#include "structs.h"

extern __constant__ const Reference const_PLLOrientReference;
extern __constant__ const Reference const_PLLOrientTargetReferences[4];
extern __constant__ const Reference const_PLLOrientCurrentTargetReference;
extern __constant__ const Reference const_PLLOrientEdgeMatchReferences[2];
extern __constant__ const Reference const_PLLOrientCornerMatchReferences[4];
extern __constant__ const Reference const_PLLOrientFinalReferences[2];