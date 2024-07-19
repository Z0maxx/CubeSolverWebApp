namespace CubeColverMVC.Models
{
    public class CubeSolve
    {
        public IEnumerable<int> Moves { get; set; }
        public string? Error { get; set; }
        public CubeSolve()
        {
            Moves = new List<int>();
        }
    }
}
