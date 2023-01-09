import { useEffect } from "react";
import { GitHubIcon } from "../view/Icons";
import { InfoBarProps } from "../../interfaces/Props";
import useQuiz from "../../hooks/useQuiz";
import css from "../../styles/InfoBar.module.css";

export default function InfoBar(props: InfoBarProps) {

	const {
		timer,
		time,
		quizProgress,
		questionsLeft,
		cancelQuestion
	} = useQuiz();

	useEffect(() => {
		if (time == 0) cancelQuestion();
	}, [time])
	
	useEffect(() => {
		clearInterval(timer)
	}, [props.stopTimer])

	return (
		<div className={css.infoBar}>
			<div className={css.bar1}>
				<span className={css.social}>
					<a href="https://github.com/Erick244" target={'_blank'}>
						<i className="v-middle">{GitHubIcon}</i> @Erick244
					</a>
				</span>
				<div className={css.quizProgress}>
					<span>Quiz {quizProgress}% concluido</span>
					<div className={css.progressBar}>
						<div className={css.progress} style={{
							width: `${quizProgress}%`
						}}></div>
					</div>
				</div>
			</div>
			<hr />
			<div className={css.bar2}>
				<span>{questionsLeft} Perguntas restantes</span>
				<div className={css.quizTime}>
					<span>Tempo Restante</span>
					<div className={css.progressBarTimer} style={{
						background: `conic-gradient(aqua ${(360 / 30) * time}deg, #3b3f5a 0deg)`
					}}>
						<span className={css.time}>{time}</span>
					</div>
				</div>
			</div>
		</div>
	)
}