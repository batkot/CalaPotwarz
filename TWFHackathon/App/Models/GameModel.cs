namespace App.Models
{
    public class GameModel
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public DominoPiece[] PlayerPieces { get; private set; }
        public int Height { get; private set; }
        public int Width { get; private set; }
        public DominoTile StartingTile { get; private set; }
        public DominoTile FinishingTile { get; private set; }

        public GameModel(string id, int width, int height, DominoTile start, DominoTile finish, params DominoPiece[] playerPieces)
        {
            Id = id;
            Width = width;
            Height = height;
            PlayerPieces = playerPieces;
            StartingTile = start;
            FinishingTile = finish;
        }
    }
}