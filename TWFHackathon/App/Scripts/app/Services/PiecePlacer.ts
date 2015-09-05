module Services {
    export interface IDominoPiecePlacer {
        place(board: Models.Board, piece: Models.DominoPiece, firstTileX: number, firstTileY: number) : boolean
    }

    export class DominoPiecePlacer implements IDominoPiecePlacer {
        public place(board: Models.Board, piece: Models.DominoPiece, firstTileX : number, firstTileY : number): boolean {

            var firstTileOnBoard = board.getTile(firstTileX, firstTileY);
            if (firstTileOnBoard != null && firstTileOnBoard != undefined) {
                return false;
            }
            var secondTileX: number = piece.orientation == DominoPieceOrien
            var secondTileOnBoard = board.getTile(firstTileX, firstTileY);
            if (firstTileOnBoard != null && firstTileOnBoard != undefined) {
                return false;
            }

            

            return true;
        }
    }
}