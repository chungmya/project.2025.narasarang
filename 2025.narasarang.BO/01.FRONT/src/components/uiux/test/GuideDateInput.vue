<template>
	<div class="guide-date-input">
		<q-input
			filled
			v-model="date"
			label="날짜 선택"
			mask="####-##-##"
			:rules="[(val) => /^\d{4}-\d{2}-\d{2}$/.test(val) || 'YYYY-MM-DD 형식으로 입력하세요']"
			hint="YYYY-MM-DD 형식으로 직접 입력하거나, 아이콘 클릭 시 달력 팝업"
		>
			<template #append>
				<q-icon name="event" class="cursor-pointer" @click.stop="show = true" />
			</template>
		</q-input>
		<q-dialog v-model="show">
			<q-date
				v-model="date"
				@update:model-value="show = false"
				mask="YYYY-MM-DD"
				:options="() => true"
				:locale="koreanLocale"
				today-btn
			>
				<template #title="{ modelValue }">
					<div class="q-date__header-title q-date__header-title--custom">
						{{ getKoreanHeader(modelValue) }}
					</div>
				</template>
			</q-date>
		</q-dialog>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	modelValue: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])

const date = ref(props.modelValue)
const show = ref(false)

watch(
	() => props.modelValue,
	(val) => {
		if (val !== date.value) date.value = val
	},
)
watch(date, (val) => {
	emit('update:modelValue', val)
})

const koreanLocale = {
	days: '일,월,화,수,목,금,토'.split(','),
	daysShort: '일,월,화,수,목,금,토'.split(','),
	months: '1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월'.split(','),
	monthsShort: '1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월'.split(','),
	firstDayOfWeek: 0,
	format24h: true,
	pluralDay: '일',
}

function getKoreanHeader(val) {
	let d
	if (!val) {
		d = new Date()
	} else if (Array.isArray(val)) {
		if (val.length > 0 && typeof val[0] === 'string') {
			const [y, m, dd] = val[0].split('-')
			d = new Date(Number(y), Number(m) - 1, Number(dd))
		} else {
			d = new Date()
		}
	} else if (typeof val === 'string') {
		const [y, m, dd] = val.split('-')
		d = new Date(Number(y), Number(m) - 1, Number(dd))
	} else {
		d = new Date()
	}
	if (isNaN(d.getTime())) d = new Date()
	const week = ['일', '월', '화', '수', '목', '금', '토']
	const yoil = week[d.getDay()]
	const month = d.getMonth() + 1
	const day = d.getDate()

	console.log('day', day)
	return `${yoil}, ${month}월 ${day}일`
}
</script>

<style scoped lang="scss">
.guide-date-input {
	max-width: 300px;
	margin: 2rem auto;
}
.q-date__header-title--custom {
	font-size: 1.25rem;
	font-weight: 500;
	padding: 0.5em 0;
}
</style>
