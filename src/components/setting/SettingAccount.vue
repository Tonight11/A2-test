<script setup>

	import SettingItem from './SettingItem.vue';
	defineProps(['info']);
</script>

<template>
	<SettingItem title=" Учётная запись">
		<div class="settings__form form">
			<div class="form__control">
				<label for="face">Компания</label>
				<input type="text" :value="info?.companyname" />
			</div>
			<div class="form__control">
				<label for="face">Логин</label>
				<input type="text" :value="info?.login" />
			</div>
			<div class="form__control">
				<label for="face">Номер телефона</label>
				<input type="text" :value="info?.phone" />
			</div>
			<div class="form__control">
				<label for="face">Имя</label>
				<input type="text" :value="info?.fname" />
			</div>
			<div class="form__control">
				<label for="face">Фамилия</label>
				<div class="form__input-last">
					<input type="text" />
					<p>* Не обязательно</p>
				</div>
			</div>
		</div>
	</SettingItem>
</template>

<style lang="scss" scoped>
	.settings {
		&__form {
		}
	}
	.form {
		&__control {
			display: flex;
			margin-bottom: 20px;
		}

		&__input-last {
			width: 100%;
			& p {
				color: #a3a3a3;
				display: block;
				font-size: 12px;
				margin-top: 5px;
			}
		}

		& label {
			flex: 0 0 120px;
			font-weight: 500;
			margin-bottom: 0;
			margin-right: 1px;
			margin-top: 6px;
			max-width: 12rem;
		}
		& input {
			flex: 1;
			width: 100%;
		}
	}
</style>
