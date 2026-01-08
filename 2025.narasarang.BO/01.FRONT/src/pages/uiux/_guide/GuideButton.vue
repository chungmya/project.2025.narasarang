<template>
	<q-page class="q-pa-md">
		<!-- 서브상단 -->
		<SubHeaderSection
			:breadcrumbItems="breadcrumbItems"
			:pageTitle="pageTitle"
			:pageDescription="pageDescription"
		/>
		<!-- //서브상단 -->
		<section>
			<h2>기본</h2>
			<div class="guide-wrap col">
				<aside class="view-area">
					<CustomButton type="button" label="primary" />
					<CustomButton type="button" label="secondary" className="secondary" />
					<CustomButton type="button" label="negative" className="negative" />
				</aside>
				<details class="code-area">
					<summary>소스</summary>
					<pre class="guide-code"><code>{{`
            <CustomButton type="button" label="primary" />
            <CustomButton type="button" label="secondary" className="secondary" />
            <CustomButton type="button" label="negative" className="negative" />
          `}}</code></pre>
				</details>
			</div>
		</section>
		<section>
			<h2>배치</h2>
			<div class="guide-wrap col">
				<de class="view-area">
					<div class="btn-wrap">
						<CustomButton type="button" label="primary" />
						<CustomButton type="button" label="primary" />
						<CustomButton type="button" label="primary" />
					</div>
					<div class="btn-wrap left">
						<CustomButton type="button" label="primary" />
						<CustomButton type="button" label="primary" />
						<CustomButton type="button" label="primary" />
					</div>
					<div class="btn-wrap right">
						<CustomButton type="button" label="primary" />
						<CustomButton type="button" label="primary" />
						<CustomButton type="button" label="primary" />
					</div>
					<div class="btn-wrap between">
						<div class="left">
							<CustomButton type="button" label="primary" />
						</div>
						<div class="center">
							<CustomPagination />
						</div>
						<div class="right">
							<CustomButton type="button" label="primary" />
						</div>
					</div>
				</de>
				<details class="code-area">
					<summary>소스</summary>
					<pre class="guide-code"><code>{{`
            <div class="btn-wrap">         ... </div>
            <div class="btn-wrap left">    ... </div>
            <div class="btn-wrap right">   ... </div>
            <div class="btn-wrap between"> ... </div>
          `}}</code></pre>
				</details>
			</div>
		</section>
	</q-page>
</template>

<script setup>
import { ref, onMounted } from "vue"
import SubHeaderSection from "layouts/uiux/common/SubHeaderSection.vue"

import CustomButton from "components/uiux/CustomButton.vue"
import CustomPagination from "components/uiux/CustomPagination.vue"

// Breadcrumb(마지막 요소명이 서브상단 타이틀명과 같으면 생략)
const breadcrumbItems = ref([
	{
		menuName: "Guide",
		menuLink: "",
	},
	{
		menuName: "button",
		menuLink: "",
	},
])

// 서브상단 타이틀
const pageTitle = ref("Button / Link")
const pageDescription = ref(
	"이곳은 공통 UI 컴포넌트 및 퍼블리싱 가이드 예제 페이지입니다.",
)
onMounted(() => {
	document.title = "button | Guide"
})
</script>

<style scoped lang="scss"></style>
