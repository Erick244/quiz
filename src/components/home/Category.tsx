import { CategoryProps } from "../../interfaces/Props";
import { useRouter } from "next/router";
import { useStore } from "../../config/store";
import css from "../../styles/Category.module.css";
import { useState } from "react";

export default function Category(props: CategoryProps) {
	const router = useRouter();
	const { resetStore } = useStore();

	const [applyShadow, setApplyShadow] = useState<boolean>(false);
	const shadow = `drop-shadow(16px 16px 20px ${props.bgColor}80)`;

	return (
		<div
			id="category"
			className={css.category} 
			style={{
				background: `linear-gradient(to right, ${props.bgColor}, transparent)`,
				filter: `${applyShadow ? shadow : "none"}`
			}}
			onClick={() => {
				resetStore();
				router.push(props.routerPath);
			}}
			onMouseOver={() => setApplyShadow(true)}
			onMouseOut={() => setApplyShadow(false)}
		>
			<h1>{props.title}</h1>
			<i style={{color: props.bgColor}}>{props.icon}</i>
		</div>
	)
}