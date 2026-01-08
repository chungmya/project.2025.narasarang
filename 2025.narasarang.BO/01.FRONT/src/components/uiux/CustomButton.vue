<template>
	<q-btn :class="'common-btn ' + className" :label="label" />
</template>

<script setup>
defineProps({
	type: {
		type: String,
		default: "button",
	},
	label: {
		type: String,
		default: "",
	},
	className: {
		type: String,
		default: "",
	},
})
</script>

<style scoped lang="scss"></style>
