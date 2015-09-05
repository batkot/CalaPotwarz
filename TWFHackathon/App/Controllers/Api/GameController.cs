using System.Web.Http;

namespace App.Controllers.Api
{
    public class GameController : ApiController
    {
        private readonly IFoo _foo;

        public GameController(IFoo foo)
        {
            _foo = foo;
        }

        public string Get()
        {
            return _foo.DoStuff();
        }
    }

    public interface IFoo
    {
        string DoStuff();
    }

    public class Bar : IFoo
    {
        public string DoStuff()
        {
            return "Yo";
        }
    }
}
