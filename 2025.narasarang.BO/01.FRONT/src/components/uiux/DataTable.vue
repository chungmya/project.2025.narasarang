<template>
	<div class="data-table" ref="dataTable" :tabindex="showIndicator ? 0 : -1">
		<slot></slot>
		<div class="scroll-indicator" v-if="showIndicator"></div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dataTable = ref(null)
const showIndicator = ref(false)

const checkScrollable = () => {
	showIndicator.value = dataTable.value.scrollWidth > dataTable.value.clientWidth
}

const hideIndicator = () => {
	showIndicator.value = false
}

const handleScroll = () => {
	hideIndicator()
}

const handleResize = () => {
	checkScrollable()
}

onMounted(() => {
	checkScrollable()
	if (dataTable.value) {
		dataTable.value.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', handleResize)
	}
})

onUnmounted(() => {
	if (dataTable.value) {
		dataTable.value.removeEventListener('scroll', handleScroll)
	}
	window.removeEventListener('resize', handleResize)
})
</script>
