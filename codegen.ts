import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema:
		'https://ca-central-1.cdn.hygraph.com/content/clc6922yz160e01t62s7c8idq/master',
	documents: 'src/graphql/queries.ts',
	generates: {
		'src/graphql/generated/': {
			preset: 'client',
			plugins: [
				{
					add: {
						content: '/* eslint-disabled */'
					}
				}
			]
		}
	}
}

export default config
