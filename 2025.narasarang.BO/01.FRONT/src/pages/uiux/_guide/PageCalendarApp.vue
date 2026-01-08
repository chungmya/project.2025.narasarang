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
			<CalendarApp v-if="$q.screen.gt.sm" :events="events" />
			<CalendarApp_Mobile v-else :events="events" />
		</div>
		<!-- //서브컨텐츠 -->
	</q-page>
</template>

<script setup>
import { ref } from 'vue'
import SubHeaderSection from 'src/layouts/uiux/common/SubHeaderSection.vue'
import CalendarApp from 'src/components/uiux/CalendarApp.vue'
import CalendarApp_Mobile from 'src/components/uiux/CalendarApp_Mobile.vue'

// Breadcrumb(마지막 요소명이 서브상단 타이틀명과 같으면 생략)
const breadcrumbItems = ref([
	{
		menuName: 'Guide',
		menuLink: '/',
	},
])

// 서브상단 타이틀
const pageTitle = ref('Calandar')
const pageDescription = ref('일정 별 세부 정보를 볼 수 있습니다.')

// 이벤트 데이터
const events = ref([
	{
		id: 1,
		type: 'type01',
		title: 'title01',
		start: '2025-07-01',
		end: '2025-07-17',
		details: [
			{ label: '구분', value: '구분value' },
			{ label: '설명', value: '설명value' },
			{ label: '기간', value: '2025.12.01~2025.12.31' },
		],
	},
	{
		id: 2,
		type: 'type02',
		title: 'title02',
		start: '2025-08-28',
		end: '2025-09-15',
		details: [
			{ label: '구분', value: '구분value' },
			{ label: '설명', value: '설명value' },
			{ label: '기간', value: '2025.12.01~2025.12.31' },
		],
	},
	{
		id: 3,
		type: 'type03',
		title: 'title03',
		start: '2025-08-12',
		end: '2025-08-15',
		details: [
			{ label: '구분', value: '구분value' },
			{ label: '설명', value: '설명value' },
			{ label: '기간', value: '2025.12.01~2025.12.31' },
		],
	},
	{
		id: 4,
		type: 'type04',
		title: 'title04',
		start: '2025-08-08',
		end: '2025-08-16',
		details: [
			{ label: '구분', value: '구분value' },
			{ label: '설명', value: '설명value' },
			{ label: '기간', value: '2025.12.01~2025.12.31' },
		],
	},
	{
		id: 5,
		type: 'type05',
		title: 'title05',
		start: '2025-06-01',
		end: '2025-07-19',
		details: [
			{ label: '구분', value: '구분value' },
			{ label: '설명', value: '설명value' },
			{ label: '기간', value: '2025.12.01~2025.12.31' },
		],
	},
])
</script>
