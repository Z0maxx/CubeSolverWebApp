#pragma once

#include "enums.cuh"

typedef struct HoughLine_s
{
	int rho;
	int theta;
} HoughLine;

typedef struct Color_s
{
	int r;
	int g;
	int b;
} Color;

typedef struct Center_s
{
	int x;
	int y;
	int halfHeight;
	int halfWidth;
	int height;
	int width;
	int size;
	bool accepted;
	CubeColor mainColor;
} Center;

typedef struct MeanShiftVars_s
{
	int rx;
	unsigned char blue2;
	unsigned char green2;
	unsigned char red2;
	float meanShiftRed;
	float meanShiftGreen;
	float meanShiftBlue;
	int count;
} MeanShiftVars;