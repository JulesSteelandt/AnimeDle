<template>
  <h1 :class="win ? 'font-Lemon text-winColor text-5xl text-green-400' : 'font-Lemon text-loseColor text-5xl text-red-600'">
    {{ win ? 'Bravo' : 'Perdu' }}
  </h1>
</template>

<script>
export default {
  props: {
    win: Boolean,
  },
};
</script>
