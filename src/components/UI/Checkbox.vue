<script setup>
	const props = defineProps(['modelValue']);
	const emit = defineEmits(['update:modelValue']);
	const change = () => {
		emit('update:modelValue', !props.modelValue);
	};
</script>

<template>
	<div class="toggle normal">
		<input
			type="checkbox"
			id="normal"
			:checked="modelValue"
			:value="modelValue"
			@change="change"
		/>
		<label for="normal" name="normal" class="toggle-item"></label>
	</div>
</template>

<style lang="scss" scoped>
	input {
		overflow: hidden;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
	}
	.toggle {
		position: relative;
		display: inline-block;
	}
	label.toggle-item {
		width: 32px;
		background: #bababa;
		height: 19px;
		display: inline-block;
		border-radius: 50px;
		position: relative;
		transition: all 0.3s ease;
		transform-origin: 20% center;
		cursor: pointer;
		&::before {
			content: '';
			position: absolute;
			display: block;
			top: 0.25em;
			left: 0.25em;
			border-radius: 2em;
			transition: all 0.3s ease;
		}
	}
	.normal {
		label {
			border: 1px solid black;
			background-color: white;
			&::before {
				content: '';
				top: 1px;
				left: 1px;
				border: none;
				width: 15px;
				height: 15px;
				box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
				background: #bababa;
				transform: rotate(-25deg);
			}
		}
	}
	#normal:checked + label {
		border: 1px solid #2dc574;
		&::before {
			left: 14px;
			background: #2dc574;
		}
	}
</style>
