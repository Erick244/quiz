import { toast } from "react-toastify";

export const errorMessage = (msg: string) => {
	toast(msg, {
		autoClose: 2000,
		type: "error",
		theme: "colored"
	})
}

export const infoMessage = (msg: string) => {
	toast(msg, {
		autoClose: 2000,
		type: "info",
		theme: "colored"
	})
}
