import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../PickButton/Button';
import SingleButton from '../PickButton/SingleButton';
import HouseChoice from './HouseChoice';

const PickedBoard = () => {
	const selected = useSelector(state => state.choice.choice);
	const gameStatus = useSelector(state => state.choice.completed);
	const [color, setColor] = useState(selected);
	const [choice, setChoice] = useState('');
	// const [] = useState()
	const [houseChoice, setHouseChoice] = useState('');

	useEffect(() => {
		setColor(selected);

		if (color === 'blue') {
			setChoice('paper');
		} else if (color === 'yellow') {
			setChoice('scissors');
		} else if (color === 'red') {
			setChoice('rock');
		}
	}, [selected]);

	return (
		<div className="PickedBoard">
			<div className="PickedBoard__userChoice">
				<h2>You picked</h2>
				<SingleButton choice={choice} />
			</div>
			<div className="PickedBoard__houseChoice">
				<h2>The house picked</h2>
				<HouseChoice choice={choice} />
			</div>
			<div className="PickedBoard__reset">
				{gameStatus && <button>reset gaem</button>}
			</div>
		</div>
	);
};

export default PickedBoard;
