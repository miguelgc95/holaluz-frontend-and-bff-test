<template>
	<div>
		<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<base-card>
			<div v-if="isLoading">
				<base-spinner></base-spinner>
			</div>
			<div v-else-if="cupsHasBeenFound">
				<h2>{{ user.full_name }}</h2>
				<h2>{{ user.cups }}</h2>
			</div>
			<div v-else>
				<h2>No matching CUPS found</h2>
			</div>
		</base-card>
	</div>
</template>

<script>
import { getUserByCups } from '../simulateApiCalls'

import BaseCard from '@/components/ui/BaseCard.vue'
export default {
	data() {
		return {
			isLoading: false,
			error: null,
			user: {},
			cups: {},
		}
	},
	components: { BaseCard },
	computed: {
		cupsHasBeenFound() {
			return !this.isLoading && this.user?.cups
		},
	},
	methods: {
		async requestUserByCups() {
			this.isLoading = true
			try {
				this.user = getUserByCups(this.$route.params.cups)
			} catch (error) {
				this.error = error.message || 'Something went wrong!'
			}
			this.isLoading = false
		},
		handleError() {
			this.error = null
		},
	},

	created() {
		if (this.$store.getters['users'].length > 0) {
			const user = this.$store.getters['users'].find(user => user.cups === this.$route.params.cups)
			if (user) {
				this.user = user
			} else {
				this.error = 'CUPS not found'
			}
		} else {
			this.requestUserByCups()
		}
	},
}
</script>
