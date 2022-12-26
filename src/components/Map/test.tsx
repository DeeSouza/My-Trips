import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
	it('should render without any marker', () => {
		render(<Map />)

		expect(
			screen.getByRole('link', {
				name: /a js library for interactive maps/i
			})
		).toBeInTheDocument()
	})

	it('should render with the marker in the correct place', () => {})
})
