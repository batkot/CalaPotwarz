

module Controllers {
    export class GameController {
        public message: string;
        public error: Models.Error;

        constructor(
            private $scope: Scopes.IAppScope,
            private initializer: Services.Initializer) {

            initializer.createGame((g) => this.onGameCreated(g), (e) => this.onServerError(e));
        }

        onGameCreated(game: Models.Game): void {
            this.$scope.game = game;
        }

        onServerError(error: Models.Error): void {
            this.error = error;
            $("#errorModal").modal('show');
        }
    }
}