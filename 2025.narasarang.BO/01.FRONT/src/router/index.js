// Quasar 앱의 라우터 래퍼를 가져옵니다
import { defineRouter } from '#q-app/wrappers'
// Vue Router의 핵심 기능들을 가져옵니다
import {
	createRouter, // 라우터 인스턴스를 생성하는 함수
	createMemoryHistory, // 서버사이드 렌더링용 메모리 히스토리
	createWebHistory, // HTML5 히스토리 모드용 웹 히스토리
	createWebHashHistory, // 해시 모드용 웹 히스토리
} from 'vue-router'
// 라우트 설정을 가져옵니다
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
	const createHistory = process.env.SERVER
		? createMemoryHistory
		: process.env.VUE_ROUTER_MODE === 'history'
			? createWebHistory
			: createWebHashHistory

	const Router = createRouter({
		scrollBehavior: () => ({ left: 0, top: 0 }),
		routes,

		// Leave this as is and make changes in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		history: createHistory(process.env.VUE_ROUTER_BASE),
	})

	return Router
})

//1. 개발 시 라우터 셋팅
/* import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
 */

//2. 퍼블 라우터: 외부 검수 위해 Build 시 Hash 모드 적용 - 개발시 제외(위 1 사용)
/*
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

const isDev = process.env.NODE_ENV === 'development'

const router = createRouter({
  history: isDev ? createWebHistory(import.meta.env.BASE_URL) : createWebHashHistory(),
  routes,
})

export default router
*/
