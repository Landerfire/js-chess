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

	/* 
	public isEmptyVertical(target: Cell): boolean {
		if (this.x !== target.x) {
			return false;
		}
		const min = Math.min(this.y, target.y);
		const max = Math.max(this.y, target.y);
		for (let y = min + 1; y < max; y++) {
			if (!this.board.getCell(this.x, y).isEmpty()) {
				return false;
			}
		}
		return true;
	}
*/

	// function rookPattern(selectedCell: Cell, targetCell: Cell) {
	// 	if (selectedCell.getColumnLiteral() !== targetCell.getColumnLiteral()) return false;

	// 	const min = Math.min(selectedCell.getRowNumber(), targetCell.getRowNumber());
	// 	const max = Math.max(selectedCell.getRowNumber(), targetCell.getRowNumber());
	// 	for (let y = min + 1; y < max; y++) {
	// 		if (!board.getCell(selectedCell.getColumnLiteral(), y).isEmpty()) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// }

	//! Сделать валидацию хода фигур здесь
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
