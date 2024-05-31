<template>
  <v-row class="space-x-5 my-2">
    <input
      class="rounded-[20px] w-[45vh] font-Lemon text-inputText h-8 shadow-inner shadow-shadowInner px-2 bg-white"
      type="text"
      v-model="inputValue"
      placeholder="entrer le nom ici"
    />
    <ButtonGame text="valider" @click="validateInput" />
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
    };
  },
  methods: {
    validateInput() {
      console.log('Valeur entrée :', this.inputValue);
    },
  },
};
</script>
