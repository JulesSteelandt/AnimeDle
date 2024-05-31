<template>
  <div class="h-[90vh] bg-main">
    <div class="flex h-[80vh] flex-col items-center justify-center">

      <ButtonGamemode text="Classic" link="/play/classic" @link-click="chooseGamemode" />

      <ButtonGamemode text="Guess" link="/play/guess" @link-click="chooseGamemode" />

    </div>
  </div>
</template>

<script>
import ButtonGamemode from '../components/Button/ButtonGamemode.vue';

export default {
  components: {
    ButtonGamemode,
  },
  methods: {
    chooseGamemode(mode) {
      this.$router.push(mode);
    },
  },
};
</script>
