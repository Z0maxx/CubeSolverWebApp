#include "cube_colors.cuh"

std::string getColor(CubeColor cubeColor)
{
	switch (cubeColor)
	{
	case CubeColor_White:
		return "white";
	case CubeColor_Red:
		return "red";
	case CubeColor_Blue:
		return "blue";
	case CubeColor_Yellow:
		return "yellow";
	case CubeColor_Green:
		return "green";
	case CubeColor_Orange:
		return "orange";
	default:
		return "";
	}
}

bool compCenterX(Center center1, Center center2)
{
	return center1.x < center2.x;
}

std::vector<std::string> cubeColors(std::vector<Center> centers)
{
	std::vector<std::string> colorNames(9);

	std::vector<std::vector<Center>> layers;
	int diffAvg = centers[1].y - centers[0].y;
	layers.push_back(std::vector<Center>(2));
	layers[0][0] = centers[0];
	layers[0][1] = centers[1];
	int layerIdx = 0;
	bool hadError = false;
	int i = 2;
	while (i < centers.size())
	{
		if (diffAvg == 0 && centers[i].y <= centers[i - 1].y + 5 || centers[i].y - centers[i - 1].y <= diffAvg * 5)
		{
			layers[layerIdx].push_back(centers[i]);
			int sum = 0;
			int length = layers[layerIdx].size();
			for (int j = 1; j < length; j++)
			{
				sum += layers[layerIdx][j].y - layers[layerIdx][j - 1].y;
			}
			diffAvg = sum / (length - 1);
		}
		else
		{
			layerIdx++;
			layers.push_back(std::vector<Center>(2));
			layers[layerIdx][0] = centers[i];
			if (i + 1 >= centers.size())
			{
				hadError = true;
			}
			else
			{
				layers[layerIdx][1] = centers[i + 1];
				diffAvg = centers[i + 1].y - centers[i].y;
				i++;
			}
		}
		i++;
	}

	if (!hadError)
	{
		for (int i = 0; i < layers.size(); i++)
		{
			std::sort(layers[i].begin(), layers[i].end(), compCenterX);
		}

		int middleCubeIdx1 = -1;
		int middleCubeIdx2 = -1;
		i = 1;
		
		while (i < layers.size() - 1 && middleCubeIdx1 == -1)
		{
			int j = 1;
			while (j < layers[i].size() - 1 && middleCubeIdx1 == -1)
			{
				int acceptedCount = 0;
				for (int k = i - 1; k <= i + 1; k++)
				{
					int l = j - 1;
					while (l < layers[k].size() && l <= j + 1)
					{
						if (layers[k][l].accepted)
						{
							acceptedCount++;
						}
						l++;
					}
				}
				if (acceptedCount == 9)
				{
					middleCubeIdx1 = i;
					middleCubeIdx2 = j;
				}
				j++;
			}
			i++;
		}

		hadError = false;
		i = middleCubeIdx1 - 1;
		int idx = 0;

		if (middleCubeIdx1 < layers.size() - 1)
		{
			while (i <= middleCubeIdx1 + 1 && !hadError)
			{
				int j = middleCubeIdx2 - 1;
				if (middleCubeIdx2 < layers[i].size() - 1)
				{
					while (j <= middleCubeIdx2 + 1)
					{
						colorNames[idx] = getColor(layers[i][j].mainColor);
						idx++;
						j++;
					}
				}
				else
				{
					hadError = true;
				}
				i++;
			}
		}
	}

	return colorNames;
}