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
        constructor(
            ) { }
    }

    export class DominoTile {
        public ImageUrl: string;
        public Category: string;

        constructor() { }
    }

    export enum DominoOrientation {
        Regular,
        Right,
        UpsideDown,
        Left
    }
}