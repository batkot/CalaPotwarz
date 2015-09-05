module Models {
    'use strict';

    export class Game {
        constructor(
            public Id: string,
            public Name: string,
            public Height: number,
            public Width: number
            ) { }
    }

    export class Board {
        constructor(
            ) { }
    }
}