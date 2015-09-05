namespace App.Domino
{
    public class BasicPathFinder : ICanFindPath
    {
        public SuggestedPath FindPath(int width, int height)
        {
            return new SuggestedPath { MinimumRequiredPieces = 5 };
        }
    }
}
