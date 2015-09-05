var Services;
(function (Services) {
    var DominoPiecePlacer = (function () {
        function DominoPiecePlacer() {
        }
        DominoPiecePlacer.prototype.place = function (board, piece, firstTileX, firstTileY) {
            var firstTileOnBoard = board.getTile(firstTileX, firstTileY);
            if (firstTileOnBoard != null && firstTileOnBoard != undefined) {
                return false;
            }
            var secondTileX = piece.orientation == Models.DominoPieceOrientation.LeftRight ? firstTileX + 1 : firstTileX;
            var secondTileY = piece.orientation == Models.DominoPieceOrientation.LeftRight ? firstTileY : firstTileY + 1;
            var secondTileOnBoard = board.getTile(secondTileX, secondTileY);
            if (firstTileOnBoard != null && firstTileOnBoard != undefined) {
                return false;
            }
            return true;
        };
        return DominoPiecePlacer;
    })();
    Services.DominoPiecePlacer = DominoPiecePlacer;
})(Services || (Services = {}));
//# sourceMappingURL=PiecePlacer.js.map