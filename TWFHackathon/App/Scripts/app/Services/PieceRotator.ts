﻿module Services {
    export interface IDominoPieceRotator {
        rotateRight(piece: Models.DominoPiece): Models.DominoPiece;
        rotateLeft(piece: Models.DominoPiece): Models.DominoPiece;
    }

    export class DominoPieceRotator implements IDominoPieceRotator {

        public rotateRight(piece: Models.DominoPiece): Models.DominoPiece {
            if (piece.Orientation == Models.DominoPieceOrientation.UpDown) {
                return this.getRotatedPiece(piece, true);
            }
            else {
                return this.getRotatedPiece(piece, false);
            }
        }

        public rotateLeft(piece: Models.DominoPiece): Models.DominoPiece {
            if (piece.Orientation == Models.DominoPieceOrientation.UpDown) {
                return this.getRotatedPiece(piece, false);
            }
            else {
                return this.getRotatedPiece(piece, true);
            }
        }

        private getRotatedPiece(piece: Models.DominoPiece, changeTileOrder: boolean): Models.DominoPiece {

            var newOrientation: Models.DominoPieceOrientation;
            newOrientation = piece.Orientation == Models.DominoPieceOrientation.UpDown
                ? Models.DominoPieceOrientation.LeftRight
                : Models.DominoPieceOrientation.UpDown;

            var firstTile: Models.DominoTile = changeTileOrder ? piece.SecondTile : piece.FirstTile;
            var secondTile: Models.DominoTile = changeTileOrder ? piece.FirstTile : piece.SecondTile;

            return new Models.DominoPiece(firstTile, secondTile, newOrientation, piece.Id);
        }
    }
}