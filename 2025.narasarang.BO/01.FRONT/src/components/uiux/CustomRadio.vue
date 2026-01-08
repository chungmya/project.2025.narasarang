<template>
	<q-radio
		:model-value="modelValue"
		:val="value"
		:label="label"
		:disable
		@update:model-value="updateValue"
	/>
</template>

<script setup>
defineProps({
	modelValue: String,
	label: String,
	value: String,
	disable: Boolean,
})

const emit = defineEmits(["update:modelValue"])

function updateValue(val) {
	emit("update:modelValue", val)
}
</script>
