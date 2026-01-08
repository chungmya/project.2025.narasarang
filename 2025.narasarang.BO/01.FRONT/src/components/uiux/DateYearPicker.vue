<template>
	<q-input class="custom-input col" v-model="model" mask="####" hide-bottom-space>
		<template v-slot:append>
			<q-icon
				class="cursor-pointer"
				name="event"
				tabindex="0"
				aria-hidden="false"
				aria-label="달력선택"
			>
				<q-popup-proxy ref="yearPicker" cover transition-show="scale" transition-hide="scale">
					<q-date
						ref="calendar"
						v-model="model"
						:locale="koLocale"
						emit-immediately
						years-in-month-view
						default-view="Years"
						:subtitle="model.substring(0, 4)"
						@update:model-value="checkSelected"
						class="datetype-month"
						mask="YYYY"
					>
						<div class="row items-center justify-end">
							<q-btn v-close-popup label="닫기" color="primary" flat />
						</div>
					</q-date>
				</q-popup-proxy>
			</q-icon>
		</template>
	</q-input>
</template>

<script setup>
import { ref } from 'vue'
//let date1 = ref('202401')
const model = defineModel()
let yearPicker = ref('')
let calendar = ref('')
// const checkSelected = (_, reason, __) => {
const checkSelected = (_, reason) => {
	console.log(model.value)
	if (reason === 'year') {
		yearPicker.value.hide()
	}
	// else if (reason === 'year') {
	//   calendar.value.setView('Years')
	// }
}
const koLocale = {
	days: ['일', '월', '화', '수', '목', '금', '토'],
	daysShort: ['일', '월', '화', '수', '목', '금', '토'],
	months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	monthsShort: [
		'1월',
		'2월',
		'3월',
		'4월',
		'5월',
		'6월',
		'7월',
		'8월',
		'9월',
		'10월',
		'11월',
		'12월',
	],
}
</script>

<style>
.datetype-month .q-date__header {
	height: auto;
}

.datetype-month .q-date__header-title {
	display: none !important;
}
</style>
