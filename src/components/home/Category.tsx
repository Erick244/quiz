import { ReactNode } from "react";
import { useRouter } from "next/router";
import css from "../../styles/Category.module.css";
import { useStore } from "../../config/store";

interface CategoryProps {
	icon: ReactNode;
	title: string;
	bgColor: string;
	routerPath: string;
}

export default function Category(props: CategoryProps) {
	const router = useRouter();
	const { resetStore } = useStore();

	return (
		<div className={css.category} style={{
			background: `linear-gradient(to right, ${props.bgColor}, transparent)`
		}} onClick={() => {
			resetStore();
			router.push(props.routerPath);
		}}>
			<h1>{props.title}</h1>
			<i style={{color: props.bgColor}}>{props.icon}</i>
		</div>
	)
}