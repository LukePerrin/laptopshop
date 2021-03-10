using LaptopShop.Domain.ProductConfigs;
using LaptopShop.Domain.Products;
using System.Collections.Generic;

namespace LaptopShop.Persistence
{
    public interface IRepository
    {
        List<Product> GetAllProducts();
        List<ProductConfig> GetAllConfiguration();        
    }
}
