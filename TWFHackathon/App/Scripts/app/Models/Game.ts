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
            this._fields = new DominoTile[_width, _height];
        }

        private _fields: DominoTile[][];

        public getTile(x: number, y: number): DominoTile{
            return this._fields[x][y];
        }


    }

    export class DominoPiece {
        constructor(private _tiles: DominoTile[], private _orientation: DominoPieceOrientation) { };

        get firstTile(): DominoTile {
            return this._tiles[0];
        }

        get secondTile(): DominoTile {
            return this._tiles[1];
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