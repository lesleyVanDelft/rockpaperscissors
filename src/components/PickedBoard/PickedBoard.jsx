import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../PickButton/Button';
import SingleButton from '../PickButton/SingleButton';

const PickedBoard = () => {
	const selected = useSelector(state => state.choice.choice);
	const [color, setColor] = useState(selected);
	const [choice, setChoice] = useState('');

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
			{/* <Button selectedColor={choice} /> */}
			<SingleButton choice={choice} />
			<p>selected</p>
		</div>
	);
};

export default PickedBoard;
