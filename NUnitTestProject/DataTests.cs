using LaptopShop.Domain.ProductConfigs;
using LaptopShop.Domain.Products;
using LaptopShop.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using Newtonsoft.Json;
using NUnit.Framework;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace NUnitTestProject
{
    public class RepoTests
    {

        private Mock<ILogger<Repository>> repoLogger { get; set; }
        private Mock<LaptopShopContext> dbContext { get; set; }        

        [SetUp]
        public void Setup()
        {
            //setup fake logger to pass to repo
            repoLogger = new Mock<ILogger<Repository>>();            
            dbContext = new Mock<LaptopShopContext>();

            var jsonString = File.ReadAllText("JsonData/productData.json");
            var products = JsonConvert.DeserializeObject<List<Product>>(jsonString).AsQueryable();

            var mockSet = new Mock<DbSet<Product>>();
            mockSet.As<IQueryable<Product>>().Setup(m => m.Provider).Returns(products.Provider);
            mockSet.As<IQueryable<Product>>().Setup(m => m.Expression).Returns(products.Expression);
            mockSet.As<IQueryable<Product>>().Setup(m => m.ElementType).Returns(products.ElementType);
            mockSet.As<IQueryable<Product>>().Setup(m => m.GetEnumerator()).Returns(products.GetEnumerator());
            
            dbContext.Setup(x => x.Products).Returns(mockSet.Object);

            var jsonStringConfigs = File.ReadAllText("JsonData/laptopConfigData.json");
            var productConfigs = JsonConvert.DeserializeObject<List<ProductConfig>>(jsonStringConfigs).AsQueryable();

            var mockSetConfigs = new Mock<DbSet<ProductConfig>>();
            mockSetConfigs.As<IQueryable<ProductConfig>>().Setup(m => m.Provider).Returns(productConfigs.Provider);
            mockSetConfigs.As<IQueryable<ProductConfig>>().Setup(m => m.Expression).Returns(productConfigs.Expression);
            mockSetConfigs.As<IQueryable<ProductConfig>>().Setup(m => m.ElementType).Returns(productConfigs.ElementType);
            mockSetConfigs.As<IQueryable<ProductConfig>>().Setup(m => m.GetEnumerator()).Returns(productConfigs.GetEnumerator());
            
            dbContext.Setup(x => x.ProductConfigs).Returns(mockSetConfigs.Object);

        }

        /// <summary>
        /// Make sure we get 4 products
        /// </summary>
        [Test]
        public void TestProductsRepo()
        {
            /*no need to use ILaptopShopRepository to create test implementation as it's looking at json file
              anyway and not a database */
            var repo = new Repository(repoLogger.Object, dbContext.Object);
            var result = repo.GetAllProducts();
            Assert.AreEqual(result.Count, 4);
        }


        /// <summary>
        /// Make sure we get 8 product configurations
        /// </summary>
        [Test]
        public void TestConfigRepo()
        {
            /*no need to use ILaptopShopRepository to create test implementation as it's looking at json file
              anyway and not a database */
            var repo = new Repository(repoLogger.Object, dbContext.Object);
            var result = repo.GetAllConfiguration();

            Assert.AreEqual(result.Count, 8);
        }
    }
}