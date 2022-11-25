import { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

function App() {
	const [board, setBoard] = useState(new Board());

	useEffect(() => {
		resetGame();
	}, []);

	function resetGame() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
	}

	return (
		<div className="App">
			<BoardComponent board={board} />
		</div>
	);
}

export default App;
