import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardComponentProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	useEffect(() => {
		highlightCells();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCell]);

	function click(cell: Cell) {
		if (selectedCell && selectedCell.getFigure() && selectedCell.getFigure()?.canAttack(cell)) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
		} else if (!cell.getFigure() || selectedCell?.getId() === cell.getId()) {
			setSelectedCell(null);
		} else {
			setSelectedCell(cell);
		}
	}

	function highlightCells() {
		board.highlightCells(selectedCell!);
		updateBoard();
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
						<CellComponent
							key={cell.getId()}
							cell={cell}
							color={cell.getColor()}
							click={click}
							selected={!!selectedCell?.compareId(cell)}
						/>
					))}
				</React.Fragment>
			))}
		</div>
	);
};

export default BoardComponent;
