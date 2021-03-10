using LaptopShop.Domain.Common;
using System.ComponentModel.DataAnnotations;

namespace LaptopShop.Domain.Products
{
    public class Product 
    {       
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }
    }
}
