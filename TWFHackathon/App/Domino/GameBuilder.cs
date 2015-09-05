﻿using System;
using App.Models;
using System.Collections.Generic;

namespace App.Domino
{
    public class GameBuilder : ICanCreateGame
    {
        private readonly ICanDrawDominoTile _tileProvider;
        private readonly ICanFindPath _pathFinder;

        public GameBuilder(ICanDrawDominoTile provider, ICanFindPath pathFinder)
        {
            _tileProvider = provider;
            _pathFinder = pathFinder;
        }

        public GameModel Create(int width, int height, int additionalPieceCount)
        {
            if (width < 1 || height < 1)
                throw new ArgumentException();

            var id = Guid.NewGuid().ToString();

            var startTile = _tileProvider.DrawTile();
            var finishTile = _tileProvider.DrawTile();

            var suggestedPath = _pathFinder.FindPath(width, height);
            var minimumPathPieces = new List<DominoPiece>();
            var lastTile = startTile;

            for (int i = 0; i < suggestedPath.MinimumRequiredPieces - 1; i++)
            {
                var secondTile = _tileProvider.DrawTile();
                minimumPathPieces.Add(new DominoPiece(lastTile, secondTile));
                lastTile = secondTile;
            }

            minimumPathPieces.Add(new DominoPiece(lastTile, finishTile));

            for(int i = 0; i < additionalPieceCount; i++)
                minimumPathPieces.Add(new DominoPiece(_tileProvider.DrawTile(), _tileProvider.DrawTile()));

            return new GameModel(id, width, height, startTile, finishTile, minimumPathPieces.ToArray());
        }
    }
}
