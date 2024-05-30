<template>
  <p className="font-Itim text-3xl text-mainText">{{ text }} : {{ score }}</p>
</template>

<script>
export default {
  props: {
    text: String,
    score: Number,
  },
};
</script>
