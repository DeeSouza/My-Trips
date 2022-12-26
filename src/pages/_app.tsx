import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>My Travels</title>
				<meta
					name="description"
					content="Minhas viagens pelo Brasil e pelo mundo"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default App
