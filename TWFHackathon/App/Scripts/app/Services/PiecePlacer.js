var Services;
(function (Services) {
    var DominoPiecePlacer = (function () {
        function DominoPiecePlacer() {
        }
        DominoPiecePlacer.prototype.place = function (board, piece, firstTileX, firstTileY) {
            var firstTileOnBoard = board.getTile(firstTileX, firstTileY);
            if (firstTileOnBoard != null) {
                return false;
            }
            var secondTileX = piece.orientation == Models.DominoPieceOrientation.LeftRight ? firstTileX + 1 : firstTileX;
            var secondTileY = piece.orientation == Models.DominoPieceOrientation.LeftRight ? firstTileY : firstTileY + 1;
            var secondTileOnBoard = board.getTile(secondTileX, secondTileY);
            if (secondTileOnBoard != null) {
                return false;
            }
            var firstTileNeighbours = this.getFirstTileNeighboursCoordinates(piece, firstTileX, firstTileY);
            if (!this.checkTileNeighbours(board, piece.firstTile, firstTileNeighbours)) {
                return false;
            }
            var secondTileNeighbours = this.getSecondTileNeighboursCoordinates(piece, secondTileX, secondTileY);
            if (!this.checkTileNeighbours(board, piece.secondTile, secondTileNeighbours)) {
                return false;
            }
            return true;
        };
        DominoPiecePlacer.prototype.checkTileNeighbours = function (board, tile, neighbours) {
            for (var tileXY in neighbours) {
                var tileOnBoard = board.getTile(tileXY.x, tileXY.y);
                if (tileOnBoard == null) {
                    continue;
                }
                else if (tileOnBoard.category != tile.category) {
                    return false;
                }
            }
            return true;
        };
        DominoPiecePlacer.prototype.getFirstTileNeighboursCoordinates = function (piece, x, y) {
            var firstTileNeighbours;
            if (piece.orientation == Models.DominoPieceOrientation.LeftRight) {
                firstTileNeighbours[0] = { x: x - 1, y: y };
                firstTileNeighbours[1] = { x: x, y: y - 1 };
                firstTileNeighbours[2] = { x: x, y: y + 1 };
            }
            else {
                firstTileNeighbours[0] = { x: x, y: y - 1 };
                firstTileNeighbours[1] = { x: x - 1, y: y };
                firstTileNeighbours[2] = { x: x + 1, y: y };
            }
            return firstTileNeighbours;
        };
        DominoPiecePlacer.prototype.getSecondTileNeighboursCoordinates = function (piece, x, y) {
            var secondTileNeighbours;
            if (piece.orientation == Models.DominoPieceOrientation.LeftRight) {
                secondTileNeighbours[0] = { x: x + 1, y: y };
                secondTileNeighbours[1] = { x: x, y: y - 1 };
                secondTileNeighbours[2] = { x: x, y: y + 1 };
            }
            else {
                secondTileNeighbours[0] = { x: x, y: y + 1 };
                secondTileNeighbours[1] = { x: x - 1, y: y };
                secondTileNeighbours[2] = { x: x + 1, y: y };
            }
            return secondTileNeighbours;
        };
        return DominoPiecePlacer;
    })();
    Services.DominoPiecePlacer = DominoPiecePlacer;
})(Services || (Services = {}));
//# sourceMappingURL=PiecePlacer.js.map