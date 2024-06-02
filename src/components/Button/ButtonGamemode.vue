<template>
  <div class="my-7 flex flex-col lg:flex-row space-x-5 space-y-10 lg:space-y-0">
    <button
      class="bg-button shadow-button_sh flex h-16 w-64 items-center justify-center rounded-2xl text-5xl shadow-[0_0_25px_6px] font-Lemon text-second"
      @click="$emit('link-click',link)"
    >
      {{ text }}
    </button>

    <SwitchGamemode v-model="anime" @change:type="" />
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
