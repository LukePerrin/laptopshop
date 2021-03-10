using LaptopShop.Domain.ProductConfigs;
using LaptopShop.Domain.Products;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace LaptopShop.Persistence
{
    public class Repository : IRepository
    {
        private readonly ILogger<Repository> _logger;
        private readonly LaptopShopContext _ctx;

        public Repository(ILogger<Repository> logger, LaptopShopContext ctx)
        {
            this._logger = logger;
            this._ctx = ctx;
        }

        public List<ProductConfig> GetAllConfiguration()
        {
            return _ctx.ProductConfigs.ToList(); ;
        }

        public List<Product> GetAllProducts()
        {
            return _ctx.Products.ToList(); ;
        }
    }
}
