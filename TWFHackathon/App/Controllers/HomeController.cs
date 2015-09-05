using App.Controllers.Api;
using System.Web.Mvc;

namespace App.Controllers
{
    public class HomeController : Controller
    {
        private readonly IFoo _foo;

        public HomeController(IFoo foo)
        {
            _foo = foo;
        }

        public ActionResult Index()
        {
            ViewBag.Text = _foo.DoStuff();
            return View();
        }
    }
}