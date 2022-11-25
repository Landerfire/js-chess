import { FiguresImages } from '../../config/figuresImages';
import { Colors } from '../../utils/Colors';
import { Figure, FigureNames } from './Figure';

export class King extends Figure {
	constructor(color: Colors) {
		super(color);
		this.name = FigureNames.KING;
		this.image = this.color === Colors.BLACK ? FiguresImages.black_king : FiguresImages.white_king;
	}
}
