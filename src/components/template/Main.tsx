import { MainProps } from "../../interfaces/Props";
import css from "../../styles/Main.module.css";

export default function Main(props: MainProps) {
	return (
		<main className={css.main}>
			{props.children}
		</main>
	)
}