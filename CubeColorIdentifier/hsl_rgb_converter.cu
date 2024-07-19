#include "hsl_rgb_converter.cuh"

float hueToRgb(float p, float q, float t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1.0 / 6) return p + (q - p) * 6 * t;
	if (t < 1.0 / 2) return q;
	if (t < 2.0 / 3) return p + (q - p) * (2.0 / 3 - t) * 6;
	return p;
}

dim3 convertHslToRgb(float h, float s, float l) {
	float r = 0;
	float g = 0;
	float b = 0;

	if (s == 0) {
		r = g = b = l;
	}
	else {
		float q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		float p = 2 * l - q;
		r = hueToRgb(p, q, h + 1.0 / 3);
		g = hueToRgb(p, q, h);
		b = hueToRgb(p, q, h - 1.0 / 3);
	}

	return dim3(round(r * 255), round(g * 255), round(b * 255));
}