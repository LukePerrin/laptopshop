using LaptopShop.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace LaptopShop.API.Controllers
{
    [Route("api/[Controller]")]
    public class ProductsController : Controller
    {

        private readonly IRepository _repository;
        private readonly ILogger<ProductsController> _logger;
        public ProductsController(IRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            try
            {                

                var result = _repository.GetAllProducts();
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }
    }
}
