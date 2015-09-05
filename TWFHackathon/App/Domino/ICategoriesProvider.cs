using App.Models;

namespace App.Domino
{
    public interface ICanDrawDominoTile
    {
        DominoTile DrawTile();
        DominoTile DrawTileFromCategory(string categoryName);
    }
}