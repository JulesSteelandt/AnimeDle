<template>
  <v-row class="space-x-5 my-2 justify-center">
    <input
        class="font-Itim text-inputText h-6 mt-2 text-3xl text-white w-[30vw]"
        v-model="animeValue"
        placeholder="Nom de l'anime"
        @keyup="updateSearchResults"
    />
    <v-autocomplete
        class="font-Itim text-inputText h-6 mt-2 text-3xl text-white w-[30vw]"
        v-model="inputValue"
        bg-color="white"
        rounded
        :items="searchResults"
        item-value="node.id"
        item-title="node.title"
        placeholder="Nom de l'anime"
        @input="updateSearchResults"
    />

    <template v-slot:item="{ item }"> <span v-if="item.alternative_titles.en === ''">
    {{ item.title }} (titre original)
  </span>
      <span v-else>
    {{ item.alternative_titles.en }}
  </span>
    </template>
    <ButtonGame text="valider" @click="validateInput" />
  </v-row>
</template>

<script>
import ButtonGame from '../Button/ButtonGame.vue';
import AnimeApi from '@/api/anime.js';

export default {

  components: {
    ButtonGame,
  },
  data() {
    return {
      inputValue: '',
      searchResults: [],
      animeValue: '',
    };
  },

  methods: {
    async debouncedSearch() {
        try {
          if (!this.animeValue) return;
          if (this.animeValue.length < 3) return;
          const res = await AnimeApi.getAnimeBySearch(this.animeValue);
          this.searchResults = res.data.anime;
        } catch (error) {
          console.error('Erreur lors de la recherche d\'anime:', error);
          this.searchResults = [];
        }
    },

    updateSearchResults() {
      this.debouncedSearch();
    },

    validateInput() {
      this.$emit('update:idAnime', this.inputValue);
    },
  },
};
</script>
