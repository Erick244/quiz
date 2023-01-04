import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StoreProvider from '../config/store'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider>
			<Component {...pageProps} />
		</StoreProvider>
	)
}
