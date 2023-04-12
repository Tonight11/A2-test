<script setup>
	import { ref, onMounted, onUnmounted } from 'vue';
	const previousOverflow = ref();

	onMounted(() => {
		previousOverflow.value = document.body.style.overflow;

		document.body.style.overflow = 'hidden';
	});

	onUnmounted(() => {
		document.body.style.overflow = previousOverflow.value;
	});
</script>

<template>
	<div class="modal-shadow" @click="$emit('close')">
		<div class="modal-content" @click.stop>
			<div class="close" @click="$emit('close')">&#10005;</div>
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.modal-shadow {
		display: none;
		background: rgba(0, 0, 0, 0.8);
		bottom: 0;

		left: 0;
		overflow-x: hidden;
		overflow-y: auto;
		position: fixed;
		right: 0;
		top: 0;
		transition: opacity 0.3s;
		z-index: 200;

		& .close {
			position: absolute;
			top: 5px;
			right: 5px;
			cursor: pointer;
			color: #2dc574;
			font-weight: 600;
			width: 20px;
			height: 20px;
			transition: all 0.3s linear;
			transform-origin: center;

			&:hover {
				transform: rotate(90deg);
				transform-origin: center;
				color: black;
			}
		}
	}

	.modal-content {
		position: relative;
		background: #fff;
		margin: auto;
		opacity: 1;
		padding: 3rem;
		position: relative;
		transition: opacity 1s;
		width: 92%;
		max-width: 440px;
	}
</style>
