<template>
	<div class="guide-modal-demo">
		<q-btn color="primary" label="모달 열기" @click="show = true" />
		<q-dialog v-model="show">
			<q-card style="min-width: 300px">
				<q-card-section>
					<div class="text-h6">샘플 모달</div>
					<div>이것은 Quasar QDialog를 활용한 모달 예제입니다.</div>
				</q-card-section>
				<q-card-actions align="right">
					<q-btn flat label="닫기" color="primary" v-close-popup />
				</q-card-actions>
			</q-card>
		</q-dialog>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<style scoped lang="scss">

</style>
