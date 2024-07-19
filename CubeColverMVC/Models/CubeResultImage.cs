namespace CubeColverMVC.Models
{
    public class CubeResultImage
    {
        public int[] Pixels { get; set; }
        public string[] Colors { get; set; }
        public int ResultWidth { get; set; }
        public int ResultHeight { get; set; }

        public CubeResultImage()
        {
            Pixels = Array.Empty<int>();
            Colors = Array.Empty<string>();
        }
    }
}
