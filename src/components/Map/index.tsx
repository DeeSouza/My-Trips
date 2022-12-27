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

type MapProps = {
	places?: Place[]
}

const Map = ({ places }: MapProps) => (
	<MapContainer
		style={{
			height: '100%',
			width: '100%'
		}}
		center={[0, 0]}
		zoom={3}
	>
		<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>

		{places?.map(({ id, name, slug, location: { latitude, longitude } }) => (
			<Marker
				key={`place-${id}`}
				position={[latitude, longitude]}
				title={name}
			/>
		))}
	</MapContainer>
)

export default Map
