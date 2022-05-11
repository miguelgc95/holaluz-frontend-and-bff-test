import mongoose from 'mongoose'

const SupplyPointSchema = new mongoose.Schema({
	cups: {
		require: true,
		type: Number,
	},
	tariff: [
		{
			require: true,
			type: String,
		},
	],
	invoiced_amount: [
		{
			require: true,
			type: Number,
		},
	],
	power: [
		{
			require: true,
			type: {},
		},
	],
	neighbors: [
		{
			require: true,
			type: [Number],
		},
	],
})

export default mongoose.model('SupplyPoint', SupplyPointSchema)
