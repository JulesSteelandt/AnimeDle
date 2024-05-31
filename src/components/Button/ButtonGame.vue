<template>
  <button class="font-Itim text-2xl text-secondary bg-button px-2 rounded-[22px] shadow-dropCustom">
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

