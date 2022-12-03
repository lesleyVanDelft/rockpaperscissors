import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import { useEffect, useState } from 'react';

const SingleButton = ({ color, choice }) => {
	const [selected, setSelected] = useState('');

	useEffect(() => {
		// setSelected(choice);
		if (choice === 'rock') {
			setSelected(iconRock);
		} else if (choice === 'paper') {
			setSelected(iconPaper);
		} else if (choice === 'scissors') {
			setSelected(iconScissors);
		}
	}, [choice]);

	// useEffect(() => {

	// }, [])

	return (
		<button className={`SingleButton ${color}`}>
			<img src={selected} alt="choice" />
		</button>
	);
};

export default SingleButton;
