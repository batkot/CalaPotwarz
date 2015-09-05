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
        public DominoTile UpperTile { get; private set; }
        public DominoTile LowerTile { get; private set; }
        public DominoOrientation Orientation { get; private set; }

        public DominoPiece(DominoTile upper, DominoTile lower)
        {
            UpperTile = upper;
            LowerTile = lower;
        }
    }

    public enum DominoOrientation
    {
        Regular,
        Right,
        UpsideDown,
        Left
    }
}