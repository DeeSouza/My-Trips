import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

export type ImageProps = {
	url: string
	width: number
	height: number
}

export type PlacesTemplateProps = {
	place: {
		slug: string
		name: string
		description: {
			html: string
			text: string
		}
		gallery: ImageProps[]
	}
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
	const router = useRouter()

	if (router.isFallback) {
		return null
	}

	return (
		<>
			<LinkWrapper href="/">
				<CloseOutline size={32} aria-label="Voltar para o mapa" />
			</LinkWrapper>

			<NextSeo
				title={`${place.name} - Minhas Viagens`}
				description={place.description?.text}
				canonical="https://my-trips-deesouza.vercel.app"
				openGraph={{
					url: '',
					title: `${place.name} - Minhas Viagens`,
					description: place.description?.text,
					images: [
						{
							url: place.gallery[0].url,
							width: place.gallery[0].width,
							height: place.gallery[0].height,
							alt: place.name
						}
					]
				}}
			/>

			<S.Wrapper>
				<S.Container>
					<S.Heading>{place.name}</S.Heading>
					<S.Body
						dangerouslySetInnerHTML={{
							__html: place.description?.html
						}}
					></S.Body>

					<S.Gallery>
						{place.gallery.map((image, index) => (
							<Image
								key={`photo-${index}`}
								src={image.url}
								alt={place.name}
								width={1000}
								height={600}
								quality={75}
							/>
						))}
					</S.Gallery>
				</S.Container>
			</S.Wrapper>
		</>
	)
}
