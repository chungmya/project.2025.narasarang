<template>
	<!-- Breadcrumb -->
	<div class="inner-center">
		<q-breadcrumbs class="custom-breadcrumbs" gutter="none">
			<template v-slot:separator>
				<q-icon class="q-icon-right" />
			</template>

			<q-breadcrumbs-el class="icon-home" aria-label="홈" to="/" />
			<q-breadcrumbs-el
				v-for="(item, index) in props.breadcrumbItems"
				:key="index"
				:label="item.menuName"
				:to="item.menuLink"
			/>
		</q-breadcrumbs>
	</div>
	<!-- //Breadcrumb -->

	<!-- SubPageHeader -->
	<div class="subpage-head">
		<div class="inner-center">
			<div class="inner-top-box"></div>
			<h2 class="page-title">{{ pageTitle }}</h2>
			<p class="page-description" v-if="showDesc" v-html="pageDescription"></p>
		</div>
	</div>
	<!-- //SubPageHeader -->
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
	breadcrumbItems: {
		type: Array,
	},
	pageTitle: {
		type: String,
		required: true,
	},
	pageDescription: {
		type: String,
	},
})

const showDesc = ref(true)
if (!props.pageDescription || props.pageDescription.trim() === '') {
	showDesc.value = !showDesc.value
}
</script>
