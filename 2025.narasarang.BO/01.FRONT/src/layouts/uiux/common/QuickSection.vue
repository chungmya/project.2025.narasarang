<template>
	<!-- 퀵 메뉴 (q-page-sticky) -->
	<q-page-sticky class="g-quick" position="bottom-right" :offset="getOffset()">
		<div class="quick-btngroup">
			<div>
				<q-btn to="/" class="quick-btn quick-01">이용안내</q-btn>
				<q-btn to="/" class="quick-btn quick-02">공지사항</q-btn>
				<q-btn to="/" class="quick-btn quick-03">카드안내</q-btn>
				<q-btn to="/" class="quick-btn quick-04">1:1 게시판</q-btn>
				<q-btn to="/" class="quick-btn quick-05">이벤트</q-btn>
			</div>
			<q-btn class="quick-btn go-top" aria-label="맨 위로" @click="goTop">TOP</q-btn>
		</div>
	</q-page-sticky>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMainPage = ref(false)
const width = ref(window.innerWidth)

const onResize = () => {
	width.value = window.innerWidth
}

onMounted(() => {
	// .q-layout에 .main-page 클래스가 있는지 확인
	let parent = document.querySelector('.q-layout')
	isMainPage.value = parent && parent.classList.contains('main-page')
	window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
})

const getOffset = () => {
	if (isMainPage.value) {
		// 메인: 1680 이하일 때 모바일
		return width.value <= 1680 ? [16, 80] : [20, 24]
	} else {
		// 서브: 1520 이하일 때 모바일
		return width.value <= 1520 ? [16, 80] : [20, 24]
	}
}

const goTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
