import mongoose from 'mongoose'

const SupplyPointSchema = new mongoose.Schema({
	cups: {
		require: true,
		type: String,
	},
	tariff: {
		require: true,
		type: String,
	},
	invoiced_amount: {
		require: true,
		type: String,
	},
	power: {
		require: true,
		type: {},
	},
	neighbors: [
		{
			require: true,
			type: String,
		},
	],
})

export default mongoose.model('SupplyPoint', SupplyPointSchema)
