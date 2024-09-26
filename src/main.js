import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import PrimeVue from "primevue/config";
// import Aura from '@primevue/themes/aura';
import i18n from './TranslateI18';

const app = createApp(App)

app.use(router)
app.use(i18n);
app.mount('#app')
