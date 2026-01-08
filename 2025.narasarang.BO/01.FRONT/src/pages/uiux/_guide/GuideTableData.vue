<template>
	<q-page class="g-page">
		<!-- 서브상단 -->
		<SubHeaderSection
			:breadcrumbItems="breadcrumbItems"
			:pageTitle="pageTitle"
			:pageDescription="pageDescription"
		></SubHeaderSection>
		<!-- //서브상단 -->

		<!-- 서브컨텐츠 -->
		<div class="g-content">
			<h3 class="subtit-md">board-list</h3>
			<div class="board-list">
				<div class="bo-body">
					<table class="bo-table">
						<caption>
							test, test, test 및 test 정보를 제공합니다.
						</caption>
						<colgroup>
							<col style="width: 20%" />
							<col style="width: 15%" />
							<col style="width: 25%" />
							<col style="width: 20%" />
							<col style="width: 20%" />
						</colgroup>
						<thead>
							<tr>
								<th scope="col">Test01</th>
								<th scope="col">Test02</th>
								<th scope="col">Test03</th>
								<th scope="col">Test04</th>
								<th scope="col">Test05</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td b-title="Test01">td</td>
								<td b-title="Test02" class="align-right">335.00</td>
								<td b-title="Test03">td</td>
								<td b-title="Test04">2024-08-30</td>
								<td b-title="Test05">td</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<h3 class="subtit-md">DataTable</h3>
			<DataTable>
				<table>
					<caption>
						test, test, test 및 test(으)로 구성되어 있습니다.
					</caption>
					<colgroup>
						<col style="width: 6%" />
						<col style="width: 10%" />
						<col style="width: 10%" />
						<col style="width: 10%" />
						<col style="width: 10%" />
						<col style="width: 8%" />
						<col style="width: 12%" />
						<col style="width: 8%" />
						<col style="width: 8%" />
						<col style="width: 18%" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="align-right">1</td>
							<td>286</td>
							<td><a href="#" class="text-link">text-link</a></td>
							<td>서울</td>
							<td>S14</td>
							<td>2</td>
							<td class="align-right">5.5</td>
							<td></td>
							<td>Q</td>
							<td>test</td>
						</tr>
						<tr>
							<td class="align-right">2</td>
							<td>7</td>
							<td><a href="#" class="text-link">text-link</a></td>
							<td>서울</td>
							<td>S14</td>
							<td>1</td>
							<td class="align-right">5.1</td>
							<td></td>
							<td>Q</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</DataTable>

			<h4 class="subtit-md">DataTable</h4>
			<DataTable>
				<table class="mobile-w100">
					<caption>
						test, test, test 및 test(으)로 구성되어 있습니다.
					</caption>
					<colgroup>
						<col style="width: 32%" />
						<col style="width: 38%" />
						<col style="width: 30%" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">test</th>
							<th scope="col">test</th>
							<th scope="col">test</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="align-left"><a href="#" class="text-link">text-link</a></td>
							<td class="align-left"><a href="#" class="text-link">text-link</a></td>
							<td class="align-left"><a href="#" class="text-link">text-link</a></td>
						</tr>
					</tbody>
				</table>
			</DataTable>
		</div>
	</q-page>
</template>

<script setup>
import { ref } from 'vue'
import SubHeaderSection from 'src/layouts/uiux/common/SubHeaderSection.vue'
import DataTable from 'src/components/uiux/DataTable.vue'

// Breadcrumb(마지막 요소명이 서브상단 타이틀명과 같으면 생략)
const breadcrumbItems = ref([
	{
		menuName: 'Guide',
		menuLink: '/',
	},
])

// 서브상단 타이틀
const pageTitle = ref('Guide Table Data')
const pageDescription = ref('설명글 입니다.')
</script>
