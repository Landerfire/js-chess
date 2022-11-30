import { FiguresImages } from '../../config/figuresImages';
import { Colors } from '../../utils/Colors';
import { Cell } from '../Cell';
import { Figure, FigureNames } from './Figure';

export class Rook extends Figure {
	array: Cell[] = []

	constructor(color: Colors) {
		super(color);
		this.name = FigureNames.ROOK;
		this.image = this.color === Colors.BLACK ? FiguresImages.black_rook : FiguresImages.white_rook;
	}

	// public isEmptyVertical(target: Cell): boolean {
	// 	if (this.getPosition()[0] !== target.getColumnLiteral()) return false;

	// 	const min = Math.min(+this.getPosition()[1], target.getRowNumber());
	// 	const max = Math.max(+this.getPosition()[1], target.getRowNumber());
	// 	console.log(min + 1, max);
	// 	console.log(target.getId());

	// 	this.array.push(target)


	// 	// for (let i = min + 1; i < max; i++) {
	// 	// 	arr.push(target);
	// 	// }

	// 	console.log(this.array);
	// 	this.array = []

	// 	// if (!target.isEmpty()) {
	// 	// 	return false;
	// 	// }

	// 	// for (let i = min + 1; i < max; i++) {
	// 	// 	if (!firstTarget) {
	// 	// 		if (!target.isEmpty()) {
	// 	// 			if (target.getFigure()?.color !== this.color) {
	// 	// 				target.setAvailable(true);
	// 	// 				firstTarget = target;
	// 	// 				console.log(target);
	// 	// 				console.log(firstTarget);
	// 	// 				return true;
	// 	// 			}
	// 	// 			return false;
	// 	// 		}
	// 	// 	}
	// 	// }

	// 	return true;
	// }

	public canAttack(target: Cell): boolean {
		if (!super.canAttack(target)) {
			return false;
		}
		// if (this.isEmptyVertical(target)) {
		// 	return true;
		// }

		// if (this.getPosition()[0] === target.getColumnLiteral()) {
		// 	return true;
		// }
		// if (+this.getPosition()[1] === target.getRowNumber()) {
		// 	return true;
		// }

		return true;
	}
}

/* 
public canAttack(cell: Cell): boolean {
	if (cell.isEmpty()) return true;
	return this.isEnemy(cell.getFigure()!) && cell.getFigure()?.getName() !== FigureNames.KING;
}
*/
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
