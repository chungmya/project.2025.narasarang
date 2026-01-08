<template>
	<q-tabs v-bind="$attrs" v-model="localModel" @update:modelValue="updateModel" ref="tabsRef">
		<slot />
	</q-tabs>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const localModel = ref(props.modelValue || '')

const tabsRef = ref(null)

const updateModel = (value) => {
	emit('update:modelValue', value)
}

const handleKeyDown = (event) => {
	if (event.key !== 'Tab') return

	const tabElements = Array.from(tabsRef.value?.$el.querySelectorAll('.q-tab') || [])
	const activeElement = document.activeElement
	const currentIndex = tabElements.indexOf(activeElement)

	if (currentIndex === -1) return

	const isLastTab = currentIndex === tabElements.length - 1
	const isFirstTab = currentIndex === 0

	if ((isLastTab && !event.shiftKey) || (isFirstTab && event.shiftKey)) {
		return // 기본 포커스 이동 허용
	}

	event.preventDefault()

	const directionEvent = new KeyboardEvent('keydown', {
		key: event.shiftKey ? 'ArrowLeft' : 'ArrowRight',
		bubbles: true,
		cancelable: true,
		code: event.shiftKey ? 'ArrowLeft' : 'ArrowRight',
		keyCode: event.shiftKey ? 37 : 39,
	})

	activeElement.dispatchEvent(directionEvent)
}

const setupKeyListeners = () => {
	if (!tabsRef.value || !tabsRef.value.$el) return

	const tabElements = tabsRef.value.$el.querySelectorAll('.q-tab')
	tabElements.forEach((tab) => {
		tab.removeEventListener('keydown', handleKeyDown)
		tab.addEventListener('keydown', handleKeyDown)
		if (tab.getAttribute('tabindex') !== '0') {
			tab.setAttribute('tabindex', '0')
		}
	})
}

const ensureTabindex = () => {
	if (!tabsRef.value || !tabsRef.value.$el) return // tabsRef가 없으면 실행 중단

	const tabs = tabsRef.value.$el.querySelectorAll('.q-tab')
	tabs.forEach((tab) => {
		if (tab.getAttribute('tabindex') !== '0') {
			tab.setAttribute('tabindex', '0')
		}
	})
}

onMounted(async () => {
	await nextTick()
	setupKeyListeners()

	if (tabsRef.value && tabsRef.value.$el) {
		const tabElements = tabsRef.value.$el.querySelectorAll('.q-tab')
		tabElements.forEach((tab) => {
			tab.setAttribute('tabindex', '0')
		})
	}

	setTimeout(ensureTabindex, 0) // 즉시 확인
	setTimeout(ensureTabindex, 100) // Quasar 지연 대비

	if (tabsRef.value && tabsRef.value.$el) {
		const observer = new MutationObserver(() => {
			ensureTabindex() // 새 탭에도 tabindex="0" 적용
		})
		observer.observe(tabsRef.value.$el, { childList: true, subtree: true })
	}
})

onUnmounted(() => {
	if (tabsRef.value && tabsRef.value.$el) {
		const tabElements = tabsRef.value.$el.querySelectorAll('.q-tab')
		tabElements.forEach((tab) => {
			tab.removeEventListener('keydown', handleKeyDown)
		})
	}
})
</script>
