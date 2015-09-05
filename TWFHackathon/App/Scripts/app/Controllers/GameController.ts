

module Controllers {
    export class GameController {
        public message: string;
        public error: Models.Error;
        public game: Models.Game;
        public board: Models.Board;

        constructor(
            private $scope: Scopes.IAppScope,
            private initializer: Services.Initializer,
            private piecePlacer: Services.DominoPiecePlacer,
            private pieceRotator: Services.DominoPieceRotator) {

            initializer.createGame((g) => this.onGameCreated(g), (e) => this.onServerError(e));
        }

        onGameCreated(game: Models.Game): void {
            console.log("GAME");

            this.game = this.$scope.game = game;
            this.board = new Models.Board(game.Width, game.Height);

            console.log(this.game);
        }

        onServerError(error: Models.Error): void {
            this.error = error;
            $("#errorModal").modal('show');
        }

        onPieceSelected(piece: Models.DominoPiece) {
            console.log(piece);
            this.game.SelectedPiece = piece;
            piece.IsHighlighted = true;
        }

        onPieceRotatedLeft(piece: Models.DominoPiece) {
            console.log("lewo");
            piece = this.pieceRotator.rotateLeft(piece);
        }

        onPieceRotatedRight(piece: Models.DominoPiece) {
            piece = this.pieceRotator.rotateRight(piece);
        }

        putPiece(pieceId: string, x: number, y: number): void {
            var piece = this.game.getPiece(pieceId);
            if (this.board.putPiece(piece, x, y, this.piecePlacer)) {
                this.game.removePiece(pieceId);
            }
        }
    }
}