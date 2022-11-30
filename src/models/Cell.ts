import { Colors } from '../utils/Colors';
import { Figure } from './figures/Figure';

export const columnsLiterals = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export class Cell {
	readonly x: number;
	readonly y: number;
	readonly color: Colors;
	readonly id: string;
	figure: Figure | null;
	available: boolean;

	constructor(color: Colors, x: number, y: number) {
		this.x = 9 - x;
		this.y = y;
		this.color = color;
		const literal = columnsLiterals[y];
		this.id = literal + this.x.toString();
		this.figure = null;
		this.available = false;
	}

	public getId(): string {
		return this.id;
	}

	public getColumnLiteral(): string {
		return this.getId()[0];
	}

	public getRowNumber(): number {
		return parseInt(this.getId()[1]);
	}

	public compareId(cell: Cell): boolean {
		return this.getId() === cell.getId();
	}

	public getColor(): Colors {
		return this.color;
	}

	public getCell() {
		return {
			x: this.x,
			y: this.y,
			color: this.color,
			id: this.id,
			// figure: this.figure ? `${this.figure?.name} ${this.figure?.color}` : null,
			figure: this.getFigure(),
		};
	}

	public isEmpty(): boolean {
		return this.figure ? false : true;
	}

	public isAvailable(): boolean {
		return this.available;
	}

	public setAvailable(bool: boolean) {
		this.available = bool;
	}

	public setFigure(figure: Figure) {
		this.figure = figure;
		this.figure.setPosition(this.id);
	}

	public getFigure() {
		return this.figure ? this.figure : null;
	}

	public removeFigureFromCell() {
		this.figure = null;
	}

	public moveFigure(cell: Cell) {
		cell.setFigure(this.figure!);
		this.removeFigureFromCell();
	}

	// public isEmptyVertical(target: Cell):boolean {
	// 	if (this.getColumnLiteral() !== target.getColumnLiteral()) return false

	// 	const min = Math.min(this.getRowNumber(), target.getRowNumber())
	// 	const max = Math.max(this.getRowNumber(), target.getRowNumber())
	// 	for (let y = min + 1; y < max; y++) {
	// 	}
	// }
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
