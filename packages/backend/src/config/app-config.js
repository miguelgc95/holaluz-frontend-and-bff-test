import dotenv from 'dotenv'
dotenv.config()

const { NODE_ENV = 'development', MONGO_DB_URL_PRODUCTION, MONGO_DB_URL_DEVELOPMENT, PORT } = process.env

const baseConfig = {
	app: {
		port: PORT || 3000,
	},
	client: {
		url: process.env.CLIENT_URL || 'http://localhost:8080',
	},
}

export const config = {
	development: {
		...baseConfig,
		db: {
			url: MONGO_DB_URL_DEVELOPMENT,
		},
	},
	production: {
		...baseConfig,
		db: {
			url: MONGO_DB_URL_PRODUCTION,
		},
	},
}

export default config[NODE_ENV]
