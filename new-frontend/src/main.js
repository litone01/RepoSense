import { createApp } from 'vue';
import { dom } from '@fortawesome/fontawesome-svg-core';
import App from './App.vue';
import store from './store/store';


createApp(App).use(store).mount('#app');
dom.watch();
