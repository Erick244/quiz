import React, { createContext, useState, SetStateAction, Dispatch, useContext } from "react";
import bgImageDark from "../assets/imgs/background-dark.jpg";
import { StaticImageData } from "next/image";

interface StoreProps {
	hits: number;
	setHits: Dispatch<SetStateAction<number>>;
	mistakes: number;
	setMistakes: Dispatch<SetStateAction<number>>;
	annulled: number;
	setAnnulled: Dispatch<SetStateAction<number>>;
	questionsLeft: number;
	setQuestionsLeft: Dispatch<SetStateAction<number>>;
	theme: "light" | "dark";
	setTheme: Dispatch<SetStateAction<"light" | "dark">>;
	resetStore: () => void;
}

const Store = createContext<StoreProps>({
	hits: 0,
	setHits: (): number => 0,
	mistakes: 0,
	setMistakes: (): number => 0,
	annulled: 0,
	setAnnulled: (): number => 0,
	questionsLeft: 9,
	setQuestionsLeft: (): number => 9,
	theme: "dark",
	setTheme: (): "light" | "dark" => "dark",
	resetStore: () => null,
});

export default function StoreProvider({ children }: any) {
	const [hits, setHits] = useState<number>(0);
	const [mistakes, setMistakes] = useState<number>(0);
	const [annulled, setAnnulled] = useState<number>(0);
	const [questionsLeft, setQuestionsLeft] = useState<number>(9);
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	const resetStore = () => {
		setQuestionsLeft(9);
		setHits(0);
		setMistakes(0);
		setAnnulled(0);
	}

	return (
		<Store.Provider value={{
			hits,
			annulled,
			mistakes,
			questionsLeft,
			setAnnulled,
			setHits,
			setMistakes,
			setQuestionsLeft,
			theme,
			setTheme,
			resetStore
		}}>
			{children}
		</Store.Provider>
	)
}

export const useStore = () => useContext(Store);