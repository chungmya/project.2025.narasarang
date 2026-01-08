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
					<CustomCheckbox v-model="checkbox" value="va0" />
					<CustomCheckbox v-model="checkbox" label="chk1" value="val" />
					<CustomCheckbox
						v-model="checkbox"
						label="disabled"
						value="va2"
						disable
					/>
				</aside>
				<details class="code-area">
					<summary>소스</summary>
					<pre class="guide-code"><code>{{`
            <CustomCheckbox v-model="checkbox" value="va0" />
            <CustomCheckbox v-model="checkbox" label="chk1" value="val" />
            <CustomCheckbox v-model="checkbox" label="disabled" value="va2" disable />

            <script>
              const checkbox = ref(false)
            </script>
          `}}</code></pre>
				</details>
			</div>
		</section>
		<section>
			<h2>Group</h2>
			<div class="guide-wrap col">
				<aside class="view-area">
					<CustomCheckboxGroup
						v-model="checkboxGroup"
						:options="checkboxOptions"
					/>
					<hr />
					<CustomCheckboxGroup
						v-model="checkboxGroup"
						:options="checkboxOptions"
						:inline="true"
					/>
				</aside>
				<details class="code-area">
					<summary>소스</summary>
					<pre class="guide-code"><code>{{`
            <CustomCheckboxGroup v-model="checkboxGroup" :options="checkboxOptions" />
            <CustomCheckboxGroup v-model="checkboxGroup" :options="checkboxOptions" :inline="true" />

            <script>
              const checkboxGroup = ref()
              const checkboxOptions = [
                { label: "yes", value: "val_1" },
                { label: "no", value: "val_2" },
              ]
            </script>
          `}}</code></pre>
				</details>
			</div>
		</section>
	</q-page>
</template>

<script setup>
import { ref, onMounted } from "vue"
import SubHeaderSection from "layouts/uiux/common/SubHeaderSection.vue"
import CustomCheckbox from "components/uiux/CustomCheckbox.vue"
import CustomCheckboxGroup from "components/uiux/CustomCheckboxGroup.vue"

const checkbox = ref(false)
const checkboxGroup = ref()
const checkboxOptions = [
	{ label: "yes", value: "val_1" },
	{ label: "no", value: "val_2" },
]

// Breadcrumb(마지막 요소명이 서브상단 타이틀명과 같으면 생략)
const breadcrumbItems = ref([
	{
		menuName: "Guide",
		menuLink: "",
	},
	{
		menuName: "radio",
		menuLink: "",
	},
])

// 서브상단 타이틀
const pageTitle = ref("Checkbox")
const pageDescription = ref(
	"이곳은 공통 UI 컴포넌트 및 퍼블리싱 가이드 예제 페이지입니다.",
)
onMounted(() => {
	document.title = "checkbox | Guide"
})
</script>

<style scoped lang="scss"></style>
