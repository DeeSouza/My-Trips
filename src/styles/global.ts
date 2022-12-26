import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root {
		--highlight: #e20e8d;
		--background: #030518;
		--white: #eeeeee;

		--container: 100rem;
		
		--small: 1.5rem;
		--medium: 3rem;
		--large: 5rem;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	a {
		text-decoration: none;
		color: var(--highlight);
	}

	button {
		cursor: pointer;
		background: none;
		border: none;
	}

	html, body, #__next {
		height: 100%;
		background-color: var(--background);
		color: var(--white);
	}

	p {
		font-size: 2rem;
		line-height: var(--medium);
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
`

export default GlobalStyles
