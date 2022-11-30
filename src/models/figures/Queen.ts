import { FiguresImages } from '../../config/figuresImages';
import { Colors } from '../../utils/Colors';
import { Figure, FigureNames } from './Figure';

export class Queen extends Figure {
	constructor(color: Colors) {
		super(color);
		this.name = FigureNames.QUEEN;
		this.image = this.color === Colors.BLACK ? FiguresImages.black_queen : FiguresImages.white_queen;
	}
}


