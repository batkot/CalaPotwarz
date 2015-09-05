

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

            //dafaq
            this.game = this.$scope.game = game;
            var startingPiece = new Models.DominoTile(game.StartingTile.Category, game.StartingTile.ImageUrl);
            var finishingPiece = new Models.DominoTile(game.FinishingTile.Category, game.FinishingTile.ImageUrl);
            this.board = new Models.Board(game.Width, game.Height, startingPiece, finishingPiece);

            var playerPieces: Models.DominoPiece[] = new Array<Models.DominoPiece>();
            for (var i: number = 0; i < game.PlayerPieces.length; ++i) {
                var piece: any = game.PlayerPieces[i];
                var firstTile: Models.DominoTile = new Models.DominoTile(piece.FirstTile.Category, piece.FirstTile.ImageUrl);
                var secondTile: Models.DominoTile = new Models.DominoTile(piece.SecondTile.Category, piece.SecondTile.ImageUrl);
                var newPiece: Models.DominoPiece = new Models.DominoPiece(
                    firstTile, secondTile, Models.DominoPieceOrientation.UpDown, piece.Id);

                playerPieces.push(newPiece);
            }

            this.game = this.$scope.game = new Models.Game(null, playerPieces, game.Id, game.Name, game.Height, game.Width, startingPiece, finishingPiece);
            
            console.log(this.game);
        }

        onServerError(error: Models.Error): void {
            this.error = error;
            $("#errorModal").modal('show');
        }

        tryPutSelectedPiece(cell: Models.BoardCell): void {
            console.log(cell);

            if (this.game.SelectedPiece != null) {
                this.putPiece(this.game.SelectedPiece, cell.x, cell.y);
           } 
        }

        onPieceSelected(piece: Models.DominoPiece) {
            this.game.SelectedPiece = piece;
        }

        onSelectedPieceRotatedRight() {
            this.game.SelectedPiece = this.pieceRotator.rotateLeft(this.game.SelectedPiece);
            console.log(this.game.SelectedPiece);
        }

        onSelectedPieceRotatedLeft() {
            this.game.SelectedPiece = this.pieceRotator.rotateRight(this.game.SelectedPiece);
            console.log(this.game.SelectedPiece);
        }

        putPiece(piece: Models.DominoPiece, x: number, y: number): void {
            if (this.board.putPiece(piece, x, y, this.piecePlacer)) {
                this.game.removePiece(piece);
                this.game.SelectedPiece = null;
                this.board.IsSolved = this.board.isSolved();
                if (this.board.IsSolved)
                    console.log("solved");
            }
        }
    }
}