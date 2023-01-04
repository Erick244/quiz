import css from "../../styles/Alternative.module.css";
import { useState, useEffect, ReactNode } from "react";
import { CheckIcon, CircleIcon, CloseIcon } from "../view/Icons";

interface AlternativeProps {
	alternative: string;
	currectAlternative: string;
	click: () => void;
	alreadyClicked: boolean;
}

export default function Alternative(props: AlternativeProps) {
	const [showIcon, setShowIcon] = useState<boolean>(false);
	const [alternativeIsCurrect, setAlternativeIsCurrect] = useState<boolean | null>(null);
	const [icon, setIcon] = useState<ReactNode>(CheckIcon);

	function validateAlternative() {
		if (props.alternative === props.currectAlternative) {
			setAlternativeIsCurrect(true);
			setIcon(CheckIcon);
		} else {
			setAlternativeIsCurrect(false);
			setIcon(CloseIcon);
		}
	}

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
					validateAlternative();
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