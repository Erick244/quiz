import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "../../components/quiz/Quiz";
import Layout from "../../components/view/Layout";
import { baseUrl } from "../../global";
import Question from "../../interfaces/Question";

export default function CssQuiz() {
	const [questions, setQuestions] = useState<Question[]>([]);

	useEffect(() => {
		axios.get(`${baseUrl}/cssQuestions`)
			.then(res => setQuestions(res.data))
	}, [])

	return (
		<Layout>
			<Quiz questions={questions}/>
		</Layout>
	)
}