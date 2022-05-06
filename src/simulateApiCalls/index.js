// import axios from 'axios'

import clients from '../cache/clients.json'
import supplyPoints from '../cache/supply-points.json'

export const getAllUsers = () => {
	return clients
}

export const getUserByCups = cups => {
	return clients.find(client => client.cups === cups)
}

export const getAllSupplyPoints = () => {
	return supplyPoints
}
