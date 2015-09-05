module Controllers {
    export class GameController {
        private board: Models.Board;

        constructor(
            private $scope: Scopes.IAppScope,
            private initializer: Services.Initializer) {

            $scope.game = this;
            initializer.requestBoard(this.onBoardReceived, this.onServerError);
        }

        onBoardReceived(board: Models.Board) {
            this.board = board;
            console.log(board);
        }

        onServerError(error: any) {
            console.log(error);
        }
    }
}