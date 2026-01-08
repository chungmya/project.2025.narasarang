<template>
	<button :class="'commonBtn ' + className" :type="type">
		{{ label }}
	</button>
</template>

<script setup>
defineProps({
	type: {
		type: String,
		default: 'button',
	},
	label: {
		type: String,
		default: 'label',
	},
	className: {
		type: String,
		default: 'className',
	},
})
</script>

<style scoped lang="scss">
// @import '../css/quasar.variables.scss';

.commonBtn {
	padding: 0.75em 2em;
	border-radius: 4px;
	background: $primary;
	color: #fff;
	// font-size: map-get($font-sizes, 'body');
	border: none;
	cursor: pointer;
	transition: background 0.2s;
	&:hover {
		background: $secondary;
	}
	// @include respond('md') {
	// 	font-size: 0.9rem;
	// 	padding: 0.5em 1.2em;
	// }
}
</style>
