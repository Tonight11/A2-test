<script setup>
	import Checkbox from '@/components/UI/Checkbox.vue';
	defineProps({
		title: String,
		checkbox: Boolean,
	});
</script>

<template>
	<div class="settings__column">
		<div class="settings__item">{{ title }} <Checkbox v-if="checkbox" /></div>
		<div class="settings__item">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.settings {
		&__column {
			display: flex;
		}

		&__item {
			&:first-child {
				display: flex;
				gap: 10px;
				min-width: 250px;
				max-width: 250px;
			}
			&:last-child {
				width: 100%;
				max-width: 490px;
			}
		}
	}
</style>
