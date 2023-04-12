<script setup>
	import { ref } from 'vue';
	import Modal from '@/components/UI/Modal.vue';
	import { useCookies } from '@vueuse/integrations/useCookies';
	defineProps({
		open: {
			type: Boolean,
			default: false,
		},
	});
	const emit = defineEmits(['close', 'succes']);
	const cookiesUser = useCookies(['user']);
	const cookiesToken = useCookies(['token']);
	const checked = ref(false);
	const login = ref('');
	const password = ref('');
	const err = ref(false);

	const auth = async () => {
		try {
			const res = await fetch('https://api.av100.ru/v3/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'X-Api-Key': `${import.meta.env.VITE_API_KEY}`,
				},
				body: JSON.stringify({
					login: login.value,
					password: password.value,
					fromuser: 0,
				}),
			});
			const data = await res.json();
			if (data.errors) {
				err.value = data.errors[0].title;
				return;
			}
			cookiesUser.set('user', data.user);
			cookiesToken.set('token', data.token);
			emit('succes');
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
		<div class="auth__title">Авторизация</div>

		<form class="form-auth" @submit.prevent="auth">
			<div class="form-auth__control">
				<label for="log">Логин</label>
				<input type="text" id="log" v-model="login" />
			</div>
			<div class="form-auth__control">
				<label for="pass">Пароль</label>
				<input type="password" id="pass" v-model="password" />
			</div>
			<div style="display: flex">
				<input
					id="input-70"
					type="checkbox"
					class="checkbox-label__input"
					v-model="checked"
				/>
				<label for="input-70" class="checkbox-label__main">
					Я согласен с договором оферты
				</label>
			</div>
			<div class="settings__btn auth__btn">
				<button
					class="btn"
					:disabled="!checked || !login.length || !password.length"
				>
					Войти
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
