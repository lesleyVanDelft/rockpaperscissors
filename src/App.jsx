import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import PickButton from './components/PickButton/PickButton';
import Container from './components/Container';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Container>
			<ScoreBoard />
			<PickButton />
		</Container>
	);
}

export default App;
