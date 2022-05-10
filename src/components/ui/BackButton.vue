<template>
	<button class="custom-btn" @click="goBack">
		<BootstrapIcon icon="arrow-left-circle" size="2x" flip-v />
	</button>
</template>

<script>
export default {
	methods: {
		goBack() {
			this.$router.push('/')
		},
	},
}
</script>

<style scoped>
.custom-btn {
	background-color: transparent;
	border: none;
	position: absolute;
	left: 30px;
}

.custom-btn:hover {
	cursor: pointer;
	transform: scale(1.1);
}
</style>
