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
	image: typeof logo;
	name: FigureNames;
	id: number;
	position: string | null;

	constructor(color: Colors) {
		this.color = color;
		this.name = FigureNames.FIGURE;
		this.image = '';
		this.id = Math.random();
		this.position = null;
		// this.position = position;
	}

	public setPosition(position: string) {
		this.position = position;
	}

	public getPosition(): string {
		return this.position!;
	}

	public getFigure(): Figure {
		return this;
	}

	public getColor(): Colors {
		return this.color;
	}

	public getName(): FigureNames {
		return this.name;
	}

	public getImage(): typeof logo {
		return this.image;
	}

	public getFigureByPosition(position: string) {
		if (position === this.position) return this;
	}

	public moveFigure(currentCell: Cell, targetCell: Cell): void {
		// this.position = targetCell.id
		targetCell.setFigure(this);
		currentCell.removeFigureFromCell();
	}

	public isAlly(target: Figure): boolean {
		return this.getColor() === target.getColor();
	}

	public isKing(): boolean {
		return this.getName() === FigureNames.KING;
	}

	public canAttack(cell: Cell): boolean {
		if (cell.isEmpty()) return true;
		if (this.isAlly(cell.getFigure()!)) {
			return false;
		}
		if (cell.getFigure()!.isKing()) return false;
		return true;
	}
}
