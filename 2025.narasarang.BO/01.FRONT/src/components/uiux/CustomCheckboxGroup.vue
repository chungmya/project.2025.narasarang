<template>
	<q-option-group
		:model-value="modelValue"
		:options="options"
		:inline="inline"
		@update:model-value="updateValue"
		type="checkbox"
	/>
</template>

<script setup>
defineProps({
	modelValue: {
		type: Array,
		default: () => [],
		required: true,
	},
	options: {
		type: Array,
		default: () => [],
		required: true,
	},
	inline: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(["update:modelValue"])

function updateValue(val) {
	emit("update:modelValue", val)
}
</script>
