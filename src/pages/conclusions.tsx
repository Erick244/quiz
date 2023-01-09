import { CheckIcon, CloseIcon, TimeIcon } from "../components/view/Icons";
import Layout from "../components/view/Layout";
import { useStore } from "../config/store";
import css from "../styles/Conclusions.module.css";

export default function Conclusions() {
	const { annulled, hits, mistakes } = useStore();
	
	return (
		<Layout>
			<h1 className={css.title}>Conclusões do Quiz</h1>
			<hr className={css.hr} />
			<div className={css.infos}>
				<div className={css.hits}>
					<span className={css.value}>Acertos: {hits}</span>
					<i>{CheckIcon}</i>
				</div>
				<div className={css.mistakes}>
					<span className={css.value}>Erros: {mistakes}</span>
					<i>{CloseIcon}</i>
				</div>
				<div className={css.annulled}>
					<span className={css.value}>Anuladas: {annulled}</span>
					<i>{TimeIcon}</i>
				</div>
			</div>
		</Layout>
	)
}