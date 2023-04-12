<script setup>
	
</script>

<template>
	<section class="settings">
		<div class="container">
			<router-view />
			
		</div>
	</section>
</template>

<style lang="scss">
	.settings {
		padding-top: 40px;
		padding-bottom: 40px;
		&__title {
			color: #000;
			font-size: 26px;
			line-height: 1.25;
		}

		&__text {
			color: #686869;
			font-size: 14px;
			font-weight: 400;
		}
	}
</style>
