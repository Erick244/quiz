import { useEffect, useState } from "react";
import { useStore } from "../../config/store";
import { infoMessage } from "../../config/message";
import { GitHubIcon } from "../view/Icons";
import { useRouter } from "next/router";
import css from "../../styles/InfoBar.module.css";

interface InfoBarProps {
	stopTimer: boolean;
}

export default function InfoBar(props: InfoBarProps) {
	const { annulled, setAnnulled, questionsLeft, setQuestionsLeft } = useStore();
	const [time, setTime] = useState<number>(30);
	const [timer, setTimer] = useState<NodeJS.Timeout>();
	const router = useRouter();

	const quizProgress = (9 - questionsLeft) * 10;

	function cancelQuestion() {
		setAnnulled(annulled + 1);
		infoMessage("O tempo para responder acabou!");
		setTimeout(() => {
			if (questionsLeft > 0) {
				setQuestionsLeft(questionsLeft - 1);
			} else {
				router.push('/conclusions');
			}
		}, 2000)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(time => {
				if (time > 0) {
					return time - 1;
				} else {
					clearInterval(interval);
					return time = 0;
				}
			})
		}, 1000)

		setTimer(interval);

		return () => {
			clearInterval(interval);
			setTime(time => time = 30);
		}
	}, [questionsLeft])

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