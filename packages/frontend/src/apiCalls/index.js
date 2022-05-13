import axios from 'axios'

export const getAllUsers = async () => {
	try {
		const clients = await axios.get('http://localhost:3000/clients')
		return clients.data
	} catch (error) {
		console.log(error)
	}
}

export const getUserByCups = async cups => {
	try {
		const client = await axios.get(`http://localhost:3000/clients/${cups}`)
		return client.data
	} catch (error) {
		console.log(error)
	}
}

// export const getAllSupplyPoints = () => {
// 	return supplyPoints
// }

export const getOneCups = async cups => {
	try {
		const supplyPoint = await axios.get(`http://localhost:3000/supply-points/${cups}`)
		return supplyPoint.data
	} catch (error) {
		console.log(error)
	}
}
