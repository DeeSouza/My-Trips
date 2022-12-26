import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
	it('should render without any marker', () => {
		render(<Map />)

		expect(
			screen.getByRole('link', {
				name: /a javascript library for interactive maps/i
			})
		).toBeInTheDocument()
	})

	it('should render with the marker in the correct place', () => {
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

		render(<Map places={places} />)

		expect(screen.getByTitle(/piracicaba/i)).toBeInTheDocument()
		expect(screen.getByTitle(/venâncio aires/i)).toBeInTheDocument()
	})
})
