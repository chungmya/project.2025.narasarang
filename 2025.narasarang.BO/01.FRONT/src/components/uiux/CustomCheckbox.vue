<template>
	<q-checkbox
		:model-value="modelValue"
		:val="value"
		:label="label"
		:disable
		@update:model-value="updateValue"
	></q-checkbox>
</template>

<script setup>
defineProps({
	modelValue: [String, Number, Boolean, Array],
	label: String,
	value: [String, Number, Boolean],
	disable: Boolean,
})

const emit = defineEmits(["update:modelValue"])

function updateValue(val) {
	emit("update:modelValue", val)
}
</script>
