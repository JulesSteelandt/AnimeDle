<template>
  <div>
    <v-app class="bg-main">
      <header>
        <Navbar />
      </header>
      <v-main>
        <RouterView />
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router';
import Navbar from '@/components/navbar/Navbar.vue';
</script>
