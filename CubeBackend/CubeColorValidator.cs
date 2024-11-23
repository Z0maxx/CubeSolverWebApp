namespace CubeBackend
{
    public enum Cube
    {
        TopLeft = 0,
        Top = 1,
        TopRight = 2,
        Left = 3,
        Center = 4,
        Right = 5,
        BottomLeft = 6,
        Bottom = 7,
        BottomRight = 8
    };

    public enum Layer
    {
        Front = 0,
        Middle = 1,
        Back = 2
    };

    public enum Side
    {
        Right = 0,
        Left = 1,
        Top = 2,
        Bottom = 3,
        Front = 4,
        Back = 5
    };

    class CornerColoredSides
    {
        public Layer Layer { get; set; }
        public Cube Cube { get; set; }
        public List<Side> Sides { get; set; }

        public CornerColoredSides(Layer layer, Cube cube, List<Side> sides)
        {
            Layer = layer;
            Cube = cube;
            Sides = sides;
        }
    }

    class EdgeColoredSides
    {
        public Layer Layer { get; set; }
        public Cube Cube { get; set; }
        public List<Side> Sides { get; set; }

        public EdgeColoredSides(Layer layer, Cube cube, List<Side> sides)
        {
            Layer = layer;
            Cube = cube;
            Sides = sides;
        }
    }

    class CenterColoredSide
    {
        public Layer Layer { get; set; }
        public Cube Cube { get; set; }
        public Side Side { get; set; }

        public CenterColoredSide(Layer layer, Cube cube, Side side)
        {
            Layer = layer;
            Cube = cube;
            Side = side;
        }
    }

    class CenterPossibleNeighborColors
    {
        public int Color { get; set; }
        public List<int> NeighborColors { get; set; }
        public int PairColor { get; set; }

        public CenterPossibleNeighborColors(int color, List<int> neighborColors, int pairColor)
        {
            Color = color;
            NeighborColors = neighborColors;
            PairColor = pairColor;
        }
    }

    public static class CubeColorValidator
    {
        private static readonly int black = 0;
        private static readonly int white = 1;
        private static readonly int red = 2;
        private static readonly int green = 3;
        private static readonly int blue = 4;
        private static readonly int yellow = 5;
        private static readonly int orange = 6;
        private static readonly List<List<int>> cornerPossibleColors = new()
        {
            new() { orange, green, yellow },
            new() { yellow, orange, green },
            new() { green, yellow, orange },
            new() { orange, yellow, blue },
            new() { yellow, blue, orange },
            new() { blue, orange, yellow },
            new() { orange, white, green },
            new() { white, green, orange },
            new() { green, orange, white },
            new() { orange, blue, white },
            new() { blue, white, orange },
            new() { white, orange, blue },
            new() { red, yellow, green },
            new() { yellow, green, red },
            new() { green, red, yellow },
            new() { red, blue, yellow },
            new() { blue, yellow, red },
            new() { yellow, red, blue },
            new() { red, green, white },
            new() { green, white, red },
            new() { white, red, green },
            new() { red, white, blue },
            new() { white, blue, red },
            new() { blue, red, white }
        };
        private static readonly List<CornerColoredSides> cornerColoredSidesList = new()
        {
            new (
                Layer.Front,
                Cube.TopLeft,
                new() { Side.Front, Side.Left, Side.Top }
            ),
            new (
                Layer.Front,
                Cube.TopRight,
                new() { Side.Front, Side.Top, Side.Right }
            ),
            new (
                Layer.Front,
                Cube.BottomLeft,
                new() { Side.Front, Side.Bottom, Side.Left }
            ),
            new (
                Layer.Front,
                Cube.BottomRight,
                new() { Side.Front, Side.Right, Side.Bottom }
            ),
            new (
                Layer.Back,
                Cube.TopLeft,
                new() { Side.Back, Side.Top, Side.Left }
            ),
            new (
                Layer.Back,
                Cube.TopRight,
                new() { Side.Back, Side.Right, Side.Top }
            ),
            new (
                Layer.Back,
                Cube.BottomLeft,
                new() { Side.Back, Side.Left, Side.Bottom }
            ),
            new (
                Layer.Back,
                Cube.BottomRight,
                new() { Side.Back, Side.Bottom, Side.Right }
            )
        };
        private static readonly List<List<int>> edgePossibleColors = new()
        {
            new () { orange, yellow },
            new () { yellow, orange },
            new () { orange, white },
            new () { white, orange },
            new () { green, yellow },
            new () { yellow, green },
            new () { orange, green },
            new () { green, orange },
            new () { orange, blue },
            new () { blue, orange },
            new () { blue, yellow },
            new () { yellow, blue },
            new () { green, white },
            new () { white, green },
            new () { blue, white },
            new () { white, blue },
            new () { red, yellow },
            new () { yellow, red },
            new () { red, green },
            new () { green, red },
            new () { red, white },
            new () { white, red },
            new () { red, blue },
            new () { blue, red }
        };
        private static readonly List<EdgeColoredSides> edgeColoredSidesList = new() {
            new(
                Layer.Front,
                Cube.Top,
                new() { Side.Front, Side.Top }
            ),
            new(
                Layer.Front,
                Cube.Bottom,
                new() { Side.Front, Side.Bottom }
            ),
            new(
                Layer.Front,
                Cube.Left,
                new() { Side.Front, Side.Left }
            ),
            new(
                Layer.Front,
                Cube.Right,
                new() { Side.Front, Side.Right }
            ),
            new(
                Layer.Middle,
                Cube.TopLeft,
                new() { Side.Left, Side.Top }
            ),
            new(
                Layer.Middle,
                Cube.TopRight,
                new() { Side.Right, Side.Top }
            ),
            new(
                Layer.Middle,
                Cube.BottomLeft,
                new() { Side.Left, Side.Bottom }
            ),
            new(
                Layer.Middle,
                Cube.BottomRight,
                new() { Side.Right, Side.Bottom }
            ),
            new(
                Layer.Back,
                Cube.Top,
                new() { Side.Back, Side.Top }
            ),
            new(
                Layer.Back,
                Cube.Bottom,
                new() { Side.Back, Side.Bottom }
            ),
            new(
                Layer.Back,
                Cube.Left,
                new() { Side.Back, Side.Left }
            ),
            new(
                Layer.Back,
                Cube.Right,
                new() { Side.Back, Side.Right }
            )
        };
        private static readonly List<CenterColoredSide> centerColoredSides = new()
        {
            new (
                Layer.Front,
                Cube.Center,
                Side.Front
            ),
            new (
                Layer.Middle,
                Cube.Left,
                Side.Left
            ),
            new (
                Layer.Back,
                Cube.Center,
                Side.Back
            ),
            new (
                Layer.Middle,
                Cube.Right,
                Side.Right
            ),
            new (
                Layer.Middle,
                Cube.Top,
                Side.Top
            ),
            new (
                Layer.Middle,
                Cube.Bottom,
                Side.Bottom
            )
        };
        private static readonly List<CenterPossibleNeighborColors> centerPossibleNeighborColorsList = new()
        {
            new(white, new() { red, blue, orange, green }, yellow),
            new(yellow, new() { red, green, orange, blue }, white),
            new(red, new() { yellow, blue, white, green }, orange),
            new(orange, new() { blue, yellow, green, white }, red),
            new(blue, new() { white, red, yellow, orange }, green),
            new(green, new() { white, orange, yellow, red }, blue)
        };

        public static void ValidateColors(int[][][] colors)
        {
            bool countsInvalid = AreCountsInvalid(colors);
            bool cornersInvalid = AreCornersInvalid(colors);
            bool edgesInvalid = AreEdgesInvalid(colors);
            bool centersInvalid = AreCentersInvalid(colors);

            if (countsInvalid || cornersInvalid || edgesInvalid || centersInvalid)
            {
                throw new ArgumentException("Some pieces have invalid color(s).");
            }
        }

        private static bool AreCountsInvalid(int[][][] colors)
        {
            List<int> counts = new(new int[6]);
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 9; j++)
                {
                    for (int k = 0; k < 6; k++)
                    {
                        int color = colors[i][j][k];
                        if (color != black)
                        {
                            counts[color - 1]++;
                        }
                    }
                }
            }

            return counts.Exists(count => count != 9);
        }

        private static bool AreCornersInvalid(int[][][] colors)
        {
            return cornerColoredSidesList.Exists(corner =>
            {
                int[] cube = colors[(int)corner.Layer][(int)corner.Cube];
                List<Side> sides = corner.Sides;
                List<int> cornerColors = new() { cube[(int)sides[0]], cube[(int)sides[1]], cube[(int)sides[2]] };

                return cornerPossibleColors.TrueForAll(possibleColor =>
                {
                    int i = 0;
                    while (i < 3 && cornerColors[i] == possibleColor[i])
                    {
                        i++;
                    }
                    return i != 3;
                });
            });
        }

        private static bool AreEdgesInvalid(int[][][] colors)
        {
            return edgeColoredSidesList.Exists(edge =>
            {
                int[] cube = colors[(int)edge.Layer][(int)edge.Cube];
                List<Side> sides = edge.Sides;
                List<int> edgeColors = new() { cube[(int)sides[0]], cube[(int)sides[1]] };

                return edgePossibleColors.TrueForAll(possibleColor =>
                {
                    int i = 0;
                    while (i < 2 && edgeColors[i] == possibleColor[i])
                    {
                        i++;
                    }
                    return i != 2;
                });
            });
        }

        private static bool DoesCenterColorMatch(int[][][] colors, CenterColoredSide center, int color)
        {
            return colors[(int)center.Layer][(int)center.Cube][(int)center.Side] == color;
        }

        private static bool AreCentersInvalid(int[][][] colors)
        {
            CenterPossibleNeighborColors? centerNeighborColors = centerPossibleNeighborColorsList.Find(p => DoesCenterColorMatch(colors, centerColoredSides[5], p.Color));
            if (centerNeighborColors == null || !DoesCenterColorMatch(colors, centerColoredSides[4], centerNeighborColors.PairColor))
            {
                return true;
            }

            int start = 0;
            while (start < 4)
            {
                int matches = 0;
                for (int i = 0; i < 4; i++)
                {
                    int idx = i + start;
                    if (idx >= 4)
                    {
                        idx %= 4;
                    }

                    if (DoesCenterColorMatch(colors, centerColoredSides[i], centerNeighborColors.NeighborColors[idx]))
                    {
                        matches++;
                    }
                }

                if (matches == 4)
                {
                    return false;
                }

                start++;
            }

            return true;
        }
    }
}
