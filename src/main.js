import {createApp} from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './assets/main.css';
import 'vuetify/styles';
import {createVuetify} from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);

// Utilisation du routeur
app.use(router);




// Configuration de Vuetify
const vuetify = createVuetify();

// Utilisation de Vuetify
app.use(vuetify).mount('#app');
