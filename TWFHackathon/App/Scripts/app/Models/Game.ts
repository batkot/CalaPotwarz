module Models {
    'use strict';

    export class Game {
        constructor(
            public SelectedPiece: DominoPiece,
            public PlayerPieces: DominoPiece[],
            public Id: string,
            public Name: string,
            public Height: number,
            public Width: number
            ) { }

        getPiece(pieceId: string): DominoPiece {
            for (var piece in this.PlayerPieces) {
                if (piece.Id == pieceId)
                    return piece;
            }
        }

        removePiece(pieceId: string): void {
            for (var i = 0; i < this.PlayerPieces.length; i++) {
                if (this.PlayerPieces[i].Id == pieceId) {
                    this.PlayerPieces.splice(i, 1);
                    return;
                }
            }
        }
    }

    export class Board {
        constructor(private _height: number, private _width: number) {
            this.Cells = new Array<Array<BoardCell>>();
            for (var i = 0; i < _width; i++) {
                var column = new Array<BoardCell>();
                this.Cells.push(column);
                for (var j = 0; j < _height; j++) {
                    column.push(new BoardCell(i, j));
                }
            }
        }

        public PlacedPieces: PieceCoordinates[];

        public Cells: Array<Array<BoardCell>>;

        public getTile(x: number, y: number): DominoTile{
            var cell = this.Cells[x][y];
            if (cell.isEmpty())
                return null;
            else
                return cell.DominoTile;
        }

        public putPiece(piece: DominoPiece, x: number, y: number, placer: Services.DominoPiecePlacer): boolean {
            var second_x = x;
            var second_y = y + 1;

            if (piece.orientation == DominoPieceOrientation.LeftRight) {
                second_x = x + 1;
                second_y = y;
            }

            if (this.canPutOnCell(x, y) && this.canPutOnCell(second_x, second_y) && placer.canPlace(this, piece, x,y)) {
                this.Cells[x][y].DominoTile = piece.firstTile;
                this.Cells[second_x][second_y].DominoTile = piece.secondTile;
                this.PlacedPieces.push(new PieceCoordinates(piece, x, y, second_x, second_y));
            }
            else
                return false;
        }

        public takePiece(x: number, y: number): DominoPiece {
            var pieceIndex: number = -1;

            for (var i = 0; i < this.PlacedPieces.length; ++i){
                var firstTileXY: any = this.PlacedPieces[i].FirstTileCoordinates;
                var secondTileXY: any = this.PlacedPieces[i].SecondTileCoordinates;

                var isMatch: boolean = (firstTileXY.x == x && firstTileXY.y == y)
                    || (secondTileXY.x == x && secondTileXY.y == y);

                if (isMatch) {
                    pieceIndex = i;
                    break;
                }
            }

            if (pieceIndex > 0) {
                var piece: DominoPiece = this.PlacedPieces[pieceIndex].Piece;
                this.PlacedPieces.splice(pieceIndex, 1);
                return piece;
            }

            return null;
        }

        private isOnBoard(x: number, y: number): boolean {
            return x < this._width && y < this._height;
        }

        private canPutOnCell(x: number, y: number) {
            return this.isOnBoard(x, y) && this.Cells[x][y].isEmpty();
        }
    }

    export class BoardCell {
        constructor(public x : number, public y : number) {
            this.DominoTile = null;
        }
        public DominoTile: DominoTile;

        public isEmpty() : boolean{
            return this.DominoTile == null;
        }
    }

    class PieceCoordinates {
        constructor(private _piece: DominoPiece,
            private _x1: number, private _y1: number,
            private _x2: number, private _y2: number) { }

        get Piece(): DominoPiece {
            return this._piece;
        }

        get FirstTileCoordinates(): any {
            return { x: this._x1, y: this._y1 };
        }

        get SecondTileCoordinates(): any {
            return { x: this._x2, y: this._y2 };
        }
    }

    export class DominoPiece {
        public IsHighlighted: boolean = false;

        constructor(private _firstTile: DominoTile, private _secondTile: DominoTile, private _orientation: DominoPieceOrientation, private _id: string) { };

        get firstTile(): DominoTile {
            return this._firstTile;
        }

        get secondTile(): DominoTile {
            return this._secondTile;
        }

        get orientation(): DominoPieceOrientation {
            return this._orientation;
        }

        get Id(): string {
            return this._id;
        }
    }

    export class DominoTile {
        constructor(private _category: string, private _imageUrl: string) {
        }

        get category(): string {
            return this._category;
        }

        get imageUrl(): string {
            return this._imageUrl;
        }
    }

    export enum DominoPieceOrientation {
        UpDown,
        LeftRight,
    }

}