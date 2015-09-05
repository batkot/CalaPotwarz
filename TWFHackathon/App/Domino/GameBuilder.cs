using System;
using App.Models;
using System.Collections.Generic;

namespace App.Domino
{
    public class GameBuilder : ICanCreateGame
    {
        private readonly ICanFindPath _pathFinder;

        public GameBuilder(ICanFindPath pathFinder)
        {
            _pathFinder = pathFinder;
        }

        public GameModel Create(int width, int height, int additionalPieceCount, ICanDrawDominoTile tileProvider)
        {
            if (width < 1 || height < 1)
                throw new ArgumentException();

            var id = Guid.NewGuid().ToString();

            var startTile = tileProvider.DrawTile();
            var finishTile = tileProvider.DrawTile();

            var suggestedPath = _pathFinder.FindPath(width, height);
            var minimumPathPieces = new List<DominoPiece>();
            var lastTile = startTile;

            for (int i = 0; i < suggestedPath.MinimumRequiredPieces - 1; i++)
            {
                lastTile = tileProvider.DrawTileFromCategory(lastTile.Category);
                var secondTile = tileProvider.DrawTile();
                minimumPathPieces.Add(new DominoPiece(lastTile, secondTile));
                lastTile = secondTile;
            }

            minimumPathPieces.Add(new DominoPiece(lastTile, finishTile));

            for(int i = 0; i < additionalPieceCount; i++)
                minimumPathPieces.Add(new DominoPiece(tileProvider.DrawTile(), tileProvider.DrawTile()));

            Shuffle(minimumPathPieces);
            return new GameModel(id, width, height, startTile, finishTile, minimumPathPieces.ToArray());
        }

        public static void Shuffle<T>(IList<T> list)
        {
            int n = list.Count;
            Random rnd = new Random();
            while (n > 1)
            {
                int k = (rnd.Next(0, n) % n);
                n--;
                T value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }
    }
}
