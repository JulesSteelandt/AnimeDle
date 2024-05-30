<template>
  <div class="h-[90vh] bg-main">
    <div class="p-3">
      <ScoreMode text="Streak" :score="streak" />
      <ScoreMode text="Max Streak" :score="maxStreak" />
    </div>
    <div class="flex flex-col items-center">
      <div class="flex pb-3">
        <ImageClassic />
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


export default {
  components: {ScoreMode, ImageClassic, LiveCount, WinText, InputAnime, ButtonGamemode},
  data() {
    return {
      maxStreak: 0,
      streak: 0,
      life: 3,
      animeName: 'test',
      win: false,
      finish: false,
    };
  },
};
</script>
