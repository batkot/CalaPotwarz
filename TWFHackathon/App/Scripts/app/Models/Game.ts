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

    export class DominoPiece {
        public UpperTile: DominoTile;
        public LowerTile: DominoTile;
        public Orientation: DominoOrientation;
        constructor(private _height: number, private _width: number ) {
            this._fields = new DominoTile[_width, _height];
        }

        private _fields: DominoTile[][];

        public getTile(x: number, y: number): DominoTile{
            return this._fields[x][y];
        }


    }

}