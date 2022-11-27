import logo from '../../assets/black-king.png';
import { Colors } from '../../utils/Colors';
import { Cell } from '../Cell';

export enum FigureNames {
	FIGURE = 'figure',
	PAWN = 'pawn',
	ROOK = 'rook',
	KNIGHT = 'knight',
	BISHOP = 'bishop',
	QUEEN = 'queen',
	KING = 'king',
}

export class Figure {
	color: Colors;
	image: typeof logo | null;
	name: FigureNames;
	id: number;
	position: string | null;

	constructor(color: Colors) {
		this.color = color;
		this.name = FigureNames.FIGURE;
		this.image = null;
		this.id = Math.random();
		this.position = null;
		// this.position = position;
	}

	public setPosition(position: string) {
		this.position = position;
	}

	public getPosition() {
		return this.position;
	}

	public getFigure() {
		return { position: this.position, name: this.name, color: this.color, id: this.id };
	}

	public getFigureColor() {
		return this.color;
	}

	public getFigureName() {
		return this.name;
	}

	public getFigureByPosition(position: string) {
		if (position === this.position) return this;
	}

	public moveFigure(currentCell: Cell, targetCell: Cell): void {
		// this.position = targetCell.id
		targetCell.setFigure(this);
		currentCell.removeFigureFromCell();
	}

	public canAttack(cell: Cell): boolean {
		if (cell.isEmpty()) return true;
		return this.color !== cell.figure?.getFigureColor() && cell.figure?.getFigureName() !== FigureNames.KING;
	}
}
