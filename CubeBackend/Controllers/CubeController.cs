using CubeBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text;
using System.Text.Json;
using static System.Net.Mime.MediaTypeNames;

namespace CubeBackend.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class CubeController : ControllerBase
    {
        private static bool IsSolveRequestInvalid(SolveRequest solveRequest)
        {
            return solveRequest.Colors.Length != 3 ||
                Array.Exists(solveRequest.Colors, layer => layer.Length != 9 ||
                Array.Exists(layer, cube => cube.Length != 6 ||
                Array.Exists(cube, color => color < 0 || color > 6)));
        }

        private static bool IsCubeImageInvalid(CubeImage cubeImage)
        {
            return cubeImage.Pixels.Length == 0 || cubeImage.Width * cubeImage.Height * 3 != cubeImage.Pixels.Length;
        }
        [HttpPost]
        public IActionResult Solve(SolveRequest solveRequest)
        {
            if (IsSolveRequestInvalid(solveRequest))
            {
                return BadRequest("Invalid solve request");
            }

            int[] a = solveRequest.Colors.SelectMany(x => x).SelectMany(x => x).ToArray();
            string b = string.Join(' ', a);
            var solver = new Process()
            {
                StartInfo = new ProcessStartInfo()
                {
                    FileName = "CubeSolver.exe",
                    CreateNoWindow = true,
                    Arguments = $"{b} {(solveRequest.WhiteCross ? 1 : 0)}",
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                }
            };
            solver.Start();
            string error = solver.StandardError.ReadToEnd();
            if (error != "")
            {
                return BadRequest("There was an error while solving the qube");
            }

            string[] result = solver.StandardOutput.ReadToEnd().Replace("\"", "").Split(' ');
            error = result[^1];
            if (error == "flipped-edge")
            {
                error = "Flipped Edge";
            }
            else if (error == "flipped-corner")
            {
                error = "Flipped Corner";
            }
            else
            {
                error = "";
            }
            return Ok(new CubeSolve()
            {
                Moves = result[0..^1].Select(int.Parse),
                Error = error
            });
        }

        [HttpPost]
        public IActionResult IdentifyColors(CubeImage cubeImage)
        {
            if (IsCubeImageInvalid(cubeImage))
            {
                return BadRequest("Invalid CubeImage");
            }

            string file = $"{Guid.NewGuid()}.dat";
            System.IO.File.WriteAllBytes(file, cubeImage.Pixels);
            var identifier = new Process()
            {
                StartInfo = new ProcessStartInfo()
                {
                    FileName = "CubeColorIdentifier.exe",
                    CreateNoWindow = true,
                    Arguments = $"{cubeImage.Width} {cubeImage.Height} {file}",
                    RedirectStandardError = true,
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                }
            };
            identifier.Start();
            string error = identifier.StandardError.ReadToEnd();
            
            CubeResultImage resultImage = new();
            if (error != "")
            {
                return BadRequest("There was an error while identifying colors");
            }

            string[] result = identifier.StandardOutput.ReadToEnd().Split('\n');
            string[] widthHeight = result[0].Split(' ');
            string[] resultColors = result[1].Split('|');
            resultImage.Colors = resultColors;
            resultImage.Pixels = System.IO.File.ReadAllBytes(file);
            resultImage.ResultWidth = int.Parse(widthHeight[0]);
            resultImage.ResultHeight = int.Parse(widthHeight[1]);
            System.IO.File.Delete(file);

            return Ok(resultImage);
        }
    }
}
