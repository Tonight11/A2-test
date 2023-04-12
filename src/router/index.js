import { createRouter, createWebHistory } from 'vue-router';
import { useCookies } from '@vueuse/integrations/useCookies';

const routes = [
	{
		path: '/',
		name: 'Auth',
		component: () => import('@/pages/AuthPage.vue'),
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () => import('@/pages/SettingsPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const cookiesUser = useCookies();
	if (to.path === '/settings' && cookiesUser.getAll().user) {
		next();
	} else if (to.path === '/' && cookiesUser.getAll().user) {
		next('/settings');
	} else if (to.path === '/settings' && !cookiesUser.getAll().user) {
		next('/');
	} else {
		next();
	}
});
export default router;
