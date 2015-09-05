var Models;
(function (Models) {
    'use strict';
    var Game = (function () {
        function Game(PlayerPieces, Id, Name, Height, Width) {
            this.PlayerPieces = PlayerPieces;
            this.Id = Id;
            this.Name = Name;
            this.Height = Height;
            this.Width = Width;
        }
        return Game;
    })();
    Models.Game = Game;
    var Board = (function () {
        function Board(_height, _width) {
            this._height = _height;
            this._width = _width;
            this._fields = new DominoTile[_width, _height];
        }
        Board.prototype.getTile = function (x, y) {
            return this._fields[x][y];
        };
        return Board;
    })();
    Models.Board = Board;
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
//# sourceMappingURL=Game.js.map