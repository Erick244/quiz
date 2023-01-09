import { useEffect } from "react";
import { CircleIcon } from "../view/Icons";
import { AlternativeProps } from "../../interfaces/Props";
import useQuiz from "../../hooks/useQuiz";
import css from "../../styles/Alternative.module.css";

export default function Alternative(props: AlternativeProps) {

	const { 
		setAlternativeIsCurrect,
		setShowIcon,
		alternativeIsCurrect,
		validateAlternative,
		showIcon,
		icon
	} = useQuiz();
	
	useEffect(() => {
		setAlternativeIsCurrect(null);
		setShowIcon(false);
	}, [props.alternative])

	return (
		<div
			className={`
				${css.alternative} 
				${alternativeIsCurrect ? css.currect : ''}
				${!alternativeIsCurrect && alternativeIsCurrect != null ? css.err : ''}
			`}
			onClick={() => {
				props.click?.();
				if (!props.alreadyClicked) {
					setShowIcon(true);
					validateAlternative(props.alternative, props.currectAlternative);
				}
			}}
		>
			{showIcon ? (
				<i className={`
					${alternativeIsCurrect ? css.currect : ''}
					${!alternativeIsCurrect && alternativeIsCurrect != null ? css.err : ''}
				`}>{icon}</i>
			) : (
				<i>
					{CircleIcon}
				</i>
			)}
			<span className={css.alternativeText}>{props.alternative}</span>
		</div>
	)
}