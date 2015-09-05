var Controllers;
(function (Controllers) {
    var GameController = (function () {
        function GameController($scope, initializer) {
            this.$scope = $scope;
            this.initializer = initializer;
            $scope.game = this;
            initializer.createGame(this.onGameCreated, this.onServerError);
        }
        GameController.prototype.onGameCreated = function (game) {
            this.game = game;
            console.log(game);
        };
        GameController.prototype.onServerError = function (error) {
            this.error = error;
            $("#errorModal").modal('show');
        };
        return GameController;
    })();
    Controllers.GameController = GameController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=GameController.js.map