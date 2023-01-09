import bgDarkImage from "../assets/imgs/background-dark.jpg";
import bgLightImage from "../assets/imgs/background-light.jpg";
import { useStore } from "../config/store";

export default function useTheme() {
	const { theme, setTheme } = useStore();
	const translateX = theme === "dark" ? `translateX(calc(100% - 10px))` : `translateX(0px)`;
	
	function alternateTheme() {
		if (theme === "dark") {
			setTheme("light");
			document.documentElement.style.setProperty('--main-color', '#7488f9');
			document.documentElement.style.setProperty('--color1', '#63689c');
			document.documentElement.style.setProperty('--color2', '#bdbdbd');
			document.documentElement.style.setProperty('--bg-color', '#0077ff');
			document.documentElement.style.setProperty('--header-bg-color', '#7488f952');
			document.documentElement.style.setProperty('--hr-gradient', 'linear-gradient(to right, #7488f980, #4963f1, #7488f980)');
			document.documentElement.style.setProperty('--bg-image', `url(${bgLightImage.src}) center center #000 no-repeat`);
		} else {
			setTheme("dark");
			document.documentElement.style.setProperty('--main-color', '#282d49');
			document.documentElement.style.setProperty('--color1', '#3b3f5a');
			document.documentElement.style.setProperty('--color2', '#565980');
			document.documentElement.style.setProperty('--bg-color', '#5747b7');
			document.documentElement.style.setProperty('--header-bg-color', '#ffffff52');
			document.documentElement.style.setProperty('--hr-gradient', 'linear-gradient(to right, #2e345380, #32395a, #2e345380)');
			document.documentElement.style.setProperty('--bg-image', `url(${bgDarkImage.src}) center center #000 no-repeat`);
		}
	}

	return {
		alternateTheme,
		translateX
	}
}