using App.Models;
using System;

namespace App.Domino
{
    public class MockGameCreator : ICanCreateGame
    {
        public GameModel Create()
        {
            return new GameModel(Guid.NewGuid().ToString(),
                4,
                4,
                new DominoTile("Animal", ""),
                new DominoTile("Zavoir", ""),
                new DominoPiece(new DominoTile("Zavoir", "gfx/menuBck.png"), new DominoTile("Animal", "")),
                new DominoPiece(new DominoTile("Animal", ""), new DominoTile("Letter", "")),
                new DominoPiece(new DominoTile("Zavoir", ""), new DominoTile("Letter", "")),
                new DominoPiece(new DominoTile("People", ""), new DominoTile("Shoe", "")));
        }
    }
}