import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import PickButton from './components/PickButton/PickButton';
import Container from './components/Container';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import PickedBoard from './components/PickedBoard/PickedBoard';
import { useSelector } from 'react-redux';

function App() {
	// const [selected, setSelected] = useState(false);
	const selected = useSelector(state => state.choice.selected);
	const [gameStart, setGameStart] = useState(selected);

	useEffect(() => {
		setGameStart(selected);
	}, [selected]);

	return (
		<Container>
			<ScoreBoard />
			{/* {console.log(selected)} */}
			{/* {!gameStart ? <PickButton /> : <PickedBoard />} */}
			{gameStart || <PickButton />}
			{gameStart && <PickedBoard />}
		</Container>
	);
}

export default App;
