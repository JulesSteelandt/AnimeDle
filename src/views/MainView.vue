<template>
  <div class="h-[93vh] bg-main flex flex-col justify-center items-center">
    <section class="flex flex-col lg:flex-row h-full w-full items-center">
      <img :src="isSmallScreen ? imgAccueil_res : imgAccueil" alt="image de pleins d'anime" :class="[isSmallScreen ? 'w-[100vw]' : 'w-[40vw]', 'max-w-[600px]']"/>
      <div class="items-center justify-center p-10">
        <h1  class="font-Itim text-mainText drop-shadow-2xl text-[8vw] " >
          Bienvenue sur
          <p class="font-Lemon font-bold underline text-[10vw]">
            AnimeDle
          </p>
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import imgAccueil from '@/assets/images/accueil.png';
import imgAccueil_res from '@/assets/images/accueil_res.png';

export default {
  data() {
    return {
      imgAccueil,
      imgAccueil_res,
      isSmallScreen: window.innerWidth < 1024,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isSmallScreen = window.innerWidth < 1024;
    },
  },
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles supplémentaires ici si nécessaire */
</style>
