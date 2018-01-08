using Microsoft.AspNetCore.Mvc;

namespace QuantumHive.ShiLaLounge.App.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
