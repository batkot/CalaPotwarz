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
        function Board() {
        }
        return Board;
    })();
    Models.Board = Board;
})(Models || (Models = {}));
//# sourceMappingURL=Game.js.map