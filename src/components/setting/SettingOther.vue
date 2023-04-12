<script setup>
	import { ref } from 'vue';
	import { useCookies } from '@vueuse/integrations/useCookies';
	import SettingItem from './SettingItem.vue';

	const cookiesUser = useCookies().getAll();
	const city = ref([
		{
			text: 'Калининград',
		},
		{
			text: 'Москва',
		},
		{
			text: 'Самара',
		},
		{
			text: 'Екатеринбург',
		},
		{
			text: 'Якутск',
		},
		{
			text: 'Иркутск',
		},
		{
			text: 'Владивосток',
		},
		{
			text: 'Камчатка',
		},
		{
			text: 'Магадан',
		},
		{
			text: 'Омск',
		},
	]);
	const selected = ref({
		text: 'Москва',
	});
	const props = defineProps(['info']);
	const save = async () => {
		const res = await fetch(
			`https://api.av100.ru/v3/user/${cookiesUser.user.id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'X-User-Token': cookiesUser.token,
					'X-Api-Key': `${import.meta.env.VITE_API_KEY}`,
				},
				body: JSON.stringify({
					...props?.info,
					email: localStorage.getItem('emailUser'),
				}),
			}
		);
		const data = await res.json();
		console.log(data);
	};
</script>

<template>
	<SettingItem title="Прочие настройки">
		<div class="settings__other">
			<div class="settings__select">
				<label for="select">Часовой пояс</label>
				<v-select
					v-model="selected"
					class="settings__select-item"
					:options="city"
					label="text"
					id="select"
					:searchable="false"
					:clearable="false"
				></v-select>
			</div>
			<div style="display: flex">
				<input
					id="input-58"
					type="checkbox"
					class="checkbox-label__input"
					value="true"
				/>
				<label for="input-58" class="checkbox-label__main">
					Автоматически переходить к новым объявлениям
				</label>
			</div>
			<div style="display: flex">
				<input
					id="input-59"
					type="checkbox"
					class="checkbox-label__input"
					value="true"
				/>
				<label for="input-59" class="checkbox-label__main">
					Включить цвета в ленте
				</label>
			</div>
			<div class="settings__btn">
				<button class="btn" @click="save">Сохранить</button>
			</div>
		</div>
	</SettingItem>
</template>

<style lang="scss">
	@import 'vue-select/dist/vue-select.css';

	.vs__dropdown-menu {
		background-color: #2dc574;
		color: white;
	}

	.settings {
		&__other {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
		&__btn {
			padding-top: 15px;
			border-top: 1px solid #e1e1e3;
		}
		&__select {
			display: flex;
			align-items: center;
			gap: 30px;

			&-item {
				width: 100%;
				flex: 1;
			}
		}
	}
</style>
