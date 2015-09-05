using System;
using App.Models;

namespace App.Domino
{
    public interface ICanCreateGame
    {
        GameModel Create();
    }

    public class DefaultGameCreator : ICanCreateGame
    {
        public GameModel Create()
        {
            return new GameModel(Guid.NewGuid().ToString(),
                4,
                4,
                new DominoTile("Animal"),
                new DominoTile("Zavoir"),
                new DominoPiece(new DominoTile("Zavoir"), new DominoTile("Animal")),
                new DominoPiece(new DominoTile("Animal"), new DominoTile("Letter")),
                new DominoPiece(new DominoTile("Zavoir"), new DominoTile("Letter")),
                new DominoPiece(new DominoTile("People"), new DominoTile("Shoe")));
        }
    }
}
