import { Colors } from '../utils/Colors';
import { Cell, columnsLiterals } from './Cell';
import { Bishop } from './figures/Bishop';
import { Figure } from './figures/Figure';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';

export class Board {
	cells: Cell[][] = [];

	private addPawns(): void {
		for (let i = 0; i < 8; i++) {
			this.cells[1][i].setFigure(new Pawn(Colors.BLACK));
			this.cells[6][i].setFigure(new Pawn(Colors.WHITE));
		}
	}

	private addRooks(): void {
		this.cells[0][0].setFigure(new Rook(Colors.BLACK));
		this.cells[0][7].setFigure(new Rook(Colors.BLACK));
		this.cells[7][0].setFigure(new Rook(Colors.WHITE));
		this.cells[7][7].setFigure(new Rook(Colors.WHITE));
	}

	private addKnights(): void {
		this.cells[0][1].setFigure(new Knight(Colors.BLACK));
		this.cells[0][6].setFigure(new Knight(Colors.BLACK));
		this.cells[7][1].setFigure(new Knight(Colors.WHITE));
		this.cells[7][6].setFigure(new Knight(Colors.WHITE));
	}

	private addBishops(): void {
		this.cells[0][2].setFigure(new Bishop(Colors.BLACK));
		this.cells[0][5].setFigure(new Bishop(Colors.BLACK));
		this.cells[7][2].setFigure(new Bishop(Colors.WHITE));
		this.cells[7][5].setFigure(new Bishop(Colors.WHITE));
	}

	private addQueens(): void {
		this.cells[0][3].setFigure(new Queen(Colors.BLACK));
		this.cells[7][3].setFigure(new Queen(Colors.WHITE));
	}

	private addKings(): void {
		this.cells[0][4].setFigure(new King(Colors.BLACK));
		this.cells[7][4].setFigure(new King(Colors.WHITE));
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

	public getCell(column: string, row: number): Cell {
		const columnNumber = columnsLiterals.indexOf(column);
		return this.cells[row][columnNumber];
	}

	public getCopyBoard(): Board {
		const newBoard = new Board();
		newBoard.cells = this.cells;
		return newBoard;
	}

	public highlightCells(selectedCell: Cell | null) {
		for (let i = 0; i < this.cells.length; i++) {
			const row = this.cells[i];
			for (let j = 0; j < row.length; j++) {
				const target = row[j];
				target.setAvailable(!!selectedCell?.figure?.canAttack(target));
			}
		}
	}

	public isEmptyVertical(selectedCell: Cell, targetCell: Cell): boolean {
		if (selectedCell.getColumnLiteral() !== targetCell.getColumnLiteral()) return false;

		const min = Math.min(selectedCell.getRowNumber(), targetCell.getRowNumber());
		const max = Math.max(selectedCell.getRowNumber(), targetCell.getRowNumber());
		for (let y = min + 1; y < max; y++) {
			if (!this.getCell(selectedCell.getColumnLiteral(), y).isEmpty()) {
				return false;
			}
		}
		return true;
	}

	// public moveFigure(selectedCell: Cell, targetCell: Cell) {

	// }

	public addFigures() {
		this.addPawns();
		this.addRooks();
		this.addKnights();
		this.addBishops();
		this.addQueens();
		this.addKings();
	}
}

/* 
public isEmptyVertical(target: Cell): boolean {
	if (this.x !== target.x) {
		return false;
	}
	const min = Math.min(this.y, target.y);
	const max = Math.max(this.y, target.y);
	for (let y = min + 1; y < max; y++) {
		if (!this.board.getCell(this.x, y).isEmpty()) {
			return false;
		}
	}
	return true;
}
*/
