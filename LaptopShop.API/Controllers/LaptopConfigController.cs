using LaptopShop.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace LaptopShop.API.Controllers
{
    [Route("api/[Controller]")]
    public class LaptopConfigController : Controller
    {

        private readonly IRepository _repository;
        private readonly ILogger<LaptopConfigController> _logger;
        public LaptopConfigController(IRepository repository, ILogger<LaptopConfigController> logger)
        {
            _repository = repository;
            _logger = logger;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var result = _repository.GetAllConfiguration();
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products config: {ex}");
                return BadRequest("Failed to get products config");
            }
        }
    }
}
