module Models {
    'use strict';

    export class Game {
        constructor(
            public SelectedPiece: DominoPiece,
            public PlayerPieces: DominoPiece[],
            public Id: string,
            public Name: string,
            public Height: number,
            public Width: number,
            public StartingTile: DominoTile,
            public FinishingTile: DominoTile
            ) { }

        public getPiece(pieceId: string): DominoPiece {
            for (var piece in this.PlayerPieces) {
                if (piece.Id == pieceId)
                    return piece;
            }
        }

        public removePiece(piece: DominoPiece): void {
            for (var i = 0; i < this.PlayerPieces.length; i++) {
                if (this.PlayerPieces[i].Id == piece.Id) {
                    this.PlayerPieces.splice(i, 1);
                    return;
                }
            }
        }
    }

    export class Board {
        constructor(private _height: number, private _width: number, public StartTile: DominoTile, public FinishTile: DominoTile) {
            this.Cells = new Array<Array<BoardCell>>();
            for (var i = 0; i < _width; i++) {
                var column = new Array<BoardCell>();
                this.Cells.push(column);
                for (var j = 0; j < _height; j++) {
                    column.push(new BoardCell(i, j));
                }
            }

            this.start_x = 0;
            this.start_y = 0;
            this.finish_x = _width - 1;
            this.finish_y = _height - 1;
            this.PlacedPieces = new Array<PieceCoordinates>();
        }

        public PlacedPieces: Array<PieceCoordinates>;
        private start_x: number;
        private start_y: number;
        private finish_x: number;
        private finish_y: number;

        public Cells: Array<Array<BoardCell>>;
        public IsSolved: boolean;

        public getTile(x: number, y: number): DominoTile{
            var cell = this.Cells[x][y];
            if (cell == null || cell == undefined || cell.isEmpty())
                return null;
            else
                return cell.DominoTile;
        }

        public isSolved(): boolean {
            return this.checkPathFrom(this.start_x, this.start_y, this.finish_x, this.finish_y);
        }

        public checkPathFrom(x: number, y: number, target_x : number, target_y : number): boolean {
            if (this.isPartOfPath(x, y)) {
                if (x == target_x && y == target_y) {
                    return true;
                } else {
                    return this.checkPathFrom(x + 1, y, target_x, target_y) || this.checkPathFrom(x, y + 1, target_x, target_y);
                }
            }
            return false;
        }

        public isPartOfPath(x: number, y: number) {
            return this.isOnBoard(x, y) && !(this.Cells[x][y].isEmpty());
        }

        public putPiece(piece: DominoPiece, x: number, y: number, placer: Services.DominoPiecePlacer): boolean {
            var second_x = x;
            var second_y = y + 1;

            if (piece.Orientation == DominoPieceOrientation.LeftRight) {
                second_x = x + 1;
                second_y = y;
            }

            if (this.canPutOnCell(x, y) && this.canPutOnCell(second_x, second_y)) {
                this.Cells[x][y].DominoTile = piece.FirstTile;
                console.log(piece);
                console.log(this.Cells[x][y].DominoTile);
                this.Cells[second_x][second_y].DominoTile = piece.SecondTile;
                this.PlacedPieces.push(new PieceCoordinates(piece, x, y, second_x, second_y));
                return true;
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

            if (pieceIndex > 0){ 
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
        public Bringing: boolean;

        constructor(private _firstTile: DominoTile, private _secondTile: DominoTile, private _orientation: DominoPieceOrientation, private _id: string) { };

        get FirstTile(): DominoTile {
            return this._firstTile;
        }

        get SecondTile(): DominoTile {
            return this._secondTile;
        }

        get Orientation(): DominoPieceOrientation {
            return this._orientation;
        }

        get Id(): string {
            return this._id;
        }

        bring(): void {
            this.Bringing = true;
            setTimeout(() =>
            {
                console.log('finito');
                this.Bringing = false;
            }, 2000);
        }
    }

    export class DominoTile {
        constructor(private _category: string, private _imageUrl: string) {
        }

        get Category(): string {
            return this._category;
        }

        get ImageUrl(): string {
            return this._imageUrl;
        }
    }

    export enum DominoPieceOrientation {
        UpDown = 0,
        LeftRight,
    }

}