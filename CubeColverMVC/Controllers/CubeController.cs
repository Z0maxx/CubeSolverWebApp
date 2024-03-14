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
        public IEnumerable<int> Solve(int[][][] cubeColors)
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

        [HttpPost]
        public CubeResultImage IdentifyColors(CubeImage image)
        {
            string file = $"{Guid.NewGuid()}.dat";
            System.IO.File.WriteAllBytes(file, image.Pixels.Select(p => (byte)p).ToArray());
            var identifier = new Process()
            {
                StartInfo = new ProcessStartInfo()
                {
                    FileName = "CubeColorIdentifier.exe",
                    CreateNoWindow = true,
                    Arguments = $"{image.Width} {image.Height} {file}",
                    RedirectStandardError = true,
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                }
            };
            identifier.Start();
            string error = identifier.StandardError.ReadToEnd();
            CubeResultImage resultImage = new();
            if (error == "")
            {
                string[] result = identifier.StandardOutput.ReadToEnd().Split('\n');
                string[] widthHeight = result[0].Split(' ');
                string[] resultColors = result[1].Split('|');
                resultImage.Colors = resultColors;
                resultImage.Pixels = System.IO.File.ReadAllBytes(file).Select(p => (int)p).ToArray();
                resultImage.ResultWidth = int.Parse(widthHeight[0]);
                resultImage.ResultHeight = int.Parse(widthHeight[1]);
            }
            System.IO.File.Delete(file);
            return resultImage;
        }
    }
}
