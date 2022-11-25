import { FiguresImages } from '../../config/figuresImages';
import { Colors } from '../../utils/Colors';
import { Figure, FigureNames } from './Figure';

export class Knight extends Figure {
	constructor(color: Colors) {
		super(color);
		this.name = FigureNames.KNIGHT;
		this.image = this.color === Colors.BLACK ? FiguresImages.black_knight : FiguresImages.white_knight;
	}
}
