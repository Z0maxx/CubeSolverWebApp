#pragma once

#include <string.h>

#include "cube_rotations.cuh"
#include "cube_printer.cuh"
#include "ms_clock.cuh"
#include "variables.cuh"
#include "sequence_processor.cuh"
#include "notation_translator.cuh"
#include "cross_solver.cuh"
#include "f2l_corner_solver.cuh"
#include "f2l_edge_solver.cuh"
#include "oll_cross_solver.cuh"
#include "oll_edge_solver.cuh"
#include "pll_cycle_solver.cuh"
#include "pll_orient_solver.cuh"

extern void solve(const int cube[3][9][6]);