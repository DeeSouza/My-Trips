import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
	return (
		<>
			<NextSeo
				title="Minhas Viagens"
				description="Minhas viagens pelo Brasil e pelo Mundo!"
				canonical="https://my-trips-deesouza.vercel.app"
				openGraph={{
					url: 'https://my-trips-deesouza.vercel.app/',
					title: 'Minhas Viagens',
					description: 'Minhas viagens pelo Brasil e pelo Mundo!',
					images: [
						{
							url: '/icon512x512.png',
							width: 1280,
							height: 720,
							alt: 'Minhas Viagens - Ícone'
						}
					]
				}}
			/>

			<Map places={places} />
			<LinkWrapper href="/about">
				<InfoOutline size={32} aria-label="Sobre" />
			</LinkWrapper>
		</>
	)
}
