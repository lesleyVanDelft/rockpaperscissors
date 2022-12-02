import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';

const Button = () => {
	const images = [iconRock, iconPaper, iconScissors];

	return (
		<div className="ButtonChoice">
			{images?.map((el, i) => {
				return (
					<button key={i} className={`choice ${i + 1}`}>
						<img src={el} alt="dsfsd" />
					</button>
				);
			})}
		</div>
	);
};

export default Button;
