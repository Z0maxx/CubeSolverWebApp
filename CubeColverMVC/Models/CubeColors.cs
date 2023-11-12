namespace CubeColverMVC.Models
{
    public class CubeColors
    {
        public int[][][] Colors { get; set; }
        public CubeColors()
        {
            Colors = new int[3][][];
        }
    }
}
