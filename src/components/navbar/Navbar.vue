<template>
  <v-row class="flex h-[11vh]  items-center space-x-10 bg-secondary p-5 drop-shadow-md">
    <RouterLink to="/">
      <h1 class="font-Lemon text-5xl text-mainText drop-shadow-2xl">
        <b>AnimeDle</b>
      </h1>
    </RouterLink>
    <RouterLink class="font-Lemon text-2xl text-mainText drop-shadow-2xl" to="/play">
      jouer
    </RouterLink>
    <RouterLink class="font-Lemon text-2xl text-mainText drop-shadow-2xl" to="/rules">
      règles
    </RouterLink>
  </v-row>
</template>

<script setup>
import {RouterLink} from 'vue-router';
</script>
