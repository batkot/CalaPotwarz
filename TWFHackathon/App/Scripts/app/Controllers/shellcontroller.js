var Controllers;
(function (Controllers) {
    var ShellController = (function () {
        function ShellController($scope, initializer) {
            this.$scope = $scope;
            this.initializer = initializer;
            $scope.shell = this;
            this.message = initializer.hello();
        }
        return ShellController;
    })();
    Controllers.ShellController = ShellController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=ShellController.js.map