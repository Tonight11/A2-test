<script setup>
	import { onMounted, ref } from 'vue';
	import SettingCall from './SettingCall.vue';
	import SettingAccount from './SettingAccount.vue';
	import SettingAlerts from './SettingAlerts.vue';
	import SettingTransfer from './SettingTransfer.vue';
	import SettingOther from './SettingOther.vue';

	import { useCookies } from '@vueuse/integrations/useCookies';
	const cookiesUser = useCookies().getAll();

	const info = ref({});

	onMounted(async () => {
		const res = await fetch(
			`https://api.av100.ru/v3/user/${cookiesUser.user.id}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'X-User-Token': cookiesUser.token,
					'X-Api-Key': `${import.meta.env.VITE_API_KEY}`,
				},
			}
		);
		const data = await res.json();
		info.value = data;
	});
</script>

<template>
	<div class="settings__row">
		<SettingOther :info="info" />
		<SettingTransfer />
		<SettingAlerts :info="info" />
		<SettingAccount :info="info" />
		<SettingCall />
	</div>
</template>

<style lang="scss" scoped>
	.settings__row {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
