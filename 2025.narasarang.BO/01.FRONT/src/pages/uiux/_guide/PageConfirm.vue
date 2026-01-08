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
			<div class="result-wrap">
				<h3 class="result-tit">완료되었습니다.</h3>
				<div class="btn-actions">
					<q-btn class="custom-btn size-lg width-fixed" label="홈으로" />
				</div>
			</div>
		</div>
		<!-- //서브컨텐츠 -->
	</q-page>
</template>

<script setup>
import { ref } from 'vue'
import SubHeaderSection from 'src/layouts/uiux/common/SubHeaderSection.vue'

// Breadcrumb(마지막 요소명이 서브상단 타이틀명과 같으면 생략)
const breadcrumbItems = ref([
	{
		menuName: 'Guide',
		menuLink: '/',
	},
	// {
	//   menuName: 'Calandar',
	//   menuLink: '/',
	// },
])

// 서브상단 타이틀
const pageTitle = ref('Confirm')
const pageDescription = ref('설명글 입니다.')
</script>
