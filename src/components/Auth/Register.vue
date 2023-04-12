<script setup>
	import { ref } from 'vue';
	import Modal from '@/components/UI/Modal.vue';
	defineProps({
		open: {
			type: Boolean,
			default: false,
		},
	});
	const emit = defineEmits(['close', 'succes']);

	const checked = ref(false);
	const num = ref('');
	const err = ref(false);

	const register = async () => {
		try {
			const res = await fetch('https://api.av100.ru/v3/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'X-Api-Key': `${import.meta.env.VITE_API_KEY}`,
				},
				body: JSON.stringify({
					login: num.value,
				}),
			});

			if (res.status === 200) {
				emit('succes');
				return;
			}
			const data = await res.json();

			if (data.errors) {
				err.value = data.errors[0].title;
				return
			}
		} catch (error) {
			console.log(error);
		}
	};
</script>

<template>
	<Modal
		:class="{
			show: open,
		}"
		@close="$emit('close')"
	>
		<div class="auth__title">Регистрация</div>
		<div class="auth__text settings__text">
			Введите номер телефона и получите доступ к системе на 2 часа.
		</div>
		<form class="form-auth" @submit.prevent="register">
			<div class="form-auth__control">
				<label for="tel">Телефон</label>
				<input type="text" id="tel" v-model="num" />
			</div>
			<div style="display: flex">
				<input
					id="input-59"
					type="checkbox"
					class="checkbox-label__input"
					v-model="checked"
				/>
				<label for="input-59" class="checkbox-label__main">
					Я согласен с договором оферты
				</label>
			</div>
			<div class="settings__btn auth__btn">
				<button class="btn" :disabled="!checked || !num.length">
					Сохранить
				</button>
				<small v-if="err" style="color: red">{{ err }}</small>
			</div>
		</form>
	</Modal>
</template>

<style lang="scss">
	.show {
		display: flex !important;
	}

	.auth {
		&__title {
			margin-bottom: 20px;
		}

		&__text {
			margin-bottom: 20px;
		}

		&__btn {
			margin-top: 20px;

			& .btn {
				&:disabled {
					background-color: rgb(211, 67, 67);
					cursor: not-allowed;
				}
			}
		}
	}
	.form-auth {
		&__control {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 10px;
		}
	}
</style>
