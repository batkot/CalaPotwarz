using App.Models;

namespace App.Domino
{
    public interface ICanDrawDominoTile
    {
        int CategoryLimit { get; set; }
        DominoTile DrawTile();
        DominoTile DrawTileFromCategory(string categoryName);
    }
}