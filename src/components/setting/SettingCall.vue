<script setup>
	import SettingItem from './SettingItem.vue';
</script>

<template>
	<SettingItem title="Звонок через SIP" :checkbox="true">
		<div class="settings__text">
			Включите эту функцию чтобы Авито и другие площадки не блокировали ваш
			аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.
		</div>
	</SettingItem>
</template>

<style lang="scss" scoped></style>
