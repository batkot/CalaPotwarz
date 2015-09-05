var Bootstrapper;
(function (Bootstrapper) {
    var app = angular.module('app', [])
        .controller('shellController', Controllers.ShellController)
        .service('initializer', Services.Initializer);
})(Bootstrapper || (Bootstrapper = {}));
//# sourceMappingURL=bootstrapper.js.map