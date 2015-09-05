using System;
using App.Models;
using System.Collections.Generic;

namespace App.Domino
{
    public class GameBuilder : ICanCreateGame
    {
        private readonly ICategoriesProvider _categoriesProvider;
        private readonly ICanFindPath _pathFinder;

        public GameBuilder(ICategoriesProvider provider, ICanFindPath pathFinder)
        {
            _categoriesProvider = provider;
            _pathFinder = pathFinder;
        }

        public GameModel Create(int width, int height, int additionalPieceCount)
        {
            if (width < 1 || height < 1)
                throw new ArgumentException();

            var id = Guid.NewGuid().ToString();

            var startTile = new DominoTile(_categoriesProvider.DrawCategory(), "");
            var finishTile = new DominoTile(_categoriesProvider.DrawCategory(), "");

            var suggestedPath = _pathFinder.FindPath(width, height);
            var minimumPathPieces = new List<DominoPiece>();
            var lastTile = startTile;

            for (int i = 0; i < suggestedPath.MinimumRequiredPieces - 1; i++)
            {
                var secondTile = GetNextTile();
                minimumPathPieces.Add(new DominoPiece(lastTile, secondTile));
                lastTile = secondTile;
            }

            minimumPathPieces.Add(new DominoPiece(lastTile, finishTile));

            for(int i = 0; i < additionalPieceCount; i++)
                minimumPathPieces.Add(new DominoPiece(GetNextTile(), GetNextTile()));

            return new GameModel(id, width, height, startTile, finishTile, minimumPathPieces.ToArray());
        }

        private DominoTile GetNextTile()
        {
            var category = _categoriesProvider.DrawCategory();
            return new DominoTile(category, "");
        }
    }
}
