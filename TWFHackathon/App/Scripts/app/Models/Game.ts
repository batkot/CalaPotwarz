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
        constructor(private _height: number, private _width: number ) {
            this._cells = new BoardCell[_width][_height];
        }

        private _cells: BoardCell[][];

        public getTile(x: number, y: number): DominoTile{
            var cell = this._cells[x][y];
            if (cell.isEmpty())
                return null;
            else
                return cell.DominoTile;
        }
    }

    export class BoardCell {
        constructor() {
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