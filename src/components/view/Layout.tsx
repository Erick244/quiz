import Header from "../template/Header";
import Main from "../template/Main";
import { LayoutProps } from "../../interfaces/Props";
import css from "../../styles/Layout.module.css";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Layout(props: LayoutProps) {
	return (
		<div className={css.layout}>
			<ToastContainer/>
			<Header/>
			<Main>
				{props.children}
			</Main>
		</div>
	)
}