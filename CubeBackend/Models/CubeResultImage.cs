namespace CubeBackend.Models
{
    public class CubeResultImage
    {
        public byte[] Pixels { get; set; }
        public string[] Colors { get; set; }
        public int ResultWidth { get; set; }
        public int ResultHeight { get; set; }

        public CubeResultImage()
        {
            Pixels = Array.Empty<byte>();
            Colors = Array.Empty<string>();
        }
    }
}
