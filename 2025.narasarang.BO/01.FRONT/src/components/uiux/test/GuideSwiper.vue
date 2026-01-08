<template>
	<div class="guide-swiper">
		<swiper
			:modules="[Pagination, Navigation]"
			:slides-per-view="1"
			:pagination="{ clickable: true }"
			:navigation="true"
		>
			<swiper-slide v-for="n in 3" :key="n">
				<div class="slide-content">슬라이드 {{ n }}</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
</script>

<style scoped lang="scss">
.guide-swiper {
	max-width: 400px;
	margin: 2rem auto;
	.slide-content {
		background: #f5f5f5;
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
		font-size: 1.2rem;
	}
}
</style>
