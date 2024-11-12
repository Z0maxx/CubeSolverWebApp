using CubeBackend.Controllers;
using CubeBackend.Models;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;

namespace CubeBackend.UnitTests
{
    [TestFixture]
    public class CubeControllerTests
    {
        private readonly CubeController controller;
        private static Type badRequestType = typeof(BadRequestObjectResult);

        public CubeControllerTests()
        {
            controller = new CubeController();
        }

        [Test]
        [TestCase(-1)]
        [TestCase(0)]
        [TestCase(1)]
        [TestCase(636)]
        [TestCase(1921)]
        public void InvalidWidth_IdentityColors_ReturnsBadRequest(int width)
        {
            var cubeImage = new CubeImage()
            {
                Height = 480,
                Width = width,
                Pixels = [0, 0, 0]
            };

            var result = controller.IdentifyColors(cubeImage);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid CubeImage: The field Width must be between 640 and 1920."));
        }

        [Test]
        public void WidthNotPresent_IdentityColors_ReturnsBadRequest()
        {
            var cubeImage = new CubeImage()
            {
                Height = 480,
                Pixels = [0, 0, 0]
            };

            var result = controller.IdentifyColors(cubeImage);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid CubeImage: The Width field is required."));
        }

        [Test]
        [TestCase(-1)]
        [TestCase(0)]
        [TestCase(1)]
        [TestCase(479)]
        [TestCase(1081)]
        public void InvalidHeight_IdentifyColors_ReturnsBadRequest(int height)
        {
            var cubeImage = new CubeImage()
            {
                Width = 640,
                Height = height,
                Pixels = [0, 0, 0]
            };

            var result = controller.IdentifyColors(cubeImage);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid CubeImage: The field Height must be between 480 and 1080."));
        }

        [Test]
        public void HeightNotPresent_IdentifyColors_ReturnsBadRequest()
        {
            var cubeImage = new CubeImage()
            {
                Width = 640,
                Pixels = [0, 0, 0]
            };

            var result = controller.IdentifyColors(cubeImage);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid CubeImage: The Height field is required."));
        }

        [Test]
        public void PixelsNotPresent_IdentifyColors_ReturnsBadRequest()
        {
            var cubeImage = new CubeImage()
            {
                Width = 640,
                Height = 480
            };

            var result = controller.IdentifyColors(cubeImage);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid CubeImage: The Pixels field is required."));
        }

        [Test]
        public void EmptyPixels_IdentifyColors_ReturnsBadRequest()
        {
            var cubeImage = new CubeImage()
            {
                Width = 640,
                Height = 480,
                Pixels = []
            };

            var result = controller.IdentifyColors(cubeImage);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid CubeImage: The Pixels array is empty."));
        }

        [Test]
        public void PixelsNotMatchingWidthAndHeight_IdentifyColors_ReturnsBadRequest()
        {
            var cubeImage = new CubeImage()
            {
                Width = 640,
                Height = 480,
                Pixels = [0, 0, 0]
            };

            var result = controller.IdentifyColors(cubeImage);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid CubeImage: The length of the Pixels array doesn't match up with Width and Height."));
        }

        [Test]
        public void ColorsNotPresent_Solve_ReturnsBadRequest()
        {
            var solveRequest = new SolveRequest()
            {
                WhiteCross = true
            };

            var result = controller.Solve(solveRequest);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid SolveRequest: The Colors field is required."));
        }

        [Test]
        public void ColorsEmpty_Solve_ReturnsBadRequest()
        {
            var solveRequest = new SolveRequest()
            {
                WhiteCross = true,
                Colors = []
            };

            var result = controller.Solve(solveRequest);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid SolveRequest: The dimensions of the Colors array is invalid."));
        }

        [Test]
        public void WhiteCrossNotPresent_Solve_ReturnsBadRequest()
        {
            var solveRequest = new SolveRequest()
            {
                WhiteCross = null,
                Colors =
                [
                    [
                        [
                            0,
                            2,
                            5,
                            0,
                            3,
                            0
                        ],
                        [
                            0,
                            0,
                            3,
                            0,
                            1,
                            0
                        ],
                        [
                            6,
                            0,
                            3,
                            0,
                            1,
                            0
                        ],
                        [
                            0,
                            1,
                            0,
                            0,
                            6,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            5,
                            0
                        ],
                        [
                            5,
                            0,
                            0,
                            0,
                            6,
                            0
                        ],
                        [
                            0,
                            6,
                            0,
                            4,
                            5,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            4,
                            6,
                            0
                        ],
                        [
                            4,
                            0,
                            0,
                            5,
                            2,
                            0
                        ]
                    ],
                    [
                        [
                            0,
                            3,
                            6,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            3,
                            0,
                            0,
                            0
                        ],
                        [
                            3,
                            0,
                            5,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            6,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            2,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            1,
                            0,
                            4,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            4,
                            0,
                            0
                        ],
                        [
                            2,
                            0,
                            0,
                            1,
                            0,
                            0
                        ]
                    ],
                    [
                        [
                            0,
                            4,
                            1,
                            0,
                            0,
                            2
                        ],
                        [
                            0,
                            0,
                            2,
                            0,
                            0,
                            5
                        ],
                        [
                            3,
                            0,
                            1,
                            0,
                            0,
                            2
                        ],
                        [
                            0,
                            4,
                            0,
                            0,
                            0,
                            2
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0,
                            1
                        ],
                        [
                            3,
                            0,
                            0,
                            0,
                            0,
                            2
                        ],
                        [
                            0,
                            6,
                            0,
                            4,
                            0,
                            1
                        ],
                        [
                            0,
                            0,
                            0,
                            5,
                            0,
                            4
                        ],
                        [
                            5,
                            0,
                            0,
                            3,
                            0,
                            6
                        ]
                    ]
                ]
            };

            var result = controller.Solve(solveRequest);

            Assert.That(result, Is.InstanceOf(badRequestType));
            Assert.That((result as BadRequestObjectResult)?.Value, Is.EqualTo("Invalid SolveRequest: The WhiteCross field is required."));
        }
    }
}
