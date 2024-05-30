<template>
  <div class="my-7 flex space-x-5">
    <router-link
      class="bg-button shadow-button_sh flex h-16 w-64 items-center justify-center rounded-2xl text-5xl shadow-[0_0_25px_6px]"
      :to="link"
    >
      <button class="font-Lemon text-secondary">{{ text }}</button>
    </router-link>

    <SwitchGamemode v-model="anime" />
  </div>
</template>

<script>
import SwitchGamemode from '../Switch/SwitchGamemode.vue';

export default {
  props: {
    text: String,
    link: String,
  },
  data() {
    return {
      anime: false,
    };
  },
  components: {
    SwitchGamemode,
  },
};
</script>
