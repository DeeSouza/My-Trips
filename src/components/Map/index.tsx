import { useRouter } from 'next/router'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

type Place = {
	id: string
	name: string
	slug: string
	location: {
		latitude: number
		longitude: number
	}
}

export type MapProps = {
	places?: Place[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
	return MAPBOX_API_KEY ? (
		<TileLayer
			attribution='&copy; <a href="https://apps.mapbox.com/feedback">Mapbox</a> contributors'
			url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
		/>
	) : (
		<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
	)
}

const Map = ({ places }: MapProps) => {
	const router = useRouter()

	return (
		<MapContainer
			style={{
				height: '100%',
				width: '100%'
			}}
			center={[0, 0]}
			zoom={3}
		>
			<CustomTileLayer />

			{places?.map(
				({ id, name, slug, location: { latitude, longitude } }) => (
					<Marker
						key={`place-${id}`}
						position={[latitude, longitude]}
						title={name}
						eventHandlers={{
							click: () => router.push(`/places/${slug}`)
						}}
					/>
				)
			)}
		</MapContainer>
	)
}

export default Map
