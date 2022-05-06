import clients from '../cache/clients.json'

export default {
	// readUsersFronJSON() {
	loadUsers(context) {
		context.commit('loadUsers', clients)
	},
}
