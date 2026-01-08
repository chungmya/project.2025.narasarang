<template>
	<q-page class="g-page">
		<!-- 서브상단 -->
		<SubHeaderSection
			:breadcrumbItems="breadcrumbItems"
			:pageTitle="pageTitle"
			:pageDescription="pageDescription"
		></SubHeaderSection>
		<!-- //서브상단 -->

		<!-- 서브컨텐츠 -->
		<div class="g-content">
			<h3 class="subtit-md">템플릿</h3>
		</div>
		<!-- //서브컨텐츠 -->
	</q-page>

	<!-- loader -->
	<LoadingSpinner :show="isLoad" />
	<!-- //loader -->
</template>

<script setup>
import { ref } from 'vue'
import SubHeaderSection from 'src/layouts/uiux/common/SubHeaderSection.vue'
import LoadingSpinner from 'src/components/uiux/LoadingSpinner.vue'

// Breadcrumb(마지막 요소명이 서브상단 타이틀명과 같으면 생략)
const breadcrumbItems = ref([
	{
		menuName: 'Guide',
		menuLink: '/',
	},
])

// 서브상단 타이틀
const pageTitle = ref('Loading')
const pageDescription = ref('설명글 입니다.')

// Loader
const isLoad = ref(true)
</script>
