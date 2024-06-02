<template>
  <v-row class="space-x-5 my-2 justify-center">

    <v-autocomplete
        class="font-Itim text-inputText h-6 mt-2 text-3xl text-white w-[30vw]"
        v-model="inputValue"
        bg-color="white"
        rounded
        :items="suggestions"
        placeholder="Nom de l'anime"
    />
    <ButtonGame text="valider" @click="validateInput"/>
  </v-row>
</template>

<script>
import ButtonGame from '../Button/ButtonGame.vue';

export default {
  components: {
    ButtonGame,
  },
  data() {
    return {
      inputValue: '',
      suggestions: ['Naruto', 'One Piece', 'Bleach', 'Dragon Ball', 'Death Note', 'My Hero Academia', 'Black Clover', 'Demon Slayer', 'Attack on Titan', 'Tokyo Revengers', 'Jujutsu Kaisen'],
    };
  },
  methods: {
    validateInput() {
      console.log('Valeur entrée :', this.inputValue);
    },
  },
};
</script>

<style>

</style>

