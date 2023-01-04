import Question from "../../interfaces/Question";
import { useState, useEffect } from "react";
import css from "../../styles/Quiz.module.css";
import Alternative from "./Alternative";
import InfoBar from "./InfoBar";
import { errorMessage } from "../../config/message";
import { useRouter } from "next/router";
import { useStore } from "../../config/store";

interface QuizProps {
	questions: Question[];
}

export default function Quiz(props: QuizProps) {
	const router = useRouter();
	const { hits, setHits, mistakes, setMistakes, questionsLeft, setQuestionsLeft } = useStore();
	const [alreadyClicked, setAlreadyClicked] = useState<boolean>(false);

	const currectAlternative = props.questions[questionsLeft]?.currect_alternative;
	const alternatives = {
		a: props.questions[questionsLeft]?.alternative_a,
		b: props.questions[questionsLeft]?.alternative_b,
		c: props.questions[questionsLeft]?.alternative_c
	}

	function checkHit(alternative: string) {
		if (alternative === currectAlternative) {
			setHits(hits + 1);
		} else {
			setMistakes(mistakes + 1);
		}
	}

	return (
		<div className={css.quiz}>
			<InfoBar stopTimer={alreadyClicked}/>
			<div className={css.question}>
				{props.questions[questionsLeft]?.question}
			</div>
			<Alternative
				click={() => {
					setAlreadyClicked(true);
					checkHit(alternatives.a);
				}}
				alreadyClicked={alreadyClicked}
				currectAlternative={currectAlternative}
				alternative={alternatives.a}
			/>
			<Alternative
				click={() => {
					setAlreadyClicked(true);
					checkHit(alternatives.b);
				}}
				alreadyClicked={alreadyClicked}
				currectAlternative={currectAlternative}
				alternative={alternatives.b}
			/>
			<Alternative
				click={() => {
					setAlreadyClicked(true);
					checkHit(alternatives.c);
				}}
				alreadyClicked={alreadyClicked}
				currectAlternative={currectAlternative}
				alternative={alternatives.c}
			/>

			{questionsLeft === 0 ? (
				<button onClick={() => {
					if (alreadyClicked) {
						router.push('/conclusions');
					}
				}}>
					Finalizar Quiz
				</button>
			) : (
				<button onClick={() => {
					if (alreadyClicked) {
						if (questionsLeft > 0) setQuestionsLeft(questionsLeft - 1);
						setAlreadyClicked(false);
					} else {
						errorMessage("Escolha uma alternativa para prosseguir.")
					}
				}}>
					Proxima Questão
				</button>
			)}

		</div>
	)
}