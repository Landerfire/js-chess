import { FC } from 'react';
import { Cell } from '../models/Cell';
import { Colors } from '../utils/Colors';

interface CellComponentProps {
	color: Colors;
	cell: Cell;
}

const CellComponent: FC<CellComponentProps> = ({ cell, color }) => {
	const classNames = `cell ${color}`;

	function getCell() {
		console.log(cell.getCell());
		console.log(cell.isEmpty());
		if (!cell.isEmpty()) {
			console.log(cell.figure?.getFigure());
		}
	}

	return (
		<div className={classNames} onClick={() => getCell()}>
			{cell.figure?.image && <img src={cell.figure?.image} alt="" />}
			<span className="cell_number">{cell.id}</span>
		</div>
	);
};

export default CellComponent;
