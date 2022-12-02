const ScoreBoard = () => {
	return (
		<div className="ScoreBoard">
			<div className="ScoreBoard__logo">
				<h2>Rock</h2>
				<h2>Paper</h2>
				<h2>Scissors</h2>
			</div>

			<div className="ScoreBoard__score">
				<p className="ScoreBoard__score--title">score</p>
				<span className="ScoreBoard__score--amount">0</span>
			</div>
		</div>
	);
};

export default ScoreBoard;
