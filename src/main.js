import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import vSelect from 'vue-select';
import router from './router';

createApp(App).use(router).component('v-select', vSelect).mount('#app');
