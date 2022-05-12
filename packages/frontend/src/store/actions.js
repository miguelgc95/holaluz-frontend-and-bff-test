import { getAllUsers } from '../apiCalls'

export default {
	loadUsers(context) {
		const users = getAllUsers()
		context.commit('loadUsers', users)
	},
}
