import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import { useState } from 'react';

const Button = () => {
	const imagesTop = [iconPaper, iconScissors];
	const imagesBot = [iconRock];
	const [color, setColor] = useState('');

	return (
		<div className="ButtonChoice">
			<div className="ButtonChoice__top">
				{imagesTop?.map((el, i) => {
					return (
						<button
							key={i}
							className={`ButtonChoice__choice ${
								i === 0 ? 'blue' : 'yellow'
							} `}>
							<img src={el} alt="dsfsd" />
						</button>
					);
				})}
			</div>
			<div className="ButtonChoice__bot">
				{imagesBot?.map((el, i) => {
					return (
						<button key={i} className={`ButtonChoice__choice red`}>
							<img src={el} alt="dsfsd" />
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Button;
