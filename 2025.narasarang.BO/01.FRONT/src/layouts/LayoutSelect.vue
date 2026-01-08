<template>
	<component :is="currentComponent">
		<router-view></router-view>
	</component>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

// 비동기 컴포넌트로 정의하여 코드 스플리팅 활용
const Components = {
	MainLayout: defineAsyncComponent(() => import('./uiux/MainLayout.vue')),
	SubLayout: defineAsyncComponent(() => import('./uiux/SubLayout.vue')),
	NoneLayout: defineAsyncComponent(() => import('./uiux/NoneLayout.vue')),
	GuideLayout: defineAsyncComponent(() => import('./uiux/GuideLayout.vue')),
}

const route = useRoute()
const layout = computed(() => route.meta.layout || 'NoneLayout')
const currentComponent = computed(() => Components[layout.value])
</script>
