namespace App.Models
{
    public class GameModel
    {
        public string Name { get; set; }

        public DominoPiece[] Pieces { get; private set; }

        public GameModel(params DominoPiece[] pieces)
        {
            Pieces = pieces;
        }
    }
}