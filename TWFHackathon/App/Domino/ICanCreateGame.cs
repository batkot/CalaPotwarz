using App.Models;

namespace App.Domino
{
    public interface ICanCreateGame
    {
        GameModel Create(int width, int height, int additionalPiecesCount);
    }
}
