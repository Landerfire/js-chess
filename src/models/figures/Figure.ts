import logo from '../../assets/black-king.png';
import { Colors } from '../../utils/Colors';

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
}
