using CubeBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace CubeBackend.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class CubeController : ControllerBase
    {
        private static void ValidateSolveRequest(SolveRequest solveRequest)
        {
            var context = new ValidationContext(solveRequest);
            var validationResults = new List<ValidationResult>();
            bool isValid = Validator.TryValidateObject(solveRequest, context, validationResults, true);
            if (!isValid)
            {
                throw new ArgumentException(string.Join(" ", validationResults.Select(r => r.ErrorMessage)));
            }

            if (solveRequest.Colors?.Length != 3 ||
                Array.Exists(solveRequest.Colors, layer => layer.Length != 9 ||
                Array.Exists(layer, cube => cube.Length != 6)))
            {
                throw new ArgumentException("The dimensions of the Colors array is invalid.");
            }

            if (Array.Exists(solveRequest.Colors, layer =>
                Array.Exists(layer, cube =>
                Array.Exists(cube, color => color < 0 || color > 6))))
            {
                throw new ArgumentException("The Colors array contains invalid value(s).");
            }

            CubeColorValidator.ValidateColors(solveRequest.Colors);
        }

        private static void ValidateCubeImage(CubeImage cubeImage)
        {
            var context = new ValidationContext(cubeImage);
            var validationResults = new List<ValidationResult>();
            bool isValid = Validator.TryValidateObject(cubeImage, context, validationResults, true);
            if (!isValid)
            {
                throw new ArgumentException(string.Join(" ", validationResults.Select(r => r.ErrorMessage)));
            }

            if (cubeImage.Pixels != null && cubeImage.Pixels.Length == 0) throw new ArgumentException("The Pixels array is empty.");
            if (cubeImage.Pixels != null && cubeImage.Width * cubeImage.Height * 3 != cubeImage.Pixels.Length) throw new ArgumentException("The length of the Pixels array doesn't match up with Width and Height.");
        }

        [HttpPost]
        public IActionResult Solve(SolveRequest solveRequest)
        {
            try
            {
                ValidateSolveRequest(solveRequest);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            int[] a = solveRequest.Colors!.SelectMany(x => x).SelectMany(x => x).ToArray();
            string b = string.Join(' ', a);
            var solver = new Process()
            {
                StartInfo = new ProcessStartInfo()
                {
                    FileName = "CubeSolver.exe",
                    CreateNoWindow = true,
                    Arguments = $"{b} {((bool)solveRequest.WhiteCross! ? 1 : 0)}",
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                }
            };
            solver.Start();
            string error = solver.StandardError.ReadToEnd();
            string[] result = solver.StandardOutput.ReadToEnd().Replace("\"", "").Split(' ');
            if (error != "" || result.Length == 1)
            {
                return BadRequest("There was an error while solving the cube.");
            }
            
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
            try
            {
                ValidateCubeImage(cubeImage);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            string file = $"{Guid.NewGuid()}.dat";
            System.IO.File.WriteAllBytes(file, cubeImage.Pixels!);
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
                return BadRequest("There was an error while identifying colors.");
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
