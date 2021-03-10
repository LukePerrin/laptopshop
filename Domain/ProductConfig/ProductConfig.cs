using LaptopShop.Domain.Common;
using System.ComponentModel.DataAnnotations;

namespace LaptopShop.Domain.ProductConfigs
{
    public class ProductConfig 
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string Code { get; set; }

    }
}
