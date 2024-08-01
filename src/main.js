import { createApp } from 'vue';
import App from './App.vue';
import generalConfig from './config';

const app = createApp(App);

generalConfig(app);

app.mount('#app');
