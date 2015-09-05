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
        constructor(private _firstTile: DominoTile, private _secondTile: DominoTile, private _orientation: DominoPieceOrientation) { };

        get firstTile(): DominoTile {
            return this._firstTile;
        }

        get secondTile(): DominoTile {
            return this._secondTile;
        }

        get orientation(): DominoPieceOrientation {
            return this._orientation;
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