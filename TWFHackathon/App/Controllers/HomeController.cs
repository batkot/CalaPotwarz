using App.Controllers.Api;
using System.Web.Mvc;

namespace App.Controllers
{
    public class HomeController : Controller
    {
        public HomeController()
        {
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Game(string Size = "M")
        {
            ViewBag.Size = Size;

            return View();
        }
    }
}