import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { CheckIcon, CloseIcon } from "../components/view/Icons";
import { infoMessage } from "../config/message";
import { useStore } from "../config/store";

export default function useQuiz() {
	const {
		annulled,
		setAnnulled,
		questionsLeft,
		setQuestionsLeft,
		setHits,
		hits,
		mistakes,
		setMistakes
	} = useStore();
	const [alreadyClicked, setAlreadyClicked] = useState<boolean>(false);
	const [showIcon, setShowIcon] = useState<boolean>(false);
	const [alternativeIsCurrect, setAlternativeIsCurrect] = useState<boolean | null>(null);
	const [icon, setIcon] = useState<ReactNode>(CheckIcon);
	const [time, setTime] = useState<number>(30);
	const [timer, setTimer] = useState<NodeJS.Timeout>();
	const router = useRouter();

	function validateAlternative(alternative: string, currectAlternative: string) {
		if (alternative === currectAlternative) {
			setAlternativeIsCurrect(true);
			setIcon(CheckIcon);
		} else {
			setAlternativeIsCurrect(false);
			setIcon(CloseIcon);
		}
	}

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

	function checkHit(alternative: string, currectAlternative: string) {
		if (alternative === currectAlternative) {
			setHits(hits + 1);
		} else {
			setMistakes(mistakes + 1);
		}
	}

	return {
		showIcon,
		setShowIcon,
		alternativeIsCurrect,
		setAlternativeIsCurrect,
		icon,
		validateAlternative,
		timer,
		time,
		questionsLeft,
		quizProgress,
		cancelQuestion,
		alreadyClicked,
		setAlreadyClicked,
		checkHit,
		setQuestionsLeft,
		router
	}
}