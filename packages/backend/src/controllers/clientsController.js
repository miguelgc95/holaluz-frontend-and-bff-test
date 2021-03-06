import Client from '../models/clientModel.js'

async function getAllClients(request, response) {
	try {
		const allClients = await Client.find()
		response.status(200).json(allClients)
	} catch (error) {
		console.log(error)
		response.json(error)
	}
}

async function getClientByCups(request, response) {
	try {
		const client = await Client.findOne({ tariff: 'One price' }).lean().exec()
		if (client) return response.status(200).send(client)
		return response.status(400).send('error')
	} catch (error) {
		console.log(error)
		response.json(error)
	}
}

export { getAllClients, getClientByCups }
