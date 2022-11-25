import { FiguresImages } from '../../config/figuresImages';
import { Colors } from '../../utils/Colors';
import { Figure, FigureNames } from './Figure';

export class Rook extends Figure {
	constructor(color: Colors) {
		super(color);
		this.name = FigureNames.ROOK;
		this.image = this.color === Colors.BLACK ? FiguresImages.black_rook : FiguresImages.white_rook;
	}
}
