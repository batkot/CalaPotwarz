var Bootstrapper;
(function (Bootstrapper) {
    var app = angular.module('app', [])
        .controller('gameController', Controllers.GameController)
        .service('initializer', Services.Initializer);
})(Bootstrapper || (Bootstrapper = {}));
//# sourceMappingURL=bootstrapper.js.map