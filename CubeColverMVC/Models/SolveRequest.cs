namespace CubeColverMVC.Models
{
    public class SolveRequest
    {
        public int[][][] Colors { get; set; }
        public bool WhiteCross { get; set; }
        public SolveRequest()
        {
            Colors = Array.Empty<int[][]>();
        }
    }
}
