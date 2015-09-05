module Controllers {
    export class GameController {
        private game: Models.Game;

        constructor(
            private $scope: Scopes.IAppScope,
            private initializer: Services.Initializer) {

            $scope.game = this;
            initializer.createGame(this.onGameCreated, this.onServerError);
        }

        onGameCreated(game: Models.Game) {
            this.game = game;
            console.log(game);
        }

        onServerError(error: any) {
            console.log(error);
        }
    }
}