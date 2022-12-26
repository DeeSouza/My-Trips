import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>My Trips</title>
				<meta
					name="description"
					content="Minhas viagens pelo Brasil e pelo Mundo!"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#06092B" />
				<link rel="manifest" href="/manifest.json" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
					integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
					crossOrigin=""
				/>
			</Head>

			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default App
