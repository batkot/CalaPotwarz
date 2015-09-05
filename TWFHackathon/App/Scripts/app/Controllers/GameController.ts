

module Controllers {
    export class GameController {
        public message: string;
        public error: Models.Error;
        public game: Models.Game;
        public board: Models.Board;

        constructor(
            private $scope: Scopes.IAppScope,
            private initializer: Services.Initializer) {

            initializer.createGame((g) => this.onGameCreated(g), (e) => this.onServerError(e));
        }

        onGameCreated(game: Models.Game): void {
            console.log("GAME");

            this.game = this.$scope.game = game;
            this.board = new Models.Board(game.Width, game.Height);
            this.game.SelectedPiece = this.game.PlayerPieces[0];

            console.log(this.game);
        }

        onServerError(error: Models.Error): void {
            this.error = error;
            $("#errorModal").modal('show');
        }

        onPieceSelected(id: string) {
            console.log(id);
        }
    }
}