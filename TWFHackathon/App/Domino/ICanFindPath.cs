namespace App.Domino
{
    public interface ICanFindPath
    {
        SuggestedPath FindPath(int width, int height);
    }
}