module Models {
    'use strict';

    export class Game {
        constructor(
            public PlayerPieces: Models.DominoPiece[],
            public Id: string,
            public Name: string,
            public Height: number,
            public Width: number
            ) { }
    }

    export class Board {
        public Rows: Array<number>;
        public Columns: Array<number>;
        public CellClass: string;

        constructor(private _height: number, private _width: number ) {
            //this._fields = new Models.DominoTile[_width, _height];
            this.initGrid();
        }

        initGrid() {
            this.Rows = new Array<number>();
            this.Columns = new Array<number>();

            var factor = 12 / this._width;
            this.CellClass = 'col-md-' + factor;

            for (var r = 0; r < this._height; r++) {
                this.Rows.push(r);
            }

            for (var c = 0; c < this._height; c++) {
                this.Columns.push(c);
            }
        }

        private _fields: Models.DominoTile[][];

        public getTile(x: number, y: number): Models.DominoTile{
            return this._fields[x][y];
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