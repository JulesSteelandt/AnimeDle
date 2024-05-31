<template>
  <div class="flex items-end">
    <img :src="heart" alt="heart" width="50" height="50" />
    <span class="font-Lemon text-white">x{{ life }}</span>
  </div>
</template>

<script>
import heart from '../../assets/images/heart-icon.png';

export default {
  props: {
    life: Number,
  },
  data() {
    return {
      heart,
    };
  },
};
</script>
