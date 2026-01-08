<template>
	<q-page class="q-pa-md">
		<h1>퍼블리싱 가이드 홈</h1>
		<p>이곳은 공통 UI 컴포넌트 및 퍼블리싱 가이드 예제 페이지입니다.</p>
		<section>
			<h2>1. 공통 버튼</h2>
			<CommonButton>기본 버튼</CommonButton>
		</section>
		<section>
			<h2>2. Swiper 샘플</h2>
			<GuideSwiper />
		</section>
		<section>
			<h2>3. GSAP 애니메이션</h2>
			<GuideGsap />
		</section>
		<section>
			<h2>4. 모달 샘플</h2>
			<GuideModal />
		</section>
		<section>
			<h2>5. 날짜 입력(Date Picker)</h2>
			<GuideDateInput v-model="dateValue" />
		</section>
	</q-page>
</template>

<script setup>
import { ref } from 'vue'
import CommonButton from 'components/uiux/test/CommonButton.vue'
import GuideSwiper from 'components/uiux/test/GuideSwiper.vue'
import GuideGsap from 'components/uiux/test/GuideGsap.vue'
import GuideModal from 'components/uiux/test/GuideModal.vue'
import GuideDateInput from 'components/uiux/test/GuideDateInput.vue'

// 오늘 날짜를 YYYY-MM-DD 형식으로 생성
const today = new Date()
const yyyy = today.getFullYear()
const mm = String(today.getMonth() + 1).padStart(2, '0')
const dd = String(today.getDate()).padStart(2, '0')
const todayStr = `${yyyy}-${mm}-${dd}`
const dateValue = ref(todayStr)
</script>

<style scoped lang="scss">
h1 {
	font-size: 2rem;
	margin-bottom: 1rem;
}
section {
	margin-bottom: 2.5rem;
}
</style>
