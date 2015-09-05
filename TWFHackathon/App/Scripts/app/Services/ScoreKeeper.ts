module Services {
    export class ScoreKeeper {
        private _piecesTakenCount: number = 0;

        public addPieceTaken(): void {
            (this._piecesTakenCount)++;
        }

        public ComputeScore(game: Models.Game, board: Models.Board): number {

            var placedPiecesCount: number = board.PlacedPieces != null ? board.PlacedPieces.length : 0;
            var playerPiecesCount: number = game.PlayerPieces != null ? game.PlayerPieces.length : 0;

            var score: number = 5;

            if (placedPiecesCount < playerPiecesCount)
                score = 5;
            else if (placedPiecesCount == playerPiecesCount)
                score = 4
            else if (placedPiecesCount > playerPiecesCount)
                score = 3;

            if (this._piecesTakenCount > (placedPiecesCount / 2)){
                score -= 1;
            }

            return score;
        }
    }
}