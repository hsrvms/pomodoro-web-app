import "./Timer.css";

const Timer = ({ time, isRunning, startTimer, stopTimer }) => {
	return (
		<section className="timer">
			<div className="timer-container">
				<div className="inner-circle">
					<div
						className="timer-display"
						onClick={isRunning ? stopTimer : startTimer}
					>
						<div className="time">
							{Math.floor(time / 60)}:
							{(time % 60).toString().padStart(2, "0")}
						</div>
						<span className="start-stop">
							{isRunning ? "pause" : "start"}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Timer;
