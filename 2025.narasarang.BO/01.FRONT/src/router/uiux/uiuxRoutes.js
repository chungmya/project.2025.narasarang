const uiuxRoutes = {
	path: "/uiux/",
	redirect: "/uiux/_guide/",

	//
	// component: () => import('layouts/MainLayout.vue'),// 개발 서버 올릴 시 주석 제거
	//
	children: [
		//========================================
		// 00. GUIDE
		//========================================
		{
			path: "/uiux/_guide/",
			redirect: "/uiux/_guide/SampleGuide",
			children: [
				//Test
				{
					path: "/uiux/_guide/TestPage01",
					component: () => import("pages/uiux/_guide/TestPage01.vue"),
					meta: { layout: "GuideLayout" },
				},

				//Template
				{
					path: "/uiux/_guide/TemplateSub",
					component: () => import("pages/uiux/_guide/TemplateSub.vue"),
					meta: { layout: "SubLayout" },
				},

				//Guide
				{
					path: "/uiux/_guide/GuideLoading",
					component: () => import("pages/uiux/_guide/GuideLoading.vue"),
					meta: { layout: "SubLayout" },
				},
				{
					path: "/uiux/_guide/GuideButton",
					component: () => import("src/pages/uiux/_guide/GuideButton.vue"),
					meta: { layout: "SubLayout" },
				},
				{
					path: "/uiux/_guide/GuideRadio",
					component: () => import("src/pages/uiux/_guide/GuideRadio.vue"),
					meta: { layout: "SubLayout" },
				},
				{
					path: "/uiux/_guide/GuideCheckbox",
					component: () => import("src/pages/uiux/_guide/GuideCheckbox.vue"),
					meta: { layout: "SubLayout" },
				},

				//Sample
				{
					path: "/uiux/_guide/SampleGuide",
					component: () => import("pages/uiux/_guide/SampleGuide.vue"),
					meta: { layout: "SubLayout" },
				},
				{
					path: "/uiux/_guide/SampleGuide2",
					component: () => import("pages/uiux/_guide/SampleGuide2.vue"),
					meta: { layout: "SubLayout" },
				},

				//Page
				{
					path: "/uiux/_guide/PageCalendarApp",
					component: () => import("pages/uiux/_guide/PageCalendarApp.vue"),
					meta: { layout: "SubLayout" },
				},
				{
					path: "/uiux/_guide/PageConfirm",
					component: () => import("pages/uiux/_guide/PageConfirm.vue"),
					meta: { layout: "SubLayout" },
				},
				{
					path: "/uiux/_guide/GuideTableData",
					component: () => import("pages/uiux/_guide/GuideTableData.vue"),
					meta: { layout: "SubLayout" },
				},
			],
		},
	],
}

export default uiuxRoutes
