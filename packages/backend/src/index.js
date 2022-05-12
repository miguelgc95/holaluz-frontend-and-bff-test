import app from './server.js'
import config from './config/index.js'
import connect from './db/index.js'

if (!config.app.port) {
	throw new Error('App config is invalid')
}

connect().then(() => {
	app.listen(config.app.port, () => {
		console.log(`SERVER LISTENING ON PORT ${config.app.port} :)`)
	})
})
