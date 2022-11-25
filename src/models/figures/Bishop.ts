import { FiguresImages } from '../../config/figuresImages';
import { Colors } from '../../utils/Colors';
import { Figure, FigureNames } from './Figure';

export class Bishop extends Figure {
	constructor(color: Colors) {
		super(color);
		this.name = FigureNames.BISHOP;
		this.image = this.color === Colors.BLACK ? FiguresImages.black_bishop : FiguresImages.white_bishop;
	}
}
