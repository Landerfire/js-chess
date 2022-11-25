import { FiguresImages } from '../../config/figuresImages';
import { Colors } from '../../utils/Colors';
import { Figure, FigureNames } from './Figure';

export class Pawn extends Figure {
	constructor(color: Colors) {
		super(color);
		this.name = FigureNames.PAWN;
		this.image = this.color === Colors.BLACK ? FiguresImages.black_pawn : FiguresImages.white_pawn
		// this.image = this.color === Colors.BLACK ? blackPawn : whitePawn;
	}
}
