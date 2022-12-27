const isProduction = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: !isProduction
})

const nextConfig = withPWA({
	reactStrictMode: true,
	images: {
		domains: ['media.graphassets.com']
	}
})

module.exports = nextConfig
