<template>
	<q-header class="g-header-m" reveal ref="headerRef">
		<q-toolbar>
			<h1 class="logo">
				<router-link to="/" aria-label="나라사랑포털">
					<span class="blind">나라사랑포털</span>
				</router-link>
			</h1>

			<div class="btn-wrap">
				<button
					ref="searchButton"
					class="btn-search"
					@click="toggleSearch"
					aria-label="검색 열기"
					:aria-expanded="isSearchOpen"
				>
					<span class="blind">검색</span>
				</button>
				<button
					ref="allMenuButton"
					class="btn-allmenu"
					@click="toggleAllMenu"
					aria-label="전체메뉴 열기"
					:aria-expanded="isAllMenuOpen"
				>
					<span class="blind">전체메뉴</span>
				</button>
			</div>
		</q-toolbar>
	</q-header>

	<div class="header-m-layer">
		<!-- 검색 레이어 -->
		<transition name="fade">
			<div
				v-show="isSearchOpen"
				class="header-m-overlay"
				@click="closeSearch"
				aria-hidden="true"
			></div>
		</transition>
		<transition name="slide-down">
			<div
				v-show="isSearchOpen"
				class="header-m-search-layer"
				role="dialog"
				aria-label="검색 영역"
				tabindex="-1"
				@click.stop
				@keydown="trapFocus($event, 'search')"
			>
				<button class="close-btn" @click="closeSearch" aria-label="검색 닫기">
					<span class="blind">닫기</span>
				</button>
				<div ref="searchContent" class="search-content" tabindex="-1">
					<q-form>
						<div class="search-field">
							<q-input
								v-model="searchQuery"
								class="custom-input col"
								placeholder="검색어를 입력하세요 "
								aria-label="검색어 입력"
							/>
							<q-btn class="custom-btn" label="검색" />
						</div>
					</q-form>
				</div>
			</div>
		</transition>

		<!-- 전체메뉴 레이어 -->
		<transition name="fade">
			<div
				v-show="isAllMenuOpen"
				class="header-m-overlay allmenu"
				@click="closeAllMenu"
				aria-hidden="true"
			></div>
		</transition>
		<transition name="slide-in">
			<div
				v-show="isAllMenuOpen"
				class="header-m-allmenu-layer"
				role="dialog"
				aria-label="전체메뉴"
				tabindex="-1"
				@click.stop
				@keydown="trapFocus($event, 'allmenu')"
			>
				<div class="all-menu-header">
					<div class="all-menu-header-top">
						<div class="logo">
							<router-link to="/" aria-label="나라사랑포털">
								<span class="blind">나라사랑포털</span>
							</router-link>
						</div>
						<button class="close-btn" @click="closeAllMenu" aria-label="전체메뉴 닫기">
							<span class="blind">닫기</span>
						</button>
					</div>
				</div>
				<div class="all-menu-content">
					<!-- 좌측: 1뎁스 메뉴 -->
					<div class="left-menu">
						<ul>
							<li
								v-for="menu in filteredMenus"
								:key="menu.originalIndex"
								:class="{
									active: activeMenuIndex === filteredMenus.indexOf(menu),
									'other-group': menu.otherGroup,
								}"
							>
								<template v-if="menu.mobileBlank">
									<a
										:href="menu.link"
										target="_blank"
										rel="noopener noreferrer"
										:aria-label="`${menu.label} (새 창에서 열림)`"
									>
										<span class="label">{{ menu.label }}</span> <span class="blind">(새 창)</span>
									</a>
								</template>
								<template v-else-if="!hasSubMenus(menu)">
									<a :href="menu.link" :aria-label="menu.label">
										<span class="label">{{ menu.label }}</span>
									</a>
								</template>
								<template v-else>
									<button
										@click="activateMenu(filteredMenus.indexOf(menu))"
										@keydown.enter="activateMenu(filteredMenus.indexOf(menu))"
										@keydown.space.prevent="activateMenu(filteredMenus.indexOf(menu))"
										:aria-expanded="activeMenuIndex === filteredMenus.indexOf(menu)"
										aria-haspopup="true"
										:aria-label="`${menu.label} 하위 메뉴 열기`"
									>
										<span class="label">{{ menu.label }}</span>
									</button>
								</template>
							</li>
						</ul>
					</div>

					<!-- 우측: 2뎁스 메뉴 -->
					<div class="right-menu" v-if="activeMenu">
						<ul>
							<li v-for="(subMenu, subIndex) in activeMenu.subMenus" :key="subIndex">
								<template v-if="hasSubMenus(subMenu)">
									<button
										@click="toggleSubMenu(subIndex)"
										@keydown.enter="toggleSubMenu(subIndex)"
										@keydown.space.prevent="toggleSubMenu(subIndex)"
										:aria-expanded="subMenu.expanded"
										aria-haspopup="true"
										:aria-label="`${subMenu.label} 하위 메뉴 열기`"
									>
										<span class="label">{{ subMenu.label }}</span>
									</button>
									<ul v-if="subMenu.expanded">
										<li v-for="(item, itemIndex) in subMenu.subMenus" :key="itemIndex">
											<a
												:href="item.link"
												:target="item.blank ? '_blank' : '_self'"
												:rel="item.blank ? 'noopener noreferrer' : ''"
												:aria-label="item.blank ? `${item.label} (새 창에서 열림)` : item.label"
											>
												<span class="label">{{ item.label }}</span>
												<span v-if="item.blank" class="blind">(새 창)</span>
											</a>
										</li>
									</ul>
								</template>
								<template v-else>
									<a
										:href="subMenu.link"
										:target="subMenu.blank ? '_blank' : '_self'"
										:rel="subMenu.blank ? 'noopener noreferrer' : ''"
										:aria-label="
											subMenu.blank ? `${subMenu.label} (새 창에서 열림)` : subMenu.label
										"
									>
										<span class="label">{{ subMenu.label }}</span>
										<span v-if="subMenu.blank" class="blind">(새 창)</span>
									</a>
								</template>
							</li>
						</ul>
					</div>
				</div>

				<!-- <div class="all-menu-footer">
					<ul class="sns-links">
						<li>
							<a href="/" target="_blank" aria-label="새창열림">
								<q-img src="/images/common/icon-40-logo-blog.png" alt="네이버블로그 바로가기" />
							</a>
						</li>
						<li>
							<a href="/" target="_blank" aria-label="새창열림">
								<q-img src="/images/common/icon-40-logo-instagram.png" alt="인스타그램 바로가기" />
							</a>
						</li>
						<li>
							<a href="/" target="_blank" aria-label="새창열림">
								<q-img src="/images/common/icon-40-logo-facebook.png" alt="페이스북 바로가기" />
							</a>
						</li>
						<li>
							<a href="/" target="_blank" aria-label="새창열림">
								<q-img src="/images/common/icon-40-logo-x.png" alt="트위터 바로가기" />
							</a>
						</li>
					</ul>
				</div> -->
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch, computed } from 'vue'

const props = defineProps({
	menus: { type: Array, default: () => [] },
})

// 모바일 메뉴 필터링
const filteredMenus = computed(() =>
	props.menus
		.map((menu, index) => ({ ...menu, originalIndex: index }))
		.filter((menu) => menu.showInMobile),
)

// 메뉴 상태 관리
const activeMenuIndex = ref(0)
const activeMenu = computed(() => filteredMenus.value[activeMenuIndex.value])

// 하위 메뉴 유무 판단
const hasSubMenus = (menu) => menu.subMenus && menu.subMenus.length > 0

// 메뉴 활성화 및 토글
const activateMenu = (index) => {
	activeMenuIndex.value = index
}
const toggleSubMenu = (subIndex) => {
	const subMenu = activeMenu.value.subMenus[subIndex]
	if (hasSubMenus(subMenu)) subMenu.expanded = !subMenu.expanded
}

// 메뉴 초기화
props.menus.forEach((menu) => {
	if (hasSubMenus(menu))
		menu.subMenus.forEach((sub) => {
			sub.expanded = false
		})
})

// 검색 및 메뉴 상태
const isSearchOpen = ref(false)
const isAllMenuOpen = ref(false)
const searchQuery = ref('')
// const pageNumInput = ref('');

// DOM 참조
const searchButton = ref(null)
const allMenuButton = ref(null)
const searchContent = ref(null)
const headerRef = ref(null) // .g-header-m 참조

// 토글 함수
const toggleSearch = async () => {
	isSearchOpen.value = !isSearchOpen.value
	isAllMenuOpen.value = isSearchOpen.value ? false : isAllMenuOpen.value
	await nextTick()
	isSearchOpen.value ? searchContent.value.focus() : searchButton.value.focus()
}

const toggleAllMenu = async () => {
	isAllMenuOpen.value = !isAllMenuOpen.value
	isSearchOpen.value = isAllMenuOpen.value ? false : isSearchOpen.value
	await nextTick()
	!isAllMenuOpen.value && allMenuButton.value.focus()
}

const closeSearch = () => {
	isSearchOpen.value = false
	searchButton.value.focus()
}
const closeAllMenu = () => {
	isAllMenuOpen.value = false
	allMenuButton.value.focus()
}

// 포커스 트랩
const trapFocus = (event, type) => {
	const layer = type === 'search' ? '.header-m-search-layer' : '.header-m-allmenu-layer'
	const focusable = document
		.querySelector(layer)
		.querySelectorAll('a[href], button, input, [tabindex="0"]')
	const [first, last] = [focusable[0], focusable[focusable.length - 1]]

	if (event.key === 'Tab') {
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault()
			last.focus()
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault()
			first.focus()
		}
	}
}

// ESC 키 처리
const handleEscKey = (event) => {
	if (event.key === 'Escape') {
		isSearchOpen.value ? closeSearch() : isAllMenuOpen.value && closeAllMenu()
	}
}

onMounted(() => {
	window.addEventListener('keydown', handleEscKey)

	if (headerRef.value && headerRef.value.$el) {
		const height = headerRef.value.$el.offsetHeight
		document.documentElement.style.setProperty('--head-m-height', `${height}px`)
	}
})

onUnmounted(() => window.removeEventListener('keydown', handleEscKey))

// 스크롤 제어
watch([isSearchOpen, isAllMenuOpen], ([searchOpen, allMenuOpen]) => {
	document.body.classList.toggle('no-scroll', searchOpen || allMenuOpen)
})

// 높이 변경 감지
watch(
	() => headerRef.value?.$el.offsetHeight,
	(newHeight) => {
		if (headerRef.value && newHeight) {
			document.documentElement.style.setProperty('--head-m-height', `${newHeight}px`)
		}
	},
)
</script>
