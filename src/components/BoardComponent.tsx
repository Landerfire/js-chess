import React, { FC } from 'react';
import { Board } from '../models/Board';
import CellComponent from './CellComponent';

interface BoardComponentProps {
	board: Board;
}

const BoardComponent: FC<BoardComponentProps> = ({ board }) => {
	return (
		<div className="board">
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((cell) => (
						<CellComponent key={cell.id} cell={cell} color={cell.color}/>
					))}
				</React.Fragment>
			))}
		</div>
	);
};

export default BoardComponent;
