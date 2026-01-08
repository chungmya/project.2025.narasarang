<template>
	<div class="sub-calendar-wrap">
		<!-- navigation-bar -->
		<div class="sub-schedule-title" role="group">
			<button @click="onPrev" class="q-icon-left size-28 cursor-pointer">
				<span class="blind">이전 월</span>
			</button>
			<div class="title" role="heading" aria-live="polite">{{ currentMonthTitle }}</div>
			<button @click="onNext" class="q-icon-right size-28 cursor-pointer">
				<span class="blind">다음 월</span>
			</button>
		</div>
		<!-- //navigation-bar -->
		<q-calendar-month
			ref="calendar"
			v-model="selectedDate"
			animated
			focusable
			hoverable
			no-active-date
			short-weekday-label
			locale="ko"
		>
			<template #day="{ scope }">
				<span
					v-if="isCurrentMonth(scope.timestamp)"
					:class="['q-calendar-day', { today: isToday(scope.timestamp) }]"
					:aria-label="`${scope.timestamp.date}일${isToday(scope.timestamp) ? ', 오늘' : ''}`"
				>
					<span class="label">{{ scope.timestamp ? scope.timestamp.day : '' }}</span>
				</span>
				<span
					v-else
					:class="['q-calendar-day', 'disabled-day', { today: isToday(scope.timestamp) }]"
					tabindex="-1"
					:aria-label="`${scope.timestamp.date}일, 현재 월 아님${isToday(scope.timestamp) ? ', 오늘' : ''}`"
				>
					<span class="label">{{ scope.timestamp ? scope.timestamp.day : '' }}</span>
				</span>
			</template>
			<template #week="{ scope }">
				<div class="my-event-box" aria-label="이번 주에 예정된 일정 목록">
					<template v-for="(displayedEvent, index) in getWeekEvents(scope.week)" :key="index">
						<button
							type="button"
							v-if="displayedEvent.event"
							ref="eventRefs"
							@click="openEventDialog(displayedEvent.event, $event)"
							:class="[
								badgeClasses(displayedEvent),
								{
									'event-start':
										displayedEvent.event.start ===
										scope.week.find((day) => day.date === displayedEvent.event.start)?.date,
								},
							]"
							:style="badgeStyles(displayedEvent, scope.week.length)"
							:aria-label="`${displayedEvent.event.title}, 자세히 보기`"
						>
							<div v-if="displayedEvent.event.title" class="title q-calendar__ellipsis">
								{{ displayedEvent.event.title }}
								<q-tooltip class="custom-tooltip">{{ displayedEvent.event.title }}</q-tooltip>
							</div>
						</button>
						<div
							v-else
							:class="badgeClasses(displayedEvent)"
							:style="badgeStyles(displayedEvent, scope.week.length)"
						>
							<!-- my-void-event -->
						</div>
					</template>
				</div>
			</template>
		</q-calendar-month>
	</div>

	<!-- 팝업 -->
	<custom-popup
		v-model="cstPopupStyle"
		:cdstyle="'max-width: 480px'"
		@update:model-value="onPopupClose"
	>
		<template v-slot:header>
			<h1 class="pop-tit">{{ selectedEvent?.title || '제목 없음' }}</h1>
			<p class="pop-tit-date">{{ selectedEvent?.start }} ~ {{ selectedEvent?.end }}</p>
		</template>
		<template v-slot:body>
			<div class="sc-dl-box">
				<dl v-for="(detail, index) in selectedEvent?.details" :key="index">
					<dt>{{ detail.label }}</dt>
					<dd>{{ detail.value }}</dd>
				</dl>
			</div>
		</template>
		<template v-slot:footer>
			<q-btn class="custom-btn width-fixed" label="교육 신청" />
		</template>
	</custom-popup>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import CustomPopup from './CustomPopup.vue'
import {
	QCalendarMonth,
	daysBetween,
	isOverlappingDates,
	parsed,
	today,
} from '@quasar/quasar-ui-qcalendar'
import '@quasar/quasar-ui-qcalendar/dist/index.css'

const props = defineProps({
	events: { type: Array, required: true },
})

const calendar = ref(null)
const eventRefs = ref([]) // 이벤트 블록 참조 배열
const lastFocusedEvent = ref(null) // 마지막 포커스된 이벤트 블록
const selectedDate = ref(today())
const cstPopupStyle = ref(false)
const selectedEvent = ref(null)

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

function openEventDialog(event, domEvent) {
	if (!event || !event.details || cstPopupStyle.value) return // 팝업이 이미 열려 있거나 조건 불충족 시 무시
	selectedEvent.value = event
	lastFocusedEvent.value = domEvent.target // 이벤트 블록 저장
	cstPopupStyle.value = true
}

function onPopupClose(newValue) {
	if (!newValue) {
		// 팝업이 닫히면
		nextTick(() => {
			if (lastFocusedEvent.value) {
				lastFocusedEvent.value.focus() // 원래 이벤트 블록으로 포커스 이동
			}
			selectedEvent.value = null
		})
	}
}

const getWeekEvents = (week) => {
	if (!week || week.length === 0) return []
	const firstDay = parsed(`${week[0].date} 00:00`)
	const lastDay = parsed(`${week[week.length - 1].date} 23:59`)
	if (!firstDay || !lastDay) return []

	const eventsWeek = props.events
		.filter((event) => event && event.start && event.end)
		.map((event, id) => {
			const startDate = parsed(`${event.start} 00:00`)
			const endDate = parsed(`${event.end} 23:59`)
			if (startDate && endDate && isOverlappingDates(startDate, endDate, firstDay, lastDay)) {
				const left = daysBetween(firstDay, startDate)
				const right = daysBetween(endDate, lastDay)
				return {
					id,
					left: Math.max(0, left),
					right: Math.max(0, right),
					size: week.length - (Math.max(0, left) + Math.max(0, right)),
					event,
				}
			}
			return null
		})
		.filter(Boolean)

	const evts = []
	if (eventsWeek.length > 0) {
		const sortedWeek = eventsWeek.sort((a, b) => {
			const startA = new Date(a.event.start)
			const startB = new Date(b.event.start)
			return startA - startB
		})
		sortedWeek.forEach((_, i) => insertEvent(evts, week.length, sortedWeek, i, 0, 0))
	}
	return evts
}

const insertEvent = (events, weekLength, infoWeek, index, availableDays, level) => {
	const iEvent = infoWeek[index]
	if (iEvent && iEvent.left >= availableDays) {
		if (iEvent.left - availableDays) events.push({ size: iEvent.left - availableDays })
		events.push({ size: iEvent.size, event: iEvent.event })
		if (level !== 0) infoWeek.splice(index, 1)

		const currentAvailableDays = iEvent.left + iEvent.size
		if (currentAvailableDays <= weekLength) {
			const indexNextEvent = infoWeek.findIndex(
				(e) => e.id !== iEvent.id && e.left >= currentAvailableDays,
			)
			insertEvent(
				events,
				weekLength,
				infoWeek,
				indexNextEvent !== -1 ? indexNextEvent : index,
				currentAvailableDays,
				level + 1,
			)
		}
	} else if (weekLength - availableDays > 0) {
		events.push({ size: weekLength - availableDays })
	}
}

const badgeClasses = (displayedEvent) => {
	if (displayedEvent.event) {
		return {
			'my-event': true,
			[`bg-${displayedEvent.event.type}`]: true,
			'q-calendar__ellipsis': true,
		}
	}
	return { 'my-void-event': true }
}

const badgeStyles = (displayedEvent, weekLength) => ({
	width:
		displayedEvent.size !== undefined ? `${(100 / weekLength) * displayedEvent.size}%` : undefined,
})

function onPrev() {
	if (calendar.value) calendar.value.prev()
}

function onNext() {
	if (calendar.value) calendar.value.next()
}
</script>
