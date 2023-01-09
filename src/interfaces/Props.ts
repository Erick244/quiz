import { ReactElement } from 'react';
import { ReactNode } from 'react';
import Question from "./Question";

export interface CategoryProps {
	icon: ReactNode;
	title: string;
	bgColor: string;
	routerPath: string;
}

export interface AlternativeProps {
	alternative: string;
	currectAlternative: string;
	click: () => void;
	alreadyClicked: boolean;
}

export interface InfoBarProps {
	stopTimer: boolean;
}

export interface QuizProps {
	questions: Question[];
}

export interface MainProps {
	children: ReactElement;
}

export interface LayoutProps {
	children: any ;
}