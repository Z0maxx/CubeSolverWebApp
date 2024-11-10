#include "cube_color_identifier.cuh"

__global__ void setBasePixel(int** dev_baseImage, int* dev_image)
{
	int idx = blockIdx.x * blockDim.x + threadIdx.x;
	if (idx >= const_imageLength * 3) return;
	int y = idx / (const_width * 3);
	int x = idx % (const_width * 3);
	dev_baseImage[y][x] = dev_image[idx];
}

void setVariables(int newWidth, int newHeight)
{
	height = newHeight;
	width = newWidth;
	heightSize = height * sizeof(int*);
	widthIntSize = width * sizeof(int);
	widthDoubleSize = width * sizeof(float);
	widthRGBSize = widthIntSize * 3;
	imageLength = height * width;
	blocks = ceil((float)imageLength / threadsPerBlock);
	baseImageLength = imageLength * 3;

	cudaMemcpyToSymbol(const_width, &width, sizeof(int));
	cudaMemcpyToSymbol(const_height, &height, sizeof(int));
	cudaMemcpyToSymbol(const_imageLength, &imageLength, sizeof(int));
}

void identifyColors(int* image)
{
	int** dev_baseImage;
	cudaMalloc(&dev_baseImage, heightSize);
	int* dev_image;
	int size = height * width * 3 * sizeof(int);
	cudaMalloc(&dev_image, size);
	cudaMemcpy(dev_image, image, size, cudaMemcpyHostToDevice);
	int** baseImage = (int**)malloc(heightSize);
	for (int i = 0; i < height; i++)
	{
		if (baseImage != nullptr)
		{
			cudaMalloc(&baseImage[i], widthRGBSize);
		}
	}
	cudaMemcpy(dev_baseImage, baseImage, heightSize, cudaMemcpyHostToDevice);
	int blocksBaseImage = ceil((float)width * height * 3 / threadsPerBlock);
	setBasePixel CUDA_KERNEL(blocksBaseImage, threadsPerBlock)(dev_baseImage, dev_image);
	cudaDeviceSynchronize();

	int** dev_sharpened = sharpenImage(dev_baseImage);
	int** dev_meanShifted = meanShift(dev_sharpened);

	setVariables(width / sample, height / sample);

	int** dev_grayscaled = grayscale(dev_meanShifted);
	int** dev_blurred1 = gaussianBlur(dev_grayscaled, 1.2);
	int** dev_blurred2 = gaussianBlur(dev_grayscaled, 1.5);
	int** dev_segmented = segmentImage(dev_blurred1);
	int** filtered = (int**)malloc(heightSize);
	int** dev_filtered = filterColor(dev_meanShifted, dev_segmented, filtered);
	int* maxSquareHeight = new int;
	int* maxSquareWidth = new int;
	int* length = new int;
	Center* dev_centers = cubeCenters(dev_filtered, maxSquareHeight, maxSquareWidth, length);

	int* minX = new int;
	int* minY = new int;
	int* maxX = new int;
	int* maxY = new int;
	testCenters(dev_centers, length, minY, minX, maxY, maxX);
	if (*maxX > *minX && *maxY > *minY)
	{
		*minX -= 10;
		*minY -= 10;
		*maxX += 10;
		*maxY += 10;
		if (*minX < 0) *minX = 0;
		if (*minY < 0) *minY = 0;
		if (*maxX >= width) *maxX = width - 1;
		if (*maxY >= height) *maxY = height - 1;
		setVariables(*maxX - *minX + 1, *maxY - *minY + 1);
		int** dev_reducedBlurred;
		cudaMalloc(&dev_reducedBlurred, heightSize);
		int** dev_reducedMeanShifted;
		cudaMalloc(&dev_reducedMeanShifted, heightSize);
		reduceMeanShifted(dev_blurred2, dev_reducedBlurred, dev_meanShifted, dev_reducedMeanShifted, *minX, *minY);
		int** dev_sobelX = sobelX5x5(dev_reducedBlurred);
		int** dev_sobelY = sobelY5x5(dev_reducedBlurred);
		int** dev_sobel = sobel(dev_sobelX, dev_sobelY);
		float** dev_angles = gradientAngle(dev_sobelX, dev_sobelY);
		int** dev_supressed = nonMaximumSupression(dev_sobelX, dev_sobelY, dev_sobel, dev_angles);
		int** thresholded = (int**)malloc(heightSize);
		int** dev_thresholded = hysteresisThreshold(dev_supressed, thresholded, 100, 550);
		std::vector<HoughLine> houghLines = houghTransform(dev_thresholded, dev_angles, 30);
		int** resHoughImage = (int**)malloc(heightSize);
		int** dev_houghImage = houghImage(houghLines, resHoughImage, thresholded, dev_thresholded);
		insideImage(dev_houghImage, resHoughImage);
		minMaxCoords(dev_houghImage, minX, minY, maxX, maxY);
		setVariables(*maxX - *minX + 1, *maxY - *minY + 1);

		if (width > 0 && height > 0)
		{
			printf("%d %d\n", width, height);
			int** dev_reducedThresholded;
			float** dev_reducedAngles;
			cudaMalloc(&dev_reducedThresholded, heightSize);
			cudaMalloc(&dev_reducedAngles, heightSize);
			Color** dev_reducedBaseImage;
			cudaMalloc(&dev_reducedBaseImage, heightSize);
			Color** reducedBaseImage = (Color**)malloc(heightSize);
			int** dev_reducedSegmentedImage;
			cudaMalloc(&dev_reducedSegmentedImage, heightSize);
			reduce(dev_thresholded, dev_reducedThresholded, dev_angles, dev_reducedAngles, dev_reducedMeanShifted, reducedBaseImage, dev_reducedBaseImage, *minX, *minY);
			houghLines = houghTransform(dev_reducedThresholded, dev_reducedAngles, 30);
			int** reducedHoughImage = (int**)malloc(heightSize);
			int** dev_reducedHoughImage = houghImage(houghLines, reducedHoughImage, thresholded, dev_reducedThresholded);
			insideImage(dev_reducedHoughImage, reducedHoughImage);
			dev_centers = cubeCenters(dev_reducedHoughImage, maxSquareHeight, maxSquareWidth, length);

			std::vector<Center> testedCenters = testColors(dev_centers, reducedBaseImage, dev_reducedBaseImage, *maxSquareWidth, *maxSquareHeight, *length);
			if (testedCenters.size() >= 9)
			{
				std::vector<std::string> colors = cubeColors(testedCenters);
				std::string colorsStr = "";
				for (int i = 0; i < 8; i++)
				{
					colorsStr += colors[i] + "|";
				}
				colorsStr += colors[8];
				printf("%s", colorsStr.c_str());
			}
			else
			{
				printf("||||||||");
			}
		}
		else
		{
			printf("%d %d\n", 0, 0);
			printf("||||||||");
		}
	}
	else
	{
		printf("%d %d\n", 0, 0);
		printf("||||||||");
	}
}