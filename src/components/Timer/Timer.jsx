import "./Timer.css";

const Timer = () => {
	return (
		<section className="timer">
			<div className="timer-container">
				<div className="inner-circle">
					<div className="timer-display">
						<div className="time">17:59</div>
						<span className="start-stop">pause</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Timer;
