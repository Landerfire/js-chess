import { Colors } from '../utils/Colors';
import { Cell } from './Cell';
import { Pawn } from './figures/Pawn';

export class Board {
	cells: Cell[][] = [];

	private initPawns(): void {
		function addPawns(cellsRow: Cell[][], row: number, color: Colors): void {
			for (let j = 0; j < cellsRow[row].length; j++) {
				cellsRow[row][j].setFigure(new Pawn(color));
			}
		}

		for (let i = 0; i < 8; i++) {
			if (i === 1) {
				addPawns(this.cells, i, Colors.BLACK);
			}
			if (i === 6) {
				addPawns(this.cells, i, Colors.WHITE);
			}
		}
	}

	public initCells(): void {
		for (let i = 1; i <= 8; i++) {
			const row: Cell[] = [];
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 === 0) {
					row.push(new Cell(Colors.BLACK, i, j));
				} else {
					row.push(new Cell(Colors.WHITE, i, j));
				}
			}
			this.cells.push(row);
		}
	}

	public initFigures() {
		this.initPawns();
	}
}
