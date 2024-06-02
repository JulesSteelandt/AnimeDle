<template>
  <div class="h-[93vh] bg-main flex flex-col items-center">
    <div class="p-3">
      <ScoreMode text="Streak" :score="streak" />
      <ScoreMode text="Max Streak" :score="maxStreak" />
    </div>
    <div class="items-center">
      <div class="flex lg:flex-row flex-col lg:items-end items-center pb-3 justify-center">
        <ImageClassic :img="animeImage" :itteration="try_remaining" />
        <LiveCount :life="life" />
      </div>
      <div v-if="finish" class="text-center font-Itim text-white text-3xl">
        <WinText :win="win" />
        <p>Réponse :</p>
        <p class="pb-3">{{ animeName }}</p>
        <ButtonGamemode :text="win ? 'suivant' : 'recommencez'" />
      </div>
      <div v-else>
        <InputAnime />
      </div>
    </div>
  </div>
</template>

<script>
import InputAnime from '@/components/Input/InputAnime.vue';
import WinText from '@/components/Score/WinText.vue';
import LiveCount from '@/components/Score/LiveCount.vue';
import ImageClassic from '@/components/Image/ImageClassic.vue';
import ScoreMode from '@/components/Score/ScoreMode.vue';
import ButtonGamemode from '@/components/Button/ButtonGamemode.vue';
import  AnimeApi from '@/api/anime.js';
import imageTest from '@/assets/images/106551l.webp';


export default {
  components: {ScoreMode, ImageClassic, LiveCount, WinText, InputAnime, ButtonGamemode},
  data() {
    return {
      maxStreak: 0,
      streak: 0,
      life: 3,
      try_remaining: 3,
      animeImage: imageTest,
      animeId: null,
      win: false,
      finish: false,
    };
  },

  async mounted() {
    /* const res = await AnimeApi.getOneAnime();
    console.log(res);
    this.animeImage = res.data.anime.main_picture.medium;
    this.animeId = res.data.anime.id; */
  },
};
</script>
