<template>
  <h1
    class="font-Itim text-2xl text-white rounded text-center max-w-fit px-2"
    :class="{
      'bg-orange-500': close,
      'bg-red-500': !close,
    }"
  >
    {{ animeName }}
  </h1>
</template>

<script>
export default {
  props: {
    close: Boolean,
    animeName: String,
  },
};
</script>
