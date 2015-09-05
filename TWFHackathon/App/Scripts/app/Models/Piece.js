var Models;
(function (Models) {
    var DominoPiece = (function () {
        function DominoPiece(_tiles, _orientation) {
            this._tiles = _tiles;
            this._orientation = _orientation;
        }
        ;
        Object.defineProperty(DominoPiece.prototype, "firstTile", {
            get: function () {
                return this._tiles[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DominoPiece.prototype, "secondTile", {
            get: function () {
                return this._tiles[1];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DominoPiece.prototype, "orientation", {
            get: function () {
                return this._orientation;
            },
            enumerable: true,
            configurable: true
        });
        return DominoPiece;
    })();
    Models.DominoPiece = DominoPiece;
    var DominoTile = (function () {
        function DominoTile(_category, _imageUrl) {
            this._category = _category;
            this._imageUrl = _imageUrl;
        }
        Object.defineProperty(DominoTile.prototype, "category", {
            get: function () {
                return this._category;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DominoTile.prototype, "imageUrl", {
            get: function () {
                return this._imageUrl;
            },
            enumerable: true,
            configurable: true
        });
        return DominoTile;
    })();
    Models.DominoTile = DominoTile;
    (function (DominoPieceOrientation) {
        DominoPieceOrientation[DominoPieceOrientation["UpDown"] = 0] = "UpDown";
        DominoPieceOrientation[DominoPieceOrientation["LeftRight"] = 1] = "LeftRight";
    })(Models.DominoPieceOrientation || (Models.DominoPieceOrientation = {}));
    var DominoPieceOrientation = Models.DominoPieceOrientation;
})(Models || (Models = {}));
