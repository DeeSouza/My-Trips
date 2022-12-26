import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
	const places = [
		{
			id: '1',
			name: 'Piracicaba',
			slug: 'piracicaba',
			location: {
				latitude: -22.725,
				longitude: -47.6476
			}
		},
		{
			id: '2',
			name: 'Venâncio Aires',
			slug: 'venancio-aires',
			location: {
				latitude: -29.606,
				longitude: -52.1944
			}
		}
	]

	return <Map places={places} />
}
