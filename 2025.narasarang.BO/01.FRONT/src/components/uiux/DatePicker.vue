<template>
	<q-input
		class="custom-input col"
		label="날짜입력"
		v-model="model"
		mask="####-##-##"
		hide-bottom-space
	>
		<template v-slot:append>
			<q-icon
				class="cursor-pointer"
				name="event"
				tabindex="0"
				aria-hidden="false"
				aria-label="달력선택"
			>
				<q-popup-proxy ref="datePicker" cover transition-show="scale" transition-hide="scale">
					<q-date
						ref="calendar"
						v-model="model"
						:locale="koLocale"
						@update:model-value="checkSelected"
						mask="YYYY-MM-DD"
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
let datePicker = ref('')

const model = defineModel()

// const checkSelected = (_, reason, __) => {
const checkSelected = (_, reason) => {
	if (reason === 'add-day') {
		datePicker.value.hide()
	}
}
</script>
