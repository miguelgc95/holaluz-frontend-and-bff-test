import SupplyPoint from '../models/supplyPointModel.js'

async function getAllSupplyPoints(request, response) {
	try {
		const allSupplyPoints = await SupplyPoint.find()
		response.status(200).json(allSupplyPoints)
	} catch (error) {
		console.log(error)
		response.json(error)
	}
}

async function getSupplyPointByCups(request, response) {
	try {
		const supplyPoint = await SupplyPoint.findOne({ cups: request.params.cups }).lean().exec()
		if (supplyPoint) return response.status(200).send(supplyPoint)
		return response.status(400).send('error')
	} catch (error) {
		console.log(error)
		response.json(error)
	}
}

export { getAllSupplyPoints, getSupplyPointByCups }
