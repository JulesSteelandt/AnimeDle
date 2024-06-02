<template>
  <v-app-bar app class="drop-shadow-md" :color="COLORS.SECONDARY">
    <v-app-bar-nav-icon v-if="!isLargeScreen" @click="drawer = !drawer" />

    <RouterLink to="/">
      <h1 v-if="isLargeScreen" class="font-Lemon text-5xl text-mainText drop-shadow-2xl px-3">
        <b>AnimeDle</b>
      </h1>
      <h1 v-else class="font-Lemon text-5xl text-mainText drop-shadow-2xl px-3">
        <b>A</b>
      </h1>
    </RouterLink>

    <v-spacer></v-spacer>

    <div v-if="isLargeScreen" class="space-x-10 px-10">
      <RouterLink class="font-Lemon text-2xl text-mainText drop-shadow-2xl" to="/play">
        jouer
      </RouterLink>
      <RouterLink class="font-Lemon text-2xl text-mainText drop-shadow-2xl" to="/rules">
        règles
      </RouterLink>
    </div>
  </v-app-bar>

  <v-navigation-drawer app v-model="drawer" temporary class="md:hidden" :color="COLORS.SECONDARY">
    <v-list>
      <v-list-item>
        <RouterLink class="font-Lemon text-2xl text-mainText drop-shadow-2xl" to="/play">
          jouer
        </RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink class="font-Lemon text-2xl text-mainText drop-shadow-2xl" to="/rules">
          règles
        </RouterLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { COLORS } from '@/constants/colors.js';

export default {
  data() {
    return {
      COLORS,
      drawer: false,
      isLargeScreen: window.innerWidth >= 640,
    };
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.isLargeScreen = window.innerWidth >= 640;
    },
  },
};
</script>
