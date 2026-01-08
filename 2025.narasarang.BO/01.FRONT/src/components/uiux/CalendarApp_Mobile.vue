<template>
	<div class="sub-calendar-wrap-m">
		<!-- 네비게이션 바 -->
		<div class="sub-schedule-title" role="group">
			<button @click="onPrev" class="q-icon-left size-28 cursor-pointer">
				<span class="blind">이전 월</span>
			</button>
			<div class="title" role="heading" aria-live="polite">{{ currentMonthTitle }}</div>
			<button @click="onNext" class="q-icon-right size-28 cursor-pointer">
				<span class="blind">다음 월</span>
			</button>
		</div>

		<!-- 미니 모드 달력 -->
		<q-calendar-month ref="calendar" v-model="selectedDate" animated locale="ko" mini-mode>
			<template #day="{ scope }">
				<div
					:class="[
						'q-calendar-day',
						{ today: isToday(scope.timestamp), 'disabled-day': !isCurrentMonth(scope.timestamp) },
					]"
				>
					<span
						class="label"
						:aria-label="`${scope.timestamp.date}${isToday(scope.timestamp) ? ', 오늘' : ''}`"
						>{{ scope.timestamp ? scope.timestamp.day : '' }}</span
					>
					<div v-if="getEventsForDate(scope.timestamp.date).length > 0" class="event-icon">
						<span
							v-for="(event, index) in getEventsForDate(scope.timestamp.date)"
							:key="index"
							:class="`bg-${event.type}`"
						></span>
					</div>
				</div>
			</template>
		</q-calendar-month>

		<!-- 이벤트 리스트 -->
		<div v-if="currentMonthEvents.length > 0" class="event-list">
			<q-expansion-item
				v-for="event in currentMonthEvents"
				:key="event.id"
				:label="event.title"
				:caption="`${event.start} ~ ${event.end}`"
				:class="`bg-${event.type}`"
			>
				<div class="event-details">
					<dl v-for="(detail, detailIndex) in event.details" :key="detailIndex">
						<dt>{{ detail.label }}</dt>
						<dd>{{ detail.value }}</dd>
					</dl>
					<q-btn class="custom-btn" label="교육 신청" />
				</div>
			</q-expansion-item>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar'
import '@quasar/quasar-ui-qcalendar/dist/index.css'

const props = defineProps({
	events: { type: Array, required: true },
})

const calendar = ref(null)
const selectedDate = ref(today())

const currentMonthTitle = computed(() => {
	const date = new Date(selectedDate.value)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const paddedMonth = month < 10 ? `0${month}` : month
	return `${year}.${paddedMonth}`
})

const isCurrentMonth = (timestamp) => {
	const selected = new Date(selectedDate.value)
	const currentYear = selected.getFullYear()
	const currentMonth = selected.getMonth()
	const timestampDate = new Date(timestamp.date)
	return timestampDate.getFullYear() === currentYear && timestampDate.getMonth() === currentMonth
}

const isToday = (timestamp) => {
	const todayDate = today()
	return timestamp.date === todayDate
}

const getEventsForDate = (date) => {
	return props.events.filter((event) => event.start <= date && event.end >= date)
}

const currentMonthEvents = computed(() => {
	const selected = new Date(selectedDate.value)
	const currentYear = selected.getFullYear()
	const currentMonth = selected.getMonth()
	const monthStart = new Date(currentYear, currentMonth, 1)
	const monthEnd = new Date(currentYear, currentMonth + 1, 0)

	const filteredEvents = props.events.filter((event) => {
		const eventStart = new Date(event.start)
		const eventEnd = new Date(event.end)
		return eventStart <= monthEnd && eventEnd >= monthStart
	})

	return filteredEvents.sort((a, b) => {
		const startA = new Date(a.start)
		const startB = new Date(b.start)
		return startA - startB
	})
})

function onPrev() {
	if (calendar.value) calendar.value.prev()
}

function onNext() {
	if (calendar.value) calendar.value.next()
}
</script>

<style lang="scss"></style>
