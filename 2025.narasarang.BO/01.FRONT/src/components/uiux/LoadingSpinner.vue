<template>
	<!-- loader -->
	<div class="loading-wrap" v-show="show">
		<q-circular-progress indeterminate rounded size="50px" color="primary" />
	</div>
	<!-- //loader -->
</template>

<script setup>
// Props
defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})
</script>
