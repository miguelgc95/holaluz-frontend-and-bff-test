<template>
	<base-card>
		<h2>Find client by CUPS</h2>
		<input type="number" v-model="filter" @keyup="setFilter" />
	</base-card>
</template>

<script>
export default {
	emits: ['set-filter'],
	data() {
		return {
			filter: null,
			activeFilter: null,
		}
	},
	methods: {
		setFilter(event) {
			if (this.timer) {
				clearTimeout(this.timer)
				this.timer = null
			}
			this.timer = setTimeout(() => {
				this.$emit('set-filter', event.target.value)
			}, 1000)
		},
	},
	watch: {
		activeFilter() {},
	},
}
</script>
