import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { chooseOption, selected } from '../../features/Choice/choiceSlice';

const Button = ({ selectedColor }) => {
	const images = [iconPaper, iconScissors, iconRock];
	const [color, setColor] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(chooseOption(color));
		dispatch(selected(color === '' ? false : true));
	}, [color]);

	return (
		<div className="ButtonChoice">
			<div className="ButtonChoice__top">
				{images?.map((el, i) => {
					if (i === 0) {
						return (
							<button
								key={i}
								className={`ButtonChoice__choice blue`}
								onClick={() => {
									setColor('blue');
									dispatch(chooseOption('blue'));
								}}>
								<img src={el} alt="dsfsd" />
							</button>
						);
					} else if (i === 1) {
						return (
							<button
								key={i}
								className={`ButtonChoice__choice yellow`}
								onClick={() => {
									setColor('yellow');
									// dispatch(chooseOption(color));
								}}>
								<img src={el} alt="dsfsd" />
							</button>
						);
					} else if (i === 2) {
						return (
							<button
								key={i}
								className={`ButtonChoice__choice red`}
								onClick={() => {
									setColor('red');
									// dispatch(chooseOption(color));
								}}>
								<img src={el} alt="dsfsd" />
							</button>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Button;
