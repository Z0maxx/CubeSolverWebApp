﻿#include "cube_solver.cuh"

int main(int argc, char* argv[])
{
	int idx = 1;
	int colors[3][9][6] = {};
	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 9; j++)
		{
			for (int k = 0; k < 6; k++)
			{
				char* a = argv[idx];
				colors[i][j][k] = atoi(a);
				idx++;
			}
		}
	}
	cudaSetDeviceFlags(cudaDeviceScheduleSpin);
	solve(colors);
	bool whiteOnly = atoi(argv[idx]);
	findSequence(whiteOnly);
	Notation sequence[maxStepCount]{};
	cudaMemcpyFromSymbol(sequence, dev_sequence, sizeof(sequence));
	for (int i = 0; i < maxStepCount; i++)
	{
		if (sequence[i] != None)
		{
			TranslatedNotation move = translateNotation(sequence[i]);
			printf("%d ", sequence[i]);
		}
	}
	if (edgeError)
	{
		printf("flipped-edge");
	}
	else if (cornerError)
	{
		printf("flipped-corner");
	}
	else
	{
		printf("no-error");
	}
}
