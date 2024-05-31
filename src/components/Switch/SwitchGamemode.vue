<template>
  <div class="flex items-center">
    <div>
      <label
        class="relative inline-flex items-center cursor-pointer"
      >
        <input type="checkbox" v-model="switchAnime" class="sr-only peer" @change="$emit('change:type',anime)" />
        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
        />
      </label>
    </div>
    <div class="ml-2">
      <span class="font-Lemon text-4xl text-secondaryText">{{ switchAnime ? 'Manga' : 'Anime' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anime: Boolean,
  },

  data() {
    return {
      switchAnime: this.anime,
    };
  },
};
</script>
