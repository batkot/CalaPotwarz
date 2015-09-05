var Controllers;
(function (Controllers) {
    var GameController = (function () {
        function GameController($scope, initializer) {
            this.$scope = $scope;
            this.initializer = initializer;
            $scope.game = this;
            initializer.requestBoard(this.onBoardReceived, this.onServerError);
        }
        GameController.prototype.onBoardReceived = function (board) {
            this.board = board;
            console.log(board);
        };
        GameController.prototype.onServerError = function (error) {
            console.log(error);
        };
        return GameController;
    })();
    Controllers.GameController = GameController;
})(Controllers || (Controllers = {}));
