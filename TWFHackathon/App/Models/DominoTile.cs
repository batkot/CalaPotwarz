using System;

namespace App.Models
{
    public class DominoTile
    {
        public string ImageUrl { get; set; }
        //Somekind of image data
        public string Category { get; set; }

        public DominoTile(string category, string imageUrl)
        {
            Category = category;
            ImageUrl = imageUrl;
        }
    }

    public class DominoPiece
    {
        public string Id { get; private set; }
        public DominoTile FirstTile { get; private set; }
        public DominoTile SecondTile { get; private set; }
        public DominoOrientation Orientation { get; private set; }

        public DominoPiece(DominoTile firstTile, DominoTile secondTile)
        {
            Id = Guid.NewGuid().ToString();
            FirstTile = firstTile;
            SecondTile = secondTile;
        }
    }

    public enum DominoOrientation
    {
        UppDown = 0,
        LeftRight
    }
}