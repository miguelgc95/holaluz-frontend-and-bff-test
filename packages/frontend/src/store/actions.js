import { getAllUsers } from '../apiCalls'

export default {
	async loadUsers(context) {
		const users = await getAllUsers()
		context.commit('loadUsers', users)
	},
}
