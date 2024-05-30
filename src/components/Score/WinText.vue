<template>
  <h1 :class="win ? 'font-Lemon text-winColor text-5xl' : 'font-Lemon text-loseColor text-5xl'">
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
