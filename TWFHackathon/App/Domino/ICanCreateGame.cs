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
            return new GameModel(
                new DominoPiece(new DominoTile("Dog"), new DominoTile("Piece")),
                new DominoPiece(new DominoTile("Piece"), new DominoTile("Tile")));
        }
    }
}
