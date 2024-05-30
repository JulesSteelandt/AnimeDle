<template>
  <div class="space-x-5">
    <img :src="testImage" alt="LIW" width="343" height="480" />
  </div>
</template>

<script>
import testImage from '../../assets/images/106551l.webp';

export default {
  data() {
    return {
      testImage: testImage,
    };
  },
};
</script>