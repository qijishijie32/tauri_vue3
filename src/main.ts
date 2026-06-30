import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'virtual:uno.css';

import App from './App.vue';
import { i18n } from './locales';
import router from './router';
import pinia from './stores';
import './styles/index.scss';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(ElementPlus);

app.mount('#app');
