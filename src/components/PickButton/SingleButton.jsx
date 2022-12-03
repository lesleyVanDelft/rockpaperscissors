import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SingleButton = ({ choice, userChoice, houseChoice }) => {
	const color = useSelector(state => state.choice.choice);
	const [selected, setSelected] = useState('');
	const [buttonColor, setButtonColor] = useState('');

	// console.log(userChoice);
	console.log(choice);

	useEffect(() => {
		// setSelected(choice);
		if (choice === 'rock') {
			setSelected(iconRock);
			setButtonColor('red');
		} else if (choice === 'paper') {
			setSelected(iconPaper);
			setButtonColor('blue');
		} else if (choice === 'scissors') {
			setSelected(iconScissors);
			setButtonColor('yellow');
		}
	}, [choice]);

	return (
		<button className={`SingleButton ${buttonColor}`}>
			<img src={selected} alt="choice" />
		</button>
	);
};

export default SingleButton;
