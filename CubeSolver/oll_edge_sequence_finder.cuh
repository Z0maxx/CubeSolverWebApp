#pragma once

#include "oll_edge_sequences.cuh"

extern __device__ const Notation* findOLLEdgeSequence(const bool match[4], const bool near[4]);