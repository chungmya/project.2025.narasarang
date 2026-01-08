<template>
	<q-page class="g-page">
		<div class="error-page-wrap">
			<div class="error-text-box">
				<h2 class="error-noti">404</h2>
				<div class="icon-error-character" aria-hidden="true"></div>
				<p class="error-page-tit">죄송합니다.<br />요청하신 페이지를 찾을 수 없습니다.</p>
				<p class="error-page-desc">
					페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.<br />입력하신 주소가 정확한지 다시
					한 번 확인해 주시기 바랍니다.
				</p>
			</div>
		</div>
	</q-page>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	document.title = 'ErrorPage'
})
</script>
