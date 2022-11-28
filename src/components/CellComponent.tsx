import { FC } from 'react';
import { Cell } from '../models/Cell';
import { Colors } from '../utils/Colors';

interface CellComponentProps {
	color: Colors;
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

const CellComponent: FC<CellComponentProps> = ({ cell, color, selected, click }) => {
	const classNames = `cell ${color} ${selected && 'selected'}`;

	return (
		<div className={classNames} onClick={() => click(cell)}>
			{cell.available && <div className="available"></div>}
			{cell.getFigure() && <img src={cell.getFigure()?.getImage()} alt="" />}
			<span className="cell_number">{cell.id}</span>
		</div>
	);
};

export default CellComponent;
