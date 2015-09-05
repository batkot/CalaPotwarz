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
    var DominoPiece = (function () {
        function DominoPiece() {
        }
        return DominoPiece;
    })();
    Models.DominoPiece = DominoPiece;
    var DominoTile = (function () {
        function DominoTile() {
        }
        return DominoTile;
    })();
    Models.DominoTile = DominoTile;
    (function (DominoOrientation) {
        DominoOrientation[DominoOrientation["Regular"] = 0] = "Regular";
        DominoOrientation[DominoOrientation["Right"] = 1] = "Right";
        DominoOrientation[DominoOrientation["UpsideDown"] = 2] = "UpsideDown";
        DominoOrientation[DominoOrientation["Left"] = 3] = "Left";
    })(Models.DominoOrientation || (Models.DominoOrientation = {}));
    var DominoOrientation = Models.DominoOrientation;
})(Models || (Models = {}));
//# sourceMappingURL=Game.js.map