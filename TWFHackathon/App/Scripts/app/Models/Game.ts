module Models {
    'use strict';

    export class Game {
        constructor(
            public PlayerPieces: DominoPiece[],
            public Id: string,
            public Name: string,
            public Height: number,
            public Width: number
            ) { }
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

        public Cells: Array<Array<BoardCell>>;

        public getTile(x: number, y: number): DominoTile{
            var cell = this.Cells[x][y];
            if (cell.isEmpty())
                return null;
            else
                return cell.DominoTile;
        }

        public putPiece(piece: DominoPiece, x: number, y: number) : boolean {
            var second_x = x;
            var second_y = y + 1;

            if (piece.orientation == DominoPieceOrientation.LeftRight) {
                second_x = x + 1;
                second_y = y;
            }

            if (this.canPutOnCell(x, y) && this.canPutOnCell(second_x, second_y)) {
                this.Cells[x][y].DominoTile = piece.firstTile;
                this.Cells[second_x][second_y].DominoTile = piece.secondTile;
            }
            else
                return false;
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

    export class DominoPiece {
        constructor(private _firstTile: DominoTile, private _secondTile: DominoTile, private _orientation: DominoPieceOrientation, private _id : string) { };

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