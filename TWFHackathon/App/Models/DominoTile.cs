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
        public DominoTile FirstTile { get; private set; }
        public DominoTile SecondTile { get; private set; }
        public DominoOrientation Orientation { get; private set; }

        public DominoPiece(DominoTile firstTile, DominoTile secondTile)
        {
            FirstTile = firstTile;
            SecondTile = secondTile;
        }
    }

    public enum DominoOrientation
    {
        Vertical,
        Horizontal
    }
}