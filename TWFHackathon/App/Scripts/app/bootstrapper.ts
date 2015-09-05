
module Bootstrapper {
    var app = angular.module('app', [])
        .controller('gameController', Controllers.GameController)
        .service('initializer', Services.Initializer)
        .service('piecePlacer', Services.DominoPiecePlacer)
        .service('pieceRotator', Services.DominoPieceRotator)
        .service('scoreKeeper', Services.ScoreKeeper);
}

