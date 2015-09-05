module Services {
    export interface IDominoPiecePlacer {
        canPlace(board: Models.Board, piece: Models.DominoPiece, firstTileX: number, firstTileY: number) : boolean
    }

    export class DominoPiecePlacer implements IDominoPiecePlacer {
        public canPlace(board: Models.Board, piece: Models.DominoPiece, firstTileX : number, firstTileY : number): boolean {
            
            var firstTileNeighbours: any[] = this.getFirstTileNeighboursCoordinates(piece, firstTileX, firstTileY);
            
            if (!this.checkTileNeighbours(board, piece.FirstTile, firstTileNeighbours)) {
                return false;
            }

            var secondTileX: number = piece.Orientation == Models.DominoPieceOrientation.LeftRight ? firstTileX + 1 : firstTileX;
            var secondTileY: number = piece.Orientation == Models.DominoPieceOrientation.LeftRight ? firstTileY : firstTileY + 1;
            
            var secondTileNeighbours: any[] = this.getSecondTileNeighboursCoordinates(piece, secondTileX, secondTileY);
            if (!this.checkTileNeighbours(board, piece.SecondTile, secondTileNeighbours)) {
                return false;
            }
            
            return true;
        }

        private checkTileNeighbours(board : Models.Board, tile : Models.DominoTile, neighbours : any[]) : boolean{
        
            for (var tileXY in neighbours) {
                var tileOnBoard = board.getTile(tileXY.x, tileXY.y);
                if (tileOnBoard == null) {
                    continue;
                }
                else if (tileOnBoard.Category != tile.Category) {
                    return false;
                }
            }

            return true;
        } 

        private getFirstTileNeighboursCoordinates(piece: Models.DominoPiece, x: number, y: number): any[] {
            var firstTileNeighbours: any[];

            if (piece.Orientation == Models.DominoPieceOrientation.LeftRight) {
                firstTileNeighbours[0] = { x: x - 1, y: y };
                firstTileNeighbours[1] = { x: x, y: y - 1 };
                firstTileNeighbours[2] = { x: x, y: y + 1 };
            }
            else {
                firstTileNeighbours[0] = { x: x, y: y -1 };
                firstTileNeighbours[1] = { x: x - 1, y: y };
                firstTileNeighbours[2] = { x: x + 1, y: y };
            }

            return firstTileNeighbours;
        }

        private getSecondTileNeighboursCoordinates(piece: Models.DominoPiece, x: number, y: number): any[] {
            var secondTileNeighbours: any[];

            if (piece.Orientation == Models.DominoPieceOrientation.LeftRight) {
                secondTileNeighbours[0] = { x: x + 1, y: y };
                secondTileNeighbours[1] = { x: x, y: y - 1 };
                secondTileNeighbours[2] = { x: x, y: y + 1 };
            }
            else {
                secondTileNeighbours[0] = { x: x, y: y + 1 };
                secondTileNeighbours[1] = { x: x - 1, y: y };
                secondTileNeighbours[2] = { x: x + 1, y: y }
            }

            return secondTileNeighbours;
        }
    }
}