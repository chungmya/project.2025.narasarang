<template>
	<q-layout view="hHh lpr fff" class="g-wrap sub-page">
		<SkipSection></SkipSection>
		<HeaderSection></HeaderSection>

		<!-- container -->
		<q-page-container class="g-container" id="pageContent">
			<slot></slot>
		</q-page-container>
		<!-- //container -->

		<QuickSection></QuickSection>
		<FooterSection></FooterSection>
	</q-layout>
</template>

<script setup>
import SkipSection from './common/SkipSection.vue'
import HeaderSection from './common/HeaderSection.vue'
import QuickSection from './common/QuickSection.vue'
import FooterSection from './common/FooterSection.vue'
</script>
