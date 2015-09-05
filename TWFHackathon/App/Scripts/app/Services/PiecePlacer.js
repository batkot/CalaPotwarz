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
            var secondTileX = piece.orientation == DominoPieceOrien;
            var secondTileOnBoard = board.getTile(firstTileX, firstTileY);
            if (firstTileOnBoard != null && firstTileOnBoard != undefined) {
                return false;
            }
            return true;
        };
        return DominoPiecePlacer;
    })();
    Services.DominoPiecePlacer = DominoPiecePlacer;
})(Services || (Services = {}));
