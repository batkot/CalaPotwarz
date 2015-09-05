using App.Domino;
using App.Models;
using FakeItEasy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace App.Domino.Model
{
    public class GameBuilderTests
    {
        private ICanDrawDominoTile _categoriesProvider;
        private ICanFindPath _pathFinder;

        public GameBuilderTests()
        {
            _categoriesProvider = A.Fake<ICanDrawDominoTile>();
            _pathFinder = A.Fake<ICanFindPath>();
        }

        [Theory]
        [InlineData(3,3)]
        [InlineData(3,5)]
        public void Create_BuildsGameOfAGivenSize(int width, int height)
        {
            A.CallTo(() => _pathFinder.FindPath(width, height)).Returns(new SuggestedPath { MinimumRequiredPieces = 3 });
            A.CallTo(() => _categoriesProvider.DrawTile()).Returns(new DominoTile("FAKE", "FAKE"));

            var builder = new GameBuilder(_categoriesProvider, _pathFinder);

            var game = builder.Create(width, height, 0);

            Assert.Equal(width, game.Width);
            Assert.Equal(height, game.Height);
        }

        [Fact]
        public void CreateWithNoNoise_AddsOnlyRequiredDominoPieces()
        {
            var beginCategory = "Begin";
            var endCategory = "End";
            var middleCategory = "Middle";

            A.CallTo(() => _pathFinder.FindPath(1, 1)).WithAnyArguments().Returns(new SuggestedPath { MinimumRequiredPieces = 2 });
            A.CallTo(() => _categoriesProvider.DrawTile()).ReturnsNextFromSequence(new DominoTile(beginCategory, ""), new DominoTile(endCategory, ""), new DominoTile(middleCategory,""));

            var builder = new GameBuilder(_categoriesProvider, _pathFinder);

            var game = builder.Create(10, 10, 0);

            Assert.Equal(2, game.PlayerPieces.Length);

            var firstPiece = game.PlayerPieces[0];
            Assert.Equal(beginCategory, firstPiece.FirstTile.Category);
            Assert.Equal(middleCategory, firstPiece.SecondTile.Category);

            var secondPiece = game.PlayerPieces[1];
            Assert.Equal(middleCategory, secondPiece.FirstTile.Category);
            Assert.Equal(endCategory, secondPiece.SecondTile.Category);
        }

        [Fact]
        public void CreateWithNoise_AdditionalPiecesAdded()
        {
            var minimumPathSize = 2;
            var noiseCount = 5;
            A.CallTo(() => _pathFinder.FindPath(1, 1)).WithAnyArguments().Returns(new SuggestedPath { MinimumRequiredPieces = minimumPathSize });
            A.CallTo(() => _categoriesProvider.DrawTile()).Returns(new DominoTile("", ""));

            var builder = new GameBuilder(_categoriesProvider, _pathFinder);

            var game = builder.Create(10, 10, noiseCount);

            Assert.Equal(minimumPathSize + noiseCount, game.PlayerPieces.Length);
        }
    }
}
