import { getAllUsers } from '../simulateApiCalls'

export default {
	loadUsers(context) {
		const users = getAllUsers()
		context.commit('loadUsers', users)
	},
}
