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
				title="My Trips"
				description="Minhas viagens pelo Brasil e pelo Mundo!"
				canonical=""
				openGraph={{
					url: '',
					title: 'My Trips',
					description: 'Minhas viagens pelo Brasil e pelo Mundo!',
					images: [
						{
							url: '',
							width: 1280,
							height: 720,
							alt: 'My Trip'
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
