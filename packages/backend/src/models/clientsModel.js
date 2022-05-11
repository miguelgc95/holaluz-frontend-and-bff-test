import mongoose from 'mongoose'

const ClientSchema = new mongoose.Schema({
	full_name: {
		require: true,
		type: String,
	},
	address: [
		{
			require: true,
			type: String,
		},
	],
	cups: [
		{
			require: true,
			type: Number,
		},
	],
	role: [
		{
			require: true,
			type: String,
		},
	],
	building_type: [
		{
			require: true,
			type: String,
		},
	],
})

export default mongoose.model('Client', ClientSchema)
