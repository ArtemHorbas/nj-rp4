import '../styles/globals.css';
import '../styles/app.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
