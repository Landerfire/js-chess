import { FC } from 'react';
import { Cell } from '../models/Cell';
import { Colors } from '../utils/Colors';

interface CellComponentProps {
	color: Colors;
	cell: Cell;
	selected: boolean
	click: (cell: Cell) => void;
}

const CellComponent: FC<CellComponentProps> = ({ cell, color, selected, click }) => {
	const classNames = `cell ${color} ${selected && 'selected'}`;

	return (
		<div className={classNames} onClick={() => click(cell)}>
			{cell.figure?.image && <img src={cell.figure?.image} alt="" />}
			<span className="cell_number">{cell.id}</span>
		</div>
	);
};

export default CellComponent;
