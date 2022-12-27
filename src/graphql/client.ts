import { GraphQLClient } from 'graphql-request'

const { GRAPHQL_TOKEN, GRAPHQL_HOST } = process.env
const endpoint = GRAPHQL_HOST || ''

const client = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${GRAPHQL_TOKEN}`
	}
})
