module Services {
    export class ScoreKeeper {
        private _piecesTakenCount: number = 0;

        public addPieceTaken(): void {
            (this._piecesTakenCount)++;
        }
    }
}