namespace App.Models
{
    public class DominoTile
    {
        //Somekind of image data
        public string Category { get; set; }

        public DominoTile(string category)
        {
            Category = category;
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