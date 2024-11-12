using System.ComponentModel.DataAnnotations;

namespace CubeBackend.Models
{
    public class CubeImage
    {
        [Required]
        public byte[]? Pixels { get; set; }

        [Required]
        [Range(640, 1920)]
        public int? Width { get; set; }

        [Required]
        [Range(480, 1080)]
        public int? Height { get; set; }
    }
}
