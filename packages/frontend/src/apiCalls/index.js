import axios from 'axios'

export const getAllUsers = async () => {
	const clients = await axios.get('http://localhost:3000/clients')
	console.log(clients)
	return clients
}

// export const getUserByCups = cups => {
// 	return clients.find(client => client.cups === cups)
// }

// export const getAllSupplyPoints = () => {
// 	return supplyPoints
// }

// export const getOneCups = cups => {
// 	return supplyPoints.find(cupsItem => cupsItem.cups === cups)
// }
