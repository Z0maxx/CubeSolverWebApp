
#include "cube_color_identifier.cuh"

int main(int argc, char** argv)
{
	cudaSetDeviceFlags(cudaDeviceScheduleSpin);
	cudaDeviceSetCacheConfig(cudaFuncCachePreferL1);
	cudaDeviceProp prop;
	cudaGetDeviceProperties(&prop, 0);
	threadsPerBlock = prop.maxThreadsPerBlock;
	int baseWidth = atoi(argv[1]);
	int baseHeight = atoi(argv[2]);
	setVariables(baseWidth, baseHeight);
	fileName = argv[3];
	char* imageChar = (char*)malloc(baseImageLength * sizeof(char));
	FILE* fileptr = fopen(fileName, "rb");
	fread(imageChar, sizeof(char), baseImageLength, fileptr);
	int* image = (int*)malloc(baseImageLength * sizeof(int));
	for (int i = 0; i < baseImageLength; i++)
	{
		image[i] = imageChar[i] < 0 ? imageChar[i] + 256 : imageChar[i];
	}
	fclose(fileptr);
	cudaEvent_t start, stop;
	float t;
	identifyColors(image);
	return 0;
}