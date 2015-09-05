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
            var secondTileX: number = piece.orientation == Models.DominoPieceOrientation.LeftRight ? firstTileX + 1 : firstTileX;
            var secondTileY: number = piece.orientation == Models.DominoPieceOrientation.LeftRight ? firstTileY : firstTileY + 1;
            var secondTileOnBoard = board.getTile(secondTileX, secondTileY);
            if (firstTileOnBoard != null && firstTileOnBoard != undefined) {
                return false;
            }

            

            return true;
        }
    }
}