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
					<CustomRadio v-model="radio" label="radio1" value="val_1" />
					<CustomRadio v-model="radio" label="radio2" value="val_2" />
					<CustomRadio v-model="radio" label="disabled" value="val_3" disable />
				</aside>
				<details class="code-area">
					<summary>소스</summary>
					<pre class="guide-code"><code>{{`
            <CustomRadio v-model="radioGroup" label="radio1" value="val_1" />
            <CustomRadio v-model="radioGroup" label="radio2" value="val_2" disable />

            <script>
              const radioGroup = ref("val_1") // init
            </script>
          `}}</code></pre>
				</details>
			</div>
		</section>
		<section>
			<h2>Group</h2>
			<div class="guide-wrap col">
				<aside class="view-area">
					<CustomRadioGroup v-model="radioGroup" :options="radioOptions" />
					<hr />
					<CustomRadioGroup
						v-model="radioGroup"
						:options="radioOptions"
						inline
					/>
				</aside>
				<details class="code-area">
					<summary>소스</summary>
					<pre class="guide-code"><code>{{`
            <CustomRadioGroup v-model="radioGroup" :options="radioOptions" />
            <CustomRadioGroup v-model="radioGroup" :options="radioOptions" inline />

            <script>
              const radioGroup = ref("val_1") // init
              const radioOptions = [
                { label: "yes", value: "val_1" },
                { label: "disabled", value: "val_2", disable: true },
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
import SubHeaderSection from "src/layouts/uiux/common/SubHeaderSection.vue"
import CustomRadio from "src/components/uiux/CustomRadio.vue"
import CustomRadioGroup from "src/components/uiux/CustomRadioGroup.vue"

const radio = ref("val_1")
const radioGroup = ref("val_1") // init
const radioOptions = [
	{ label: "yes", value: "val_1" },
	{ label: "no", value: "val_2" },
	{ label: "disabled", value: "val_3", disable: true },
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
const pageTitle = ref("Radio")
const pageDescription = ref(
	"이곳은 공통 UI 컴포넌트 및 퍼블리싱 가이드 예제 페이지입니다.",
)
onMounted(() => {
	document.title = "radio | Guide"
})
</script>

<style scoped lang="scss"></style>
