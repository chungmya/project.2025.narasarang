<template>
	<q-option-group
		:model-value="modelValue"
		:options="options"
		:inline="inline"
		@update:model-value="updateValue"
	></q-option-group>
</template>

<script setup>
defineProps({
	modelValue: {
		type: [String, Number],
		required: true,
	},
	options: {
		type: Array,
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
