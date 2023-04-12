<script setup>
	import { ref } from 'vue';
	import { useLocalStorage } from '@vueuse/core';
	import SettingItem from './SettingItem.vue';
	import InfoIcon from '@/components/Icon/InfoIcon.vue';
	import EditIcon from '@/components/Icon/EditIcon.vue';
	const emailVisible = ref(false);
	const telegramVisible = ref(false);
	const email = useLocalStorage('emailUser', '');
	defineProps(['info']);
</script>

<template>
	<SettingItem title="Оповещения о новых подборках ">
		<div class="settings__text">
			Выберите, куда будут приходить уведомления при появлении автомобилей,
			которые подходят под критерии вашей подборки.
		</div>
		<div class="settings-alert__form">
			<div class="settings-alert__title">Уведомления</div>
			<div class="checkbox">
				<label>
					<input
						type="radio"
						checked
						name="alert"
						v-model="relocate"
						value="off"
					/>
					Выкл
				</label>
			</div>
			<div class="checkbox">
				<label>
					<input
						type="radio"
						disabled
						name="alert"
						v-model="relocate"
						value="push"
					/>
					Push
				</label>
				<InfoIcon />
			</div>
			<div class="checkbox">
				<label>
					<input type="radio" name="alert" v-model="relocate" value="email" />
					Email
				</label>
				<small v-if="!!info.email && !emailVisible" style="color: #2dc574">{{
					info.email
				}}</small>
				<input type="text" v-if="emailVisible" v-model="email" />
				<EditIcon
					v-if="!emailVisible || !!info.email"
					@click="emailVisible = !emailVisible"
				/>
			</div>
			<div class="checkbox checkbox-telegram">
				<label>
					<input
						type="radio"
						name="alert"
						v-model="relocate"
						value="telegram"
					/>
					Telegram ID
				</label>
				<input type="text" v-if="telegramVisible" />
				<EditIcon
					v-if="!telegramVisible"
					@click="telegramVisible = !telegramVisible"
				/>
			</div>
		</div>
	</SettingItem>
</template>

<style lang="scss">
	.settings {
		&__text {
			margin-bottom: 20px;
		}
	}
	.settings-alert {
		&__title {
			margin-bottom: 20px;
		}
		&__form {
		}
	}
	.checkbox {
		border-bottom: 1px solid #e1e1e3;
		padding-top: 15px;
		padding-bottom: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& label {
			font-size: 14px;
			font-weight: 400;
		}
	}
	.checkbox-telegram {
		& label {
			color: #2dc574;
			text-decoration: underline;
		}
	}
</style>
