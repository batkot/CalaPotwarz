var Controllers;
(function (Controllers) {
    var GameController = (function () {
        function GameController($scope, initializer) {
            var _this = this;
            this.$scope = $scope;
            this.initializer = initializer;
            initializer.createGame(function (g) { return _this.onGameCreated(g); }, function (e) { return _this.onServerError(e); });
        }
        GameController.prototype.onGameCreated = function (game) {
            this.game = this.$scope.game = game;
        };
        GameController.prototype.onServerError = function (error) {
            this.error = error;
            $("#errorModal").modal('show');
        };
        return GameController;
    })();
    Controllers.GameController = GameController;
})(Controllers || (Controllers = {}));
