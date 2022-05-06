<template>
	<div>
		<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<section>
			<cups-filter @change-filter="setFilters"></cups-filter>
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
					<user-item v-for="user in users" :key="user.cups" :cups="user.cups" :full_name="user.full_name"></user-item>
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
			cupInputFilter: '',
		}
	},
	computed: {
		users() {
			return this.$store.getters['users']
		},
		filteredUsers() {
			const users = this.$store.getters['users']
			return users.filter(coach => {
				if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
					return true
				}
				if (this.activeFilters.backend && coach.areas.includes('backend')) {
					return true
				}
				if (this.activeFilters.career && coach.areas.includes('career')) {
					return true
				}
				return false
			})
		},
		thereAreUsers() {
			return !this.isLoading && this.$store.getters['users'].length > 0
		},
	},
	created() {
		this.loadUsers()
	},
	methods: {
		setInputFilter(updatedFilters) {
			this.activeFilters = updatedFilters
		},
		async loadUsers(refresh = false) {
			this.isLoading = true
			try {
				console.log('ee')
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
