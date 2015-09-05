using App.Domino;
using App.Models;
using System.Web.Http;

namespace App.Controllers.Api
{
    public class GameController : ApiController
    {
        private readonly ICanCreateGame _gameCreator;

        public GameController(ICanCreateGame gameCreator)
        {
            _gameCreator = gameCreator;
        }

        public GameModel Get()
        {
            return _gameCreator.Create(4,4,10);
        }
    }
}
