<template>
  <v-row class="space-x-5 my-2 justify-center">

    <div class="anime-search">
      <input
        class="rounded-[20px] w-[45vh] font-Itim text-inputText h-8 shadow-inner shadow-shadowInner px-2 bg-white mt-2"
        v-model="animeValue"
        type="text"
        placeholder="Nom de l'anime"
        @keyup="updateSearchResults"
      />
      <ul class="search-results" v-if="searchResults.length > 0">
        <li
          v-for="anime in searchResults"
          :key="anime.node.id"
          class="search-result"
          @click="selectAnime(anime.node)"
        >
         <span v-if="anime.node.alternative_titles && anime.node.alternative_titles.en !==''">
            {{ anime.node.alternative_titles.en }}
          </span>
          <span>{{ anime.title }} </span>
        </li>
      </ul>
    </div>
    <span v-if="error" class="text-red-500">Veuillez sélectionner un anime dans la liste</span>


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
      animeValue: '',
      searchResults: [],
      inputValue: '',
      error: false,
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

    async updateSearchResults() {
      await this.debouncedSearch();
    },

    selectAnime(anime) {
      this.inputValue = anime.id;
      this.animeValue = anime.title;
      this.searchResults = [];
    },

    validateInput() {
      if (!this.inputValue) {
        this.error = true;
        return;
      }
      this.$emit('update:idAnime', this.inputValue, this.animeValue);
    },

    // New method to handle outside clicks
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.searchResults = []; // Clear search results
      }
    },
  },

  mounted() {
    // Add event listener for document clicks
    document.addEventListener('click', this.handleClickOutside);
  },

  beforeUnmount() {
    // Remove event listener on component unmount
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.anime-search {
  position: relative; /* Necessary for positioning the results list */
}

.search-results {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute; /* Position the results list below the input */
  top: 100%; /* Adjust based on your styling preferences */
  left: 0;
  background-color: white; /* Customize background color */
  border: 1px solid #ddd; /* Optional border */
  width: 100%; /* Match the input width */
  max-height: 200px; /* Limit the height of the results list */
  overflow-y: auto; /* Enable scrolling if results exceed the height */
}

.search-result {
  padding: 5px 10px;
  cursor: pointer;
  /* Additional styling for results items */
}

.search-result:hover {
  background-color: #eee; /* Optional hover effect */
}
</style>
