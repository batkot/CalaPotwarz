using App.Domino;
using App.Models;
using System.Web.Http;

namespace App.Controllers.Api
{
    public class GameController : ApiController
    {
        private readonly ICanCreateGame _gameCreator;
        private readonly ICanDrawDominoTile _tileGenerator;

        public GameController(ICanCreateGame gameCreator, ICanDrawDominoTile tileGen)
        {
            _gameCreator = gameCreator;
            _tileGenerator = tileGen;
        }

        public GameModel Get(int categoryCount)
        {
            _tileGenerator.CategoryLimit = categoryCount;
            return _gameCreator.Create(5, 6, 7, _tileGenerator);
        }
   } 
}
