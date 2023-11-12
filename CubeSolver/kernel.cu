#include "cube_solver.cuh"

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
                const char *a = argv[idx];
                colors[i][j][k] = atoi(a);
                idx++;
            }
        }
    }
    cudaSetDeviceFlags(cudaDeviceScheduleSpin);
    solve(colors);
    findSequence();
    Notation sequence[263]{};
    cudaMemcpyFromSymbol(sequence, dev_sequence, sizeof(sequence));
    for (int i = 0; i < 263; i++)
    {
        if (sequence[i] != None)
        {
            const TranslatedNotation move = translateNotation(sequence[i]);
            printf("%d ", sequence[i]);
        }
    }
}
