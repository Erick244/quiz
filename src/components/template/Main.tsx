import { ReactElement } from "react";
import css from "../../styles/Main.module.css";

interface MainProps {
	children: ReactElement;
}

export default function Main(props: MainProps) {
	return (
		<main className={css.main}>
			{props.children}
		</main>
	)
}