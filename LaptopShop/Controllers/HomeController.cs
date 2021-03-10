using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LaptopShop.Controllers
{

    /// <summary>
    /// This is to specifically load Angular
    /// </summary>
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Angular()
        {
            return View();
        }      
      
    }
}
