import { ReactElement } from "react";
import Header from "../template/Header";
import Main from "../template/Main";
import css from "../../styles/Layout.module.css";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
	children: any ;
}


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