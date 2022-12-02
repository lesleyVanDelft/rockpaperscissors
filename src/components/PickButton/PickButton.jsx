import Button from './Button';
import triangle from '../../assets/images/bg-triangle.svg';
const PickButton = () => {
	return (
		<div className="PickButton">
			<Button />
			<img src={triangle} alt="bg image" className="backgroundImg" />
		</div>
	);
};

export default PickButton;
