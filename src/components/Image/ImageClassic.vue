<template>
    <img :src="img"
         alt="guess_image"
         width="350"
         :style="{ filter: `blur(${blur})` }"
    />
</template>

<script>
import testImage from '../../assets/images/106551l.webp';

export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    itteration: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      testImage: testImage,
    };
  },
  computed: {
    blur() {
      switch (this.itteration) {
        case 3:
          return '20px';
        case 2:
          return '10px';
        case 1:
          return '5px';
        default:
          return '0px';
      }
    },
  },
};
</script>

