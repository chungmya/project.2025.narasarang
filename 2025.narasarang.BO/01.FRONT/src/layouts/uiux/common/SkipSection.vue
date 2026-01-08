<template>
	<nav class="skip-nav" aria-label="Skip Navigation">
		<a href="#pageContent">본문 바로가기</a>
		<a :href="!$q.screen.lt.lg ? '#gnb' : '#mGnb'">주메뉴 바로가기</a>
	</nav>
</template>

<script setup></script>
