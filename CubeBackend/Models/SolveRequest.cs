using System.ComponentModel.DataAnnotations;

namespace CubeBackend.Models
{
    public class SolveRequest
    {
        [Required]
        public int[][][]? Colors { get; set; }

        [Required]
        public bool? WhiteCross { get; set; }
    }
}
