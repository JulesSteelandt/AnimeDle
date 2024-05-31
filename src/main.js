import './assets/main.css';

import {createApp} from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'vuetify/styles';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);

app.use(router);


const vuetify = createVuetify({
  theme: false,
  components,
  directives,
});

app.use(vuetify).mount('#app');

 