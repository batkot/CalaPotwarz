var Models;
(function (Models) {
    'use strict';
    var Game = (function () {
        function Game(Id, Name, Height, Width) {
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
            this._fields = new Models.DominoTile[_width, _height];
        }
        Board.prototype.getTile = function (x, y) {
            return this._fields[x][y];
        };
        return Board;
    })();
    Models.Board = Board;
})(Models || (Models = {}));
