import Button from './Button';
import triangle from '../../assets/images/bg-triangle.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseOption } from '../../features/Choice/choiceSlice';
import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import SingleButton from './SingleButton';
const PickButton = ({ getSelected }) => {
	const selected = useSelector(state => state.choice.choice);
	const images = [iconRock, iconPaper, iconScissors];
	const [choice, setChoice] = useState(selected);
	const [color, setColor] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		setChoice(selected);
	}, [selected]);

	// useEffect(() => {

	// },[])

	return (
		<div className="PickButton">
			<Button getSelected={getSelected} />
			{/* {images.map((el, i) => {
				return <SingleButton key={i} choice={choice} src={el} />;
			})} */}
			<img src={triangle} alt="bg image" className="backgroundImg" />
		</div>
	);
};

export default PickButton;
