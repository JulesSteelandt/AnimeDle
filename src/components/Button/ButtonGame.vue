<template>
  <button class="font-Itim text-2xl text-second bg-button px-2 rounded-[22px] shadow-dropCustom mt-2">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

