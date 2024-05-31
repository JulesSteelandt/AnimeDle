<template>
  <div class="space-x-5">
    <input
      class="rounded-[20px] w-[45vh] font-Lemon text-inputText h-8 shadow-inner shadow-shadowInner px-2"
      type="text"
      v-model="inputValue"
      placeholder="entrer le nom ici"
    />
    <ButtonGame text="valider" @click="validateInput" />
  </div>
</template>

<script>
import ButtonGame from '../Button/ButtonGamemode.vue';

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
