#include "pll_orient_references.cuh"

__constant__ const Reference const_PLLOrientReference =
{
	Layer_Middle,
	Cube_Top,
	Side_Top
};

__constant__ const Reference const_PLLOrientTargetReferences[4] =
{
	{
		Layer_Front,
		Cube_Top_Left,
		Side_Top
	},
	{
		Layer_Back,
		Cube_Top_Left,
		Side_Top
	},
	{
		Layer_Back,
		Cube_Top_Right,
		Side_Top
	},
	{
		Layer_Front,
		Cube_Top_Right,
		Side_Top
	}
};

__constant__ const Reference const_PLLOrientCurrentTargetReference =
{
	Layer_Front,
	Cube_Top_Left,
	Side_Top
};

__constant__ const Reference const_PLLOrientEdgeMatchReferences[2] =
{
	{
		Layer_Front,
		Cube_Center,
		Side_Front
	},
	{
		Layer_Front,
		Cube_Left,
		Side_Front
	}
};

__constant__ const Reference const_PLLOrientCornerMatchReferences[4] =
{
	{
		Layer_Front,
		Cube_Center,
		Side_Front
	},
	{
		Layer_Front,
		Cube_Bottom_Left,
		Side_Front
	},
	{
		Layer_Middle,
		Cube_Left,
		Side_Left
	},
	{
		Layer_Front,
		Cube_Bottom_Left,
		Side_Left
	}
};

__constant__ const Reference const_PLLOrientFinalReferences[2] =
{
	{
		Layer_Front,
		Cube_Top,
		Side_Front
	},
	{
		Layer_Front,
		Cube_Center,
		Side_Front
	}
};