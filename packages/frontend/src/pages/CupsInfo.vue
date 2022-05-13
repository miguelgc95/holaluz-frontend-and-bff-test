<template>
	<div>
		<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<back-button />
		<base-card>
			<div v-if="isLoading">
				<base-spinner></base-spinner>
			</div>
			<div v-else-if="cupsHasBeenFound">
				<div>
					<h1 v-if="canJoin">{{ user.full_name }} can join our rooftop revolution!</h1>
					<h1 v-else>{{ user.full_name }} cannot join our rooftop revolution :(</h1>
				</div>
				<div>
					<h2 v-if="this.typeOfDisscount === 'special' && canJoin">Special disccount: 12%</h2>
					<h2 v-else-if="this.typeOfDisscount === 'basic' && canJoin">Basic disccount: 5%</h2>
					<h2 v-else>No disccount avaliable</h2>
				</div>
				<base-card>
					<h2>{{ user.full_name }}</h2>
					<h3>Adress: {{ user.address }}</h3>
					<h3>Role: {{ user.role }}</h3>
					<h3>Building type: {{ user.building_type }}</h3>
				</base-card>
				<base-card>
					<h2>CUPS: {{ cups?.cups }}</h2>
					<h3>Tariff: {{ cups?.tariff }}</h3>
					<h3>Invoiced amount: {{ cups?.invoiced_amount }}</h3>
					<h3>Power: {{ cups?.power?.p1 }} {{ cups?.power?.p2 }}</h3>
					<h3>Neighbors: {{ cups?.neighbors }}</h3>
				</base-card>
			</div>
			<div v-else>
				<h2>No matching CUPS found</h2>
			</div>
		</base-card>
	</div>
</template>

<script>
import { getUserByCups, getOneCups } from '../apiCalls'
// import { getOneCups, getUserByCups } from '../simulateApiCalls'

import BaseCard from '@/components/ui/BaseCard.vue'
import BackButton from '@/components/ui/BackButton.vue'
export default {
	data() {
		return {
			isLoading: false,
			error: null,
			user: {},
			cups: {},
			typeOfDisscount: '',
		}
	},
	components: { BaseCard, BackButton },
	computed: {
		cupsHasBeenFound() {
			return !this.isLoading && this.cups
		},
		canJoin() {
			return this.user.building_type === 'house' && this.cups?.neighbors.length > 0 ? true : false
		},
	},
	methods: {
		async requestUserByCups(cups) {
			this.isLoading = true
			try {
				this.user = await getUserByCups(cups)
			} catch (error) {
				this.error = error.message || 'Something went wrong!'
			}
			this.isLoading = false
		},
		handleError() {
			this.error = null
		},
	},

	async created() {
		this.isLoading = true
		try {
			this.cups = await getOneCups(this.$route.params.cups)
		} catch (error) {
			this.error = error.message || 'Something went wrong!'
		}

		if (this.$store.getters['users'].length > 0) {
			const user = this.$store.getters['users'].find(user => user.cups === this.$route.params.cups)
			if (user) {
				this.user = user
			} else {
				this.error = 'CUPS not found'
			}
		} else {
			this.requestUserByCups(this.$route.params.cups)
		}

		let invoicedAddition = 0
		let neighborPowerIsLower = true

		for (const neighborCups of this.cups.neighbors) {
			const neighbor = await getOneCups(neighborCups)
			invoicedAddition = invoicedAddition + parseFloat(neighbor.invoiced_amount)
			neighborPowerIsLower = neighborPowerIsLower * (this.cups.power?.p1 > neighbor.power?.p1 && this.cups.power.p1 > neighbor.power.p1)
		}

		if (invoicedAddition > 100) {
			this.typeOfDisscount = 'special'
		} else if (neighborPowerIsLower) {
			console.log('ee')
			this.typeOfDisscount = 'basic'
		} else {
			this.typeOfDisscount = 'standard'
		}

		this.isLoading = false
	},
}
</script>
