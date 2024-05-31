import {createRouter, createWebHistory} from 'vue-router';
import Rules from '@/views/Rules.vue';
import Gamemode from '@/views/Gamemode.vue';
import MainView from '@/views/MainView.vue';
import ClassicManager from '@/views/ClassicManager.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: MainView,
      },
      {
        path: '/rules',
        name: 'rules',
        component: Rules,
      },
      {
        path: '/play',
        name: 'play',
        component: Gamemode,
      },
      {
        path: '/play/classic',
        name: 'classic',
        meta: {title: 'Classic'},
        component: ClassicManager,
      },
    ],
  })
;

export default router;
