<template>
	<div class="satisfact-box">
		<section class="top-sec">
			<p class="tit" aria-hidden="true">이 페이지의 정보 및 사용성에 대해 만족하십니까?</p>
			<q-option-group
				class="custom-optiongroup ver-sf"
				v-model="cstOGRadioSf"
				:options="cstOGRadioOptSf"
				aria-label="이 페이지의 정보 및 사용성에 대해 만족하십니까?"
				:inline="$q.screen.gt.sm"
			>
				<template v-slot:label="opt">
					<div :class="opt.iconClass">
						{{ opt.label }}
					</div>
				</template>
			</q-option-group>
		</section>
		<section class="btm-sec">
			<div class="search-box">
				<q-input
					type="textarea"
					class="custom-textarea col"
					:rows="$q.screen.lt.md ? '4' : '1'"
					v-model="cstTextareaSf"
					label="페이지 만족도 조사 의견 입력"
					placeholder="의견을 남겨주세요."
					maxlength="100"
				/>
				<q-btn class="custom-btn bd-blue size-sm width-sm-full" label="등록하기" />
			</div>
			<dl class="info-desc">
				<dt>담당자</dt>
				<dd>홍보마케팅부 홍길동 (02-1234-5678)</dd>
			</dl>
		</section>
	</div>
</template>

<script setup>
import { ref } from 'vue'

// 만족도 조사
const cstOGRadioSf = ref('SfOp1')
const cstOGRadioOptSf = [
	{
		label: '매우만족',
		value: 'SfOp1',
		iconClass: 'sf01',
	},
	{
		label: '만족',
		value: 'SfOp2',
		iconClass: 'sf02',
	},
	{
		label: '보통',
		value: 'SfOp3',
		iconClass: 'sf03',
	},
	{
		label: '불만족',
		value: 'SfOp4',
		iconClass: 'sf04',
	},
	{
		label: '매우불만족',
		value: 'SfOp5',
		iconClass: 'sf05',
	},
]

const cstTextareaSf = ref('')
</script>
