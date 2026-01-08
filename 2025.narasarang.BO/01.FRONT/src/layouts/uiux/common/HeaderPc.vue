<template>
	<q-header class="g-header" @click="handleOutsideClick" reveal>
		<div class="head-overlay" v-show="activeMenu !== null"></div>
		<div class="head-top" ref="headTop">
			<q-toolbar>
				<h1 class="logo">
					<router-link to="/" aria-label="나라사랑포털">
						<span class="blind">나라사랑포털</span>
					</router-link>
				</h1>
				<div class="head-search">
					<q-input
						outlined
						class="search-input"
						v-model="searchQuery"
						placeholder="검색어를 입력하세요"
						aria-label="검색"
						clearable
					>
						<template v-slot:append>
							<q-btn flat round :ripple="false" class="btn-search" aria-label="검색" />
						</template>
					</q-input>
				</div>
				<div class="head-util">
					로그인
				</div>
			</q-toolbar>
		</div>
		<div class="head-gnb" id="gnb">
			<q-toolbar>
				<nav class="main-menu" @click.stop>
					<ul>
						<li
							v-for="menu in pcMainMenus"
							:key="menu.originalIndex"
							:class="{ active: activeMenu === menu.originalIndex, 's-group': menu.sGroup }"
						>
							<button
								type="button"
								:ref="(el) => (mainMenuButtons[menu.originalIndex] = el)"
								@click="toggleSubMenu(menu.originalIndex)"
								@keydown="handleKeyEvent(menu.originalIndex, $event)"
								:aria-expanded="activeMenu === menu.originalIndex"
								:aria-controls="'submenu-' + menu.originalIndex"
							>
								{{ menu.label }}
							</button>
							<div
								v-show="activeMenu === menu.originalIndex"
								:id="'submenu-' + menu.originalIndex"
								class="submenu-wrap"
							>
								<div class="submenu">
									<div class="box-left">
										<h2 class="tit">
											{{ menu.label }}
										</h2>
										<q-img
											v-if="menu.imgSrc"
											class="cate-img"
											:src="menu.imgSrc"
											alt="카테고리 이미지"
										/>
									</div>
									<div class="box-right">
										<ul>
											<li v-for="(submenu, subIndex) in menu.subMenus" :key="subIndex">
												<a
													:href="submenu.link"
													:target="submenu.blank ? '_blank' : '_self'"
													:aria-label="
														submenu.blank ? `${submenu.label} (새 창에서 열림)` : submenu.label
													"
													@keydown="handleKeyEvent(menu.originalIndex, $event)"
												>
													{{ submenu.label }}
													<span v-if="submenu.blank" class="blind">(새 창)</span>
												</a>
												<ul v-if="submenu.subMenus?.length">
													<li
														v-for="(subSubmenu, subSubIndex) in submenu.subMenus"
														:key="subSubIndex"
													>
														<a
															:href="subSubmenu.link"
															:target="subSubmenu.blank ? '_blank' : '_self'"
															:aria-label="
																subSubmenu.blank
																	? `${subSubmenu.label} (새 창에서 열림)`
																	: subSubmenu.label
															"
															@keydown="handleKeyEvent(menu.originalIndex, $event)"
														>
															{{ subSubmenu.label }}
															<span v-if="subSubmenu.blank" class="blind">(새 창)</span>
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</nav>
				<button
					type="button"
					class="g-allmenu"
					ref="allMenuButton"
					@click.stop="toggleAllMenu"
					:aria-expanded="isAllMenuOpen"
					aria-controls="all-menu-layer"
				>
					<span class="blind">전체메뉴</span>
				</button>
			</q-toolbar>
		</div>
		<div
			v-show="isAllMenuOpen"
			id="all-menu-layer"
			ref="allMenuLayer"
			class="all-menu-layer"
			role="dialog"
			aria-label="전체메뉴"
			tabindex="-1"
			@click.stop
			@keydown="handleAllMenuKeyEvent"
		>
			<div class="all-menu-content" tabindex="-1">
				<button
					type="button"
					class="all-menu-close"
					ref="closeButton"
					@click="closeAllMenu"
					aria-label="전체메뉴 닫기"
				>
					<span class="blind">닫기</span>
				</button>
				<ul class="all-menu-list">
					<li v-for="menu in pcAllMenus" :key="menu.originalIndex">
						<div class="all-menu-list-item">
							<button
								@click="toggleSubMenuInAllMenu(menu.originalIndex)"
								:aria-expanded="isSubMenuOpen[menu.originalIndex]"
								:aria-controls="'all-submenu-' + menu.originalIndex"
								class="toggle-button"
							>
								{{ menu.label }}
							</button>
							<ul
								v-show="isSubMenuOpen[menu.originalIndex]"
								:id="'all-submenu-' + menu.originalIndex"
								class="submenu-list"
							>
								<li v-for="(submenu, subIndex) in menu.subMenus" :key="subIndex">
									<a
										:href="submenu.link"
										:target="submenu.blank ? '_blank' : '_self'"
										:aria-label="
											submenu.blank ? `${submenu.label} (새 창에서 열림)` : submenu.label
										"
									>
										{{ submenu.label }}
										<span v-if="submenu.blank" class="blind">(새 창)</span>
									</a>
									<ul v-if="submenu.subMenus?.length">
										<li v-for="(subSubmenu, subSubIndex) in submenu.subMenus" :key="subSubIndex">
											<a
												:href="subSubmenu.link"
												:target="subSubmenu.blank ? '_blank' : '_self'"
												:aria-label="
													subSubmenu.blank
														? `${subSubmenu.label} (새 창에서 열림)`
														: subSubmenu.label
												"
											>
												{{ subSubmenu.label }}
												<span v-if="subSubmenu.blank" class="blind">(새 창)</span>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</q-header>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
// import CustomPopup from 'src/components/CustomPopup.vue';

// const cstPopupStyle = ref(false);
// const pagenumInput = ref('');
const searchQuery = ref('')
const activeMenu = ref(null)
const isAllMenuOpen = ref(false)
const allMenuLayer = ref(null)
const closeButton = ref(null)
const headTop = ref(null)
const allMenuButton = ref(null)
const mainMenuButtons = ref([])

const props = defineProps({
	menus: {
		type: Array,
		default: () => [],
	},
})

// 원본 인덱스를 포함한 메뉴 계산
const pcMainMenus = computed(() => {
	return props.menus
		.map((menu, originalIndex) => ({ ...menu, originalIndex }))
		.filter((menu) => menu.showInPc)
})

const pcAllMenus = computed(() => {
	return props.menus
		.map((menu, originalIndex) => ({ ...menu, originalIndex }))
		.filter((menu) => menu.showInPcAll)
})

const isSubMenuOpen = ref([])
const searchResults = ref([]) // 검색 결과 상태 추가 (샘플 데이터 기반)

onMounted(() => {
	isSubMenuOpen.value = props.menus.map(() => true)
	updateAllMenuPosition()
	window.addEventListener('resize', updateAllMenuPosition)
	// 샘플 검색 결과 초기화 (실제로는 검색 로직 필요)
	searchResults.value = [
		{ pagenum: 'A00001', link: '/', pagepath: ['메인'] },
		{ pagenum: 'B00001', link: '/', pagepath: ['홈', '회원가입', '회원구분 선택'] },
		{ pagenum: 'C00001', link: '/', pagepath: ['홈', '관련규정'] },
	]
})

const getScrollbarWidth = () => {
	const outer = document.createElement('div')
	outer.style.visibility = 'hidden'
	outer.style.overflow = 'scroll'
	document.body.appendChild(outer)
	const inner = document.createElement('div')
	outer.appendChild(inner)
	const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
	outer.parentNode.removeChild(outer)
	return scrollbarWidth
}

const manageScroll = (enable) => {
	const body = document.body
	const hasScroll = window.innerHeight < document.documentElement.scrollHeight
	const scrollbarWidth = getScrollbarWidth()

	if (enable && hasScroll) {
		body.style.paddingRight = `${scrollbarWidth}px`
		document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
		body.classList.add('no-scroll')
	} else {
		body.classList.remove('no-scroll')
		body.style.paddingRight = ''
		document.documentElement.style.removeProperty('--scrollbar-width')
	}
}

const toggleSubMenu = async (index) => {
	const prevActive = activeMenu.value
	activeMenu.value = activeMenu.value === index ? null : index
	manageScroll(activeMenu.value !== null)
	if (activeMenu.value !== null) {
		await nextTick()
		const submenu = document.getElementById(`submenu-${index}`)
		if (submenu) {
			const firstLink = submenu.querySelector('a')
			if (firstLink) firstLink.focus()
		}
	} else if (prevActive !== null) {
		mainMenuButtons.value[prevActive].focus()
	}
}

const toggleAllMenu = async () => {
	isAllMenuOpen.value = !isAllMenuOpen.value
	if (isAllMenuOpen.value) {
		if (activeMenu.value !== null) {
			activeMenu.value = null
			manageScroll(false)
		}
		manageScroll(true)
		// window.scrollTo(0, 0);
		await nextTick()
		allMenuLayer.value.querySelector('.all-menu-content').focus()
	} else {
		manageScroll(false)
		allMenuButton.value.focus()
	}
}

const closeAllMenu = async () => {
	isAllMenuOpen.value = false
	manageScroll(false)
	await nextTick()
	allMenuButton.value.focus()
}

const handleKeyEvent = async (index, event) => {
	const { key } = event
	if (!props.menus.length) return

	if (key === 'ArrowRight' || key === 'ArrowDown') {
		if (index < pcMainMenus.value.length - 1) {
			document.querySelectorAll('.main-menu > ul > li > button')[index + 1].focus()
		}
	} else if (key === 'ArrowLeft' || key === 'ArrowUp') {
		if (index > 0) {
			document.querySelectorAll('.main-menu > ul > li > button')[index - 1].focus()
		}
	} else if (key === 'Tab') {
		setTimeout(() => {
			if (!document.querySelector('.main-menu').contains(document.activeElement)) {
				activeMenu.value = null
				manageScroll(false)
			}
		}, 0)
	} else if (key === 'Escape') {
		activeMenu.value = null
		manageScroll(false)
		if (isAllMenuOpen.value) {
			closeAllMenu()
		} else {
			await nextTick()
			mainMenuButtons.value[index].focus()
		}
	}
}

const handleOutsideClick = (event) => {
	const nav = document.querySelector('.main-menu')
	const allMenuLayerEl = document.querySelector('#all-menu-layer')
	if (
		nav &&
		!nav.contains(event.target) &&
		(!allMenuLayerEl || !allMenuLayerEl.contains(event.target))
	) {
		activeMenu.value = null
		manageScroll(false)
		if (isAllMenuOpen.value) closeAllMenu()
	}
}

const toggleSubMenuInAllMenu = (index) => {
	isSubMenuOpen.value[index] = !isSubMenuOpen.value[index]
}

const updateAllMenuPosition = () => {
	if (headTop.value) {
		document.documentElement.style.setProperty(
			'--head-top-height',
			`${headTop.value.offsetHeight}px`,
		)
	}
}

const handleAllMenuKeyEvent = (event) => {
	const { key, shiftKey } = event
	if (key === 'Escape') {
		closeAllMenu()
		return
	}
	if (key === 'Tab') {
		const focusableElements = allMenuLayer.value.querySelectorAll(
			'a[href], button, [tabindex]:not([tabindex="-1"])',
		)
		const firstElement = focusableElements[0]
		const lastElement = focusableElements[focusableElements.length - 1]
		if (shiftKey && document.activeElement === firstElement) {
			event.preventDefault()
			lastElement.focus()
		} else if (!shiftKey && document.activeElement === lastElement) {
			event.preventDefault()
			firstElement.focus()
		}
	}
}

// const formatIndex = (index) => (index < 10 ? `0${index}` : index);
</script>
