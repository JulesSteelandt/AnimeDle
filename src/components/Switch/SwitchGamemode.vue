<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      class="form-checkbox h-6 w-6 text-primary border-primary focus:ring-primary"
      :checked="anime"
      @change="handleToggle"
    />
    <div class="ml-2">
      <span class="font-Lemon text-4xl text-secondaryText">{{ anime ? 'Manga' : 'Anime' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anime: Boolean,
    setAnime: Function,
  },
  methods: {
    handleToggle() {
      this.setAnime(!this.anime);
    },
  },
};
</script>
