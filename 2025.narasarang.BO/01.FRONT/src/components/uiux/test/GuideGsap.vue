<template>
	<div class="gsap-demo">
		<div ref="box" class="gsap-box">GSAP 박스</div>
		<q-btn color="primary" @click="animate">애니메이션 실행</q-btn>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const box = ref(null)
function animate() {
	gsap.to(box.value, { x: 200, rotation: 360, duration: 1, yoyo: true, repeat: 1 })
}
</script>

<style scoped lang="scss">
.gsap-demo {
	margin: 2rem auto;
	text-align: center;
	.gsap-box {
		width: 120px;
		height: 60px;
		background: $accent;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem auto;
		border-radius: 8px;
		font-size: 1.1rem;
	}
}
</style>
