import { Colors } from '../utils/Colors';
import { Figure } from './figures/Figure';

export const columnsLiterals = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export class Cell {
	readonly x: number;
	readonly y: number;
	readonly color: Colors;
	readonly id: string;
	figure: Figure | null;

	constructor(color: Colors, x: number, y: number) {
		this.x = 9 - x;
		this.y = y;
		this.color = color;
		const literal = columnsLiterals[y];
		this.id = literal + this.x.toString();
		this.figure = null;
	}

	public getCell() {
		return {
			x: this.x,
			y: this.y,
			color: this.color,
			id: this.id,
			// figure: this.figure ? `${this.figure?.name} ${this.figure?.color}` : null,
			figure: this.getFigure()
		};
	}

	public isEmpty(): boolean {
		return this.figure ? false : true;
	}

	public setFigure(figure: Figure) {
		this.figure = figure;
		this.figure.setPosition(this.id);
	}

	public getFigure() {
		return this.figure ? `${this.figure?.name} ${this.figure?.color}` : this.figure;
	}
}
