module Models {
    export class DominoPiece {
        constructor(private _tiles: DominoTile[], private _orientation: DominoPieceOrientation) { };

        get firstTile() : DominoTile {
            return this._tiles[0];
        }

        get secondTile() : DominoTile {
            return this._tiles[1];
        }

        get orientation() : DominoPieceOrientation {
            return this._orientation;
        }
    }

    export class DominoTile {
        constructor(private _category: string, private _imageUrl: string) {
        }

        get category() : string {
            return this._category;
        }

        get imageUrl() : string {
            return this._imageUrl;
        }
    }

    export enum DominoPieceOrientation {
        UpDown,
        LeftRight,
    }
}