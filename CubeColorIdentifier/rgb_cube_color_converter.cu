#include "rgb_cube_color_converter.cuh"

__device__ CubeColor convertRgbToCubeColor(int r, int g, int b)
{
	float R = r;
	float G = g;
	float B = b;
	float sumVal = (R + G + B);
	float I = (float)sumVal / 3;
	float minval = fmin(fmin(R, G), B);
	float S = 1 - 3 * minval / sumVal;
	float top = ((R - G) + (R - B)) / 2;
	float bottom = sqrt(pow(R - G, 2) + (R - B) * (G - B)) + 0.0000001;
	float theta = acos(top / bottom);

	float H = theta;
	if (B > G)
	{
		H = 360 * PI / 180 - theta;
	}
	H = H * 180 / PI;

	float deg = H;
	if (I > 150 && S <= 0.25)
	{
		return CubeColor_White;
	}
	if (I > 20 && S > 0.25)
	{
		if (360 - deg < 10 || deg <= 10)
		{
			return CubeColor_Red;
		}
		if (deg > 10 && deg <= 40)
		{
			return CubeColor_Orange;
		}
		if (deg > 40 && deg <= 70)
		{
			return CubeColor_Yellow;
		}
		if (deg > 70 && deg <= 160)
		{
			return CubeColor_Green;
		}
		if (deg > 160 && deg <= 260)
		{
			return CubeColor_Blue;
		}
	}
	return CubeColor_None;
}