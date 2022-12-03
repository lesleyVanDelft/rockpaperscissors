import { useEffect, useState } from 'react';
import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import { useDispatch, useSelector } from 'react-redux';
import SingleButton from '../PickButton/SingleButton';
import { gameStatus, setHouse } from '../../features/Choice/choiceSlice';

const HouseChoice = ({}) => {
	const userChoice = useSelector(state => state.choice.choice);
	const [countdown, setCountdown] = useState(3);
	const [userPick, setUserPick] = useState(userChoice);
	const [housePick, setHousePick] = useState('');
	const images = [iconRock, iconPaper, iconScissors];
	const options = ['rock', 'paper', 'scissors'];

	const dispatch = useDispatch();

	useEffect(() => {
		housePick !== '' &&
			setTimeout(() => {
				dispatch(gameStatus(true));
			}, 3200);
	}, [housePick]);

	useEffect(() => {
		if (countdown > 0) {
			setTimeout(() => {
				setCountdown(countdown - 1);
			}, 1000);
		}
	}, [countdown]);

	useEffect(() => {
		setHousePick(options[Math.floor((options.length * Math.random()) | 0)]);
	}, []);

	useEffect(() => {
		dispatch(setHouse(housePick));
	}, [housePick]);

	useEffect(() => {
		setUserPick(userChoice);
	}, [userChoice]);

	return (
		<div className={`HouseChoice`}>
			{countdown > 0 ? (
				<div className="countdown">{countdown}</div>
			) : (
				<SingleButton choice={housePick} />
			)}
		</div>
	);
};

export default HouseChoice;
