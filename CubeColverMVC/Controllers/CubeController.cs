using CubeColverMVC.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text;
using System.Text.Json;

namespace CubeColverMVC.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class CubeController : ControllerBase
    {
        [HttpPost]
        public async Task<IEnumerable<int>> Solve(int[][][] cubeColors)
        {
            int[] a = cubeColors.SelectMany(x => x).SelectMany(x => x).Select(x => x).ToArray();
            string b = string.Join(' ', a);
            var solver = new Process()
            {
                StartInfo = new ProcessStartInfo()
                {
                    FileName = "CubeSolver.exe",
                    CreateNoWindow = true,
                    Arguments = $"/c{b}",
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                }
            };
            solver.Start();
            string moves = solver.StandardOutput.ReadToEnd();
            return moves.Replace("\"", "").Split(' ')[0..^1].Select(x => int.Parse(x));

        }
    }
}
