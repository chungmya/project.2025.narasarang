<template>
	<HeaderPc v-if="$q.screen.width >= 1440" :menus="menus" />
	<HeaderMobile v-else :menus="menus" />
</template>

<script setup>
import HeaderPc from './HeaderPc.vue'
import HeaderMobile from './HeaderMobile.vue'
import { ref, onMounted } from 'vue'

// 메뉴 데이터
const menus = ref([
	{
		label: '나라사랑카드',
		imgSrc: '/images/common/img-gnb-cate01.png',
		showInPc: true,
		showInPcAll: true,
		showInMobile: true,
		subMenus: [
			{
				label: '카드안내',
				link: '/uiux/_guide/PAGEID-M0020',
				subMenus: [
					{ label: '카드서비스(혜택)', link: '/uiux/_guide/GuideHome' },
					{ label: '체크카드', link: '/uiux/_guide/PAGEID-M0030' },
					{ label: '전자통장', link: '/uiux/_guide/PAGEID-M0030' },
					{ label: '카드분실/재발급', link: '/uiux/_guide/PAGEID-M0030', blank: '_blank' },
				],
			},
			{
				label: '병역정보조회',
				link: '/uiux/_guide/PAGEID-M0040',
				subMenus: [
					{ label: '병역증 전역증조회', link: '/uiux/_guide/PAGEID-M0040' },
					{ label: '더미단말기연결안내', link: '/uiux/_guide/PAGEID-M0050' },
					{ label: '회원증명서제출', link: '/uiux/_guide/PAGEID-M0060' },
				],
			},
			{
				label: '여비계좌',
				link: '/uiux/_guide/PAGEID-M0070',
				subMenus: [
					{ label: '계좌안내', link: '/uiux/_guide/PAGEID-M0070' },
					{ label: '계좌조회', link: '/uiux/_guide/PAGEID-M0080' },
					{ label: '계좌변경', link: '/uiux/_guide/PAGEID-M0090' },
				],
			},
			{
				label: '가상계좌서비스',
				link: '/uiux/_guide/PAGEID-M0100',
				subMenus: [
					{ label: '변경하기', link: '/uiux/_guide/PAGEID-M0100' },
					{ label: '해지하기', link: '/uiux/_guide/PAGEID-M0110' },
					{ label: '자동환불계좌 등록', link: '/uiux/_guide/PAGEID-M0120' },
				],
			},
			{
				label: '가상계좌 잔액 거래',
				link: '/uiux/_guide/PAGEID-M0130',
				subMenus: [
					{ label: '환불하기', link: '/uiux/_guide/PAGEID-M0100' },
					{ label: '이용내역조회', link: '/uiux/_guide/PAGEID-M0110' },
				],
			},
			{
				label: '병상해보험',
				link: '/uiux/_guide/PAGEID-M0150',
			},
			{
				label: '인증서비스',
				link: '/uiux/_guide/PAGEID-M0150',
				subMenus: [
					{ label: '장병내일준비적금 가입자격확인서', link: '/uiux/_guide/PAGEID-M0100' },
					{ label: '장병내일준비적금 예상수령액 조회', link: '/uiux/_guide/PAGEID-M0110' },
				],
			},
		],
	},
	{
		label: '군e-러닝',
		imgSrc: '/images/common/img-gnb-cate02.png',
		showInPc: true,
		showInPcAll: true,
		showInMobile: true,
		subMenus: [
			{
				label: '학위강좌',
				link: '/uiux/_guide/PAGEID-M0210',
				blank: '_blank',
			},
		],
	},
	{
		label: '청년DREAM 국군드림',
		imgSrc: '/images/common/img-gnb-cate02.png',
		showInPc: true,
		showInPcAll: true,
		showInMobile: true,
		subMenus: [
			{
				label: 'D(학업·역량)',
				link: '/uiux/_guide/PAGEID-M0210',
			},
		],
	},
	{
		label: '군e-러닝',
		imgSrc: '/images/common/img-gnb-cate02.png',
		showInPc: true,
		showInPcAll: true,
		showInMobile: true,
		subMenus: [
			{
				label: '학위강좌',
				link: '/uiux/_guide/PAGEID-M0210',
			},
		],
	},
	{
		label: '자기개발',
		imgSrc: '/images/common/img-gnb-cate02.png',
		showInPc: true,
		showInPcAll: true,
		showInMobile: true,
		subMenus: [
			{
				label: '마이페이지',
				link: '/uiux/_guide/PAGEID-M0210',
			},
		],
	},
	{
		label: '이용안내',
		imgSrc: '/images/common/img-gnb-cate02.png',
		showInPc: true,
		showInPcAll: true,
		showInMobile: true,
		subMenus: [
			{
				label: '공지사항 ',
				link: '/uiux/_guide/PAGEID-M0210',
			},
			{
				label: '잦은질문 ',
				link: '/uiux/_guide/PAGEID-M0210',
			},
			{
				label: '1:1게시판 ',
				link: '/uiux/_guide/PAGEID-M0210',
			},
			{
				label: '모바일앱소개 ',
				link: '/uiux/_guide/PAGEID-M0210',
			},
			{
				label: '설문조사 ',
				link: '/uiux/_guide/PAGEID-M0210',
			},
			{
				label: '서비스이용안내 ',
				link: '/uiux/_guide/PAGEID-M0210',
			},
			{
				label: '사용자 메뉴얼 ',
				link: '/uiux/_guide/PAGEID-M0210',
			},
			{
				label: '이벤트&공모전',
				link: '/uiux/_guide/PAGEID-M0210',
			},
		],
	},
])

// document.title 설정
onMounted(() => {
	document.title = '2뎁스 | 1뎁스'
})
</script>
