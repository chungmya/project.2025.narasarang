<template>
	<q-pagination
		class="custom-pagination"
		gutter="8px"
		v-model="pagination"
		:max="100"
		:max-pages="$q.screen.lt.md ? 7 : 10"
		direction-links
	/>
</template>

<script setup>
import { ref } from 'vue'
const pagination = ref(2)
</script>
