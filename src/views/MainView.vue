<template>
  <div class="h-[93vh] bg-main">
    <section class="flex h-full">
      <div class="h-2/4 w-2/4">
        <img :src="imgAccueil" alt="image de pleins d'anime" class="rounded-r-[1300px] bg-mainText" />
      </div>
      <div class="flex h-3/4 w-full items-center justify-center">
        <h1 class="font-Itim text-9xl text-mainText drop-shadow-2xl">
          Bienvenue sur
          <p class="font-Lemon font-bold underline">
            AnimeDle
          </p>
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import imgAccueil from '@/assets/images/accueil.png';

export default {
  data() {
    return {
      imgAccueil,
    };
  },
};


</script>
