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
        <ButtonGame :text="win ? 'suivant' : 'recommencez'" @click="continueGame" />
      </div>
      <div v-else>
        <InputAnime @update:idAnime="checkId" />
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
import AnimeApi from '@/api/anime.js';
import ButtonGame from '@/components/Button/ButtonGame.vue';


export default {
  components: {ButtonGame, ScoreMode, ImageClassic, LiveCount, WinText, InputAnime, ButtonGamemode},
  data() {
    return {
      maxStreak: parseInt(localStorage.getItem('maxStreak')) || 0,
      streak: 0,
      life: 3,
      try_remaining: 3,
      animeImage: '',
      animeName: '',
      animeId: null,
      win: false,
      finish: false,
    };
  },

  async mounted() {
    const res = await AnimeApi.getOneAnime();
    this.animeImage = res.data.anime.main_picture.large;
    this.animeName = res.data.anime.title;
    this.animeId = res.data.anime.id;
  },

  methods: {

    async newAnime() {
      const res = await AnimeApi.getOneAnime();
      this.animeImage = res.data.anime.main_picture.large;
      this.animeName = res.data.anime.title;
      this.animeId = res.data.anime.id;
    },

    checkId(id) {
      if (id === this.animeId) {
        this.finish = true;
        this.win = true;
        this.streak += 1;
        this.try_remaining = 0;
        this.maxStreak = Math.max(this.streak, this.maxStreak);
        localStorage.setItem('maxStreak', this.maxStreak);
      } else {
        this.try_remaining -= 1;
        if (this.try_remaining === 0) {
          this.finish = true;
          this.life -= 1;
        }
      }
    },

    continueGame() {
      if (this.win) {
        this.win = false;
      } else if (this.life === 0) {
        this.streak = 0;
        this.life = 3;
      }
      this.finish = false;
      this.try_remaining = 3;


      this.newAnime();
    },

  },
};


</script>
