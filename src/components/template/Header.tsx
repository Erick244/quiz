import Link from "next/link";
import { BrainIcon, MoonIcon, SunIcon } from "../view/Icons";
import css from "../../styles/Header.module.css";
import useTheme from "../../hooks/useTheme";

export default function Header() {
	const {alternateTheme, translateX} = useTheme();

	return (
		<header className={css.header}>
			<Link href={'/'} className={css.logo}>
				Quiz <i className="v-middle">{BrainIcon}</i>
			</Link>
			<button className={css.themeButton} onClick={alternateTheme}>
				<i>{SunIcon}</i>
				<span style={{ transform: translateX }}></span>
				<i>{MoonIcon}</i>
			</button>
		</header>
	)
}