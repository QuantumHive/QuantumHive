using Microsoft.AspNetCore.Mvc;

namespace QuantumHive.RowinEnckhofPersonalTraining.App.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
