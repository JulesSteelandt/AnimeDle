<template>
  <div>
    <header>
      <Navbar />
    </header>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router';
import Navbar from '@/components/navbar/Navbar.vue';
</script>
