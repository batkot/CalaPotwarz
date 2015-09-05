

module Controllers {
    export class GameController {
        public message: string;
        public error: Models.Error;
        public game: Models.Game;
        public board: Models.Board;

        constructor(
            private $scope: Scopes.IAppScope,
            private initializer: Services.Initializer,
            private piecePlacer: Services.DominoPiecePlacer) {

            initializer.createGame((g) => this.onGameCreated(g), (e) => this.onServerError(e));
        }

        onGameCreated(game: Models.Game): void {
            console.log("GAME");

            this.game = this.$scope.game = game;
            this.board = new Models.Board(game.Width, game.Height);
        }

        onServerError(error: Models.Error): void {
            this.error = error;
            $("#errorModal").modal('show');
        }

        tryPutSelectedPiece(cell: Models.BoardCell): void {
            if (this.game.SelectedPiece != null) {
                this.putPiece(this.game.SelectedPiece, cell.x, cell.y);
           } 
        }

        onPieceSelected(piece: Models.DominoPiece) {
            this.game.SelectedPiece = piece;
            piece.IsHighlighted = true;
        }

        putPiece(piece: Models.DominoPiece, x: number, y: number): void {
            if (this.board.putPiece(piece, x, y, this.piecePlacer)) {
                this.game.SelectedPiece = null;
                this.board.IsSolved = this.board.isSolved();
                if (this.board.IsSolved)
                    console.log("solved");
            }
        }
    }
}