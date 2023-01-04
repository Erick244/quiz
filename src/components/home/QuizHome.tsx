import { CssIcon, HtmlIcon, JsIcon } from "../view/Icons";
import Category from "./Category";

import css from "../../styles/QuizHome.module.css";

export default function QuizHome() {
	return (
		<div className={css.quizHome}>
			<h1 className={css.title}>Escolha uma Categoria</h1>
			<hr />
			<div className={css.containerCategories}>
				<Category
					bgColor="#e4a227"
					icon={JsIcon}
					title="JavaScript"
					routerPath="/quiz/js"
				/>
				<Category
					bgColor="#2449d8"
					icon={CssIcon}
					title="CSS3"
					routerPath="/quiz/css"
				/>
				<Category
					bgColor="#d84924"
					icon={HtmlIcon}
					title="HTML5"
					routerPath="/quiz/html"
				/>
			</div>
		</div>
	)
}