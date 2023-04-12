<script setup>
	import Register from '@/components/Auth/Register.vue';
	import { ref } from 'vue';
	import Login from '../components/Auth/Login.vue';
	import { useRouter } from 'vue-router';

	const login = ref(false);
	const register = ref(false);
	const router = useRouter();

	const registerSucces = () => {
		register.value = false;
		login.value = true;
	};
	const loginSucess = () => {
		login.value = true;
		router.push('/settings');
	};
</script>

<template>
	<div>
		<h1>AuthPage</h1>
		<div class="auth-btn">
			<button class="btn" @click="login = true">Логин</button>
			<button class="btn" @click="register = true">Регистрация</button>
		</div>
		<Teleport to="body">
			<Register
				@succes="registerSucces"
				:open="register"
				@close="register = false"
			/>
		</Teleport>
		<Teleport to="body">
			<Login @succes="loginSucess" :open="login" @close="login = false" />
		</Teleport>
	</div>
</template>

<style lang="scss">
	.auth-btn {
		display: flex;
		gap: 20px;
	}
</style>
