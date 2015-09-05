
module Bootstrapper {
    var app = angular.module('app', [])
        .controller('shellController', Controllers.ShellController)
        .service('initializer', Services.Initializer);
}

