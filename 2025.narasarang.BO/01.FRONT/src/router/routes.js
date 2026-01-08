import uiuxRoutes from './uiux/uiuxRoutes.js' // uiux 라우트 설정

const routes = [
	{
		path: '/',
		component: () => import('pages/IndexPage.vue'),
		meta: { layout: 'MainLayout' },
	},
	{
		path: '/:catchAll(.*)*',
		component: () => import('src/pages/ErrorNotFound.vue'),
		meta: {
			name: 'Page Not Found',
			layout: 'NonLayout',
			authCheck: false,
		},
	},
]

const routerList = [uiuxRoutes]
routes.push(...routerList)

export default routes
