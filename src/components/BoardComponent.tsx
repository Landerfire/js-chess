import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardComponentProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>();

	useEffect(() => {
		updateBoard();
	}, [selectedCell]);

	function click(cell: Cell) {
		if (selectedCell && selectedCell.figure) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
		} else {
			setSelectedCell(cell);
		}
	}

	function updateBoard() {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	}

	return (
		<div className="board">
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((cell) => (
						<CellComponent key={cell.id} cell={cell} color={cell.color} click={click} selected={selectedCell?.id === cell.id} />
					))}
				</React.Fragment>
			))}
		</div>
	);
};

export default BoardComponent;
