import Question from "../../interfaces/Question";
import Alternative from "./Alternative";
import InfoBar from "./InfoBar";
import useQuiz from "../../hooks/useQuiz";
import { errorMessage } from "../../config/message";
import { QuizProps } from "../../interfaces/Props";
import css from "../../styles/Quiz.module.css";

export default function Quiz(props: QuizProps) {

	const {
		questionsLeft,
		alreadyClicked,
		checkHit,
		setAlreadyClicked,
		setQuestionsLeft,
		router
	} = useQuiz();
	
	const currectAlternative = props.questions[questionsLeft]?.currect_alternative;
	const alternatives = {
		a: props.questions[questionsLeft]?.alternative_a,
		b: props.questions[questionsLeft]?.alternative_b,
		c: props.questions[questionsLeft]?.alternative_c
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
					checkHit(alternatives.a, currectAlternative);
				}}
				alreadyClicked={alreadyClicked}
				currectAlternative={currectAlternative}
				alternative={alternatives.a}
			/>
			<Alternative
				click={() => {
					setAlreadyClicked(true);
					checkHit(alternatives.b, currectAlternative);
				}}
				alreadyClicked={alreadyClicked}
				currectAlternative={currectAlternative}
				alternative={alternatives.b}
			/>
			<Alternative
				click={() => {
					setAlreadyClicked(true);
					checkHit(alternatives.c, currectAlternative);
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