import Link from "next/link";
import css from "../../styles/Header.module.css";
import { BrainIcon } from "../view/Icons";

export default function Header() {
	return (
		<header className={css.header}>
			<Link href={'/'} className={css.logo}>
				Quiz <i className="v-middle">{BrainIcon}</i>
			</Link>
		</header>
	)
}