import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame, setResult } from '../../features/Choice/choiceSlice';
import Button from '../PickButton/Button';
import SingleButton from '../PickButton/SingleButton';
import HouseChoice from './HouseChoice';

const PickedBoard = () => {
	const selected = useSelector(state => state.choice.choice);
	const user = useSelector(state => state.choice.userChoice);
	const house = useSelector(state => state.choice.house);
	const status = useSelector(state => state.choice.completed);
	const result = useSelector(state => state.choice.result);
	const [color, setColor] = useState(selected);
	const [choice, setChoice] = useState(user);
	const [gameStatus, setGameStatus] = useState(status);
	const [houseChoice, setHouseChoice] = useState(house);
	const [gameResult, setGameResult] = useState(result);

	const dispatch = useDispatch();
	useEffect(() => {
		setGameStatus(status);
	}, [status]);

	useEffect(() => {
		setChoice(user);
	}, [user]);

	useEffect(() => {
		setHouseChoice(house);
	}, [house]);

	useEffect(() => {
		// setGameResult(result);

		if (choice === houseChoice) {
			setGameResult('tie');
			// dispatch(setResult(gameResult));
		} else if (choice === 'rock' && houseChoice === 'paper') {
			setGameResult('lose');
			// dispatch(setResult(gameResult));
		} else if (choice === 'rock' && houseChoice === 'scissors') {
			setGameResult('win');
			// dispatch(setResult(gameResult));
		} else if (choice === 'paper' && houseChoice === 'rock') {
			setGameResult('win');
			// dispatch(setResult(gameResult));
		} else if (choice === 'paper' && houseChoice === 'scissors') {
			setGameResult('lose');
			// dispatch(setResult(gameResult));
		} else if (choice === 'scissors' && houseChoice === 'paper') {
			setGameResult('win');
			// dispatch(setResult(gameResult));
		} else if (choice === 'scissors' && houseChoice === 'rock') {
			setGameResult('lose');
			// dispatch(setResult(gameResult));
		}
	}, [houseChoice]);

	useEffect(() => {
		dispatch(setResult(gameResult));
	}, [gameResult]);

	// useEffect(() => {
	// 	setColor(selected);

	// 	if (color === 'blue') {
	// 		setChoice('paper');
	// 	} else if (color === 'yellow') {
	// 		setChoice('scissors');
	// 	} else if (color === 'red') {
	// 		setChoice('rock');
	// 	}
	// }, [selected]);
	// console.log(choice);
	// const getWinner = () => {};

	// useEffect(() => {
	// 	if (choice === houseChoice) {
	// 		setGameResult('tie');
	// 		dispatch(setResult(gameResult));
	// 	} else if (choice === 'rock' && houseChoice === 'paper') {
	// 		setGameResult('lose');
	// 		dispatch(setResult(gameResult));
	// 	} else if (choice === 'rock' && houseChoice === 'scissors') {
	// 		setGameResult('win');
	// 		dispatch(setResult(gameResult));
	// 	} else if (choice === 'paper' && houseChoice === 'rock') {
	// 		setGameResult('win');
	// 		dispatch(setResult(gameResult));
	// 	} else if (choice === 'paper' && houseChoice === 'scissors') {
	// 		setGameResult('lose');
	// 		dispatch(setResult(gameResult));
	// 	} else if (choice === 'scissors' && houseChoice === 'paper') {
	// 		setGameResult('win');
	// 		dispatch(setResult(gameResult));
	// 	} else if (choice === 'scissors' && houseChoice === 'rock') {
	// 		setGameResult('lose');
	// 		dispatch(setResult(gameResult));
	// 	}
	// 	console.log(choice);
	// 	console.log(houseChoice);
	// }, []);

	return (
		<div className="PickedBoard">
			<div className="PickedBoard__choices">
				<div className="PickedBoard__choices--user">
					<h2>You picked</h2>
					<SingleButton choice={choice} />
				</div>
				<div
					className={`PickedBoard__choices--reset ${
						gameStatus ? 'show' : 'hidden'
					}`}>
					<h3>You {`win?`}</h3>
					<button onClick={() => dispatch(resetGame())}>Play again</button>
				</div>

				<div className="PickedBoard__choices--house">
					<h2>The house picked</h2>
					<HouseChoice choice={choice} />
				</div>
			</div>
		</div>
	);
};

export default PickedBoard;
