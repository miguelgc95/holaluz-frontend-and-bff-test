<template>
	<div>
		<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<section>
			<cups-filter @set-filter="setFilteredUsers"></cups-filter>
		</section>
		<section>
			<base-card>
				<div class="controls">
					<base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
				</div>
				<div v-if="isLoading">
					<base-spinner></base-spinner>
				</div>
				<ul v-else-if="thereAreUsers">
					<div v-if="this.filter === ''">
						<user-item v-for="user in users" :key="user.cups" :cups="user.cups" :full_name="user.full_name"></user-item>
					</div>
					<div v-else>
						<user-item v-for="user in filteredUsers" :key="user.cups" :cups="user.cups" :full_name="user.full_name"></user-item>
					</div>
				</ul>
				<h3 v-else>No users found.</h3>
			</base-card>
		</section>
	</div>
</template>

<script>
import UserItem from '../components/UserItem.vue'
import CupsFilter from '../components/CupsFilter.vue'

export default {
	components: {
		UserItem,
		CupsFilter,
	},
	data() {
		return {
			isLoading: false,
			error: null,
			filter: '',
			filteredUsers: this.$store.getters['users'],
		}
	},
	computed: {
		users() {
			return this.$store.getters['users']
		},
		thereAreUsers() {
			return !this.isLoading && this.$store.getters['users'].length > 0
		},
	},
	created() {
		this.loadUsers()
	},
	methods: {
		setFilteredUsers(cups) {
			this.filter = cups
			this.filteredUsers = this.$store.getters['users'].filter(user => user.cups.includes(cups))
		},
		setInputFilter(updatedFilters) {
			this.activeFilters = updatedFilters
		},
		async loadUsers(refresh = false) {
			this.isLoading = true
			try {
				await this.$store.dispatch('loadUsers', {
					forceRefresh: refresh,
				})
			} catch (error) {
				this.error = error.message || 'Something went wrong!'
			}
			this.isLoading = false
		},
		handleError() {
			this.error = null
		},
	},
}
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.controls {
	display: flex;
	justify-content: space-between;
}
</style>
