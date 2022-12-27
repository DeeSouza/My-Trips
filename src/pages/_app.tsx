import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

import GlobalStyles from 'styles/global'
import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#06092B" />
				<link rel="manifest" href="/manifest.json" />
			</Head>

			<DefaultSeo {...SEO} />
			<NextProgress
				color="#29D"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default App
