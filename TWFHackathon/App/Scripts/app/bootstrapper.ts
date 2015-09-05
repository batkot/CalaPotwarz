
module Bootstrapper {
    var app = angular.module('app', [])
        .controller('gameController', Controllers.GameController)
        .service('initializer', Services.Initializer);
}

