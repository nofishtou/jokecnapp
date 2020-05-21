<template>
  <div class="jokes">
    <Joke
      v-for="joke of jokes"
      v-bind:joke="joke"
      v-bind:favourites="favourites"
      :key="joke.id"
      v-on:add-favourite="addFavourite"
      v-on:remove-favourite="removeFavourite"
    />
  </div>
</template>

<script>
import Joke from '@/components/Joke.vue';

export default {
  props: ['jokes', 'favourites'],
  components: {
    Joke,
  },
  methods: {
    addFavourite(joke) {
      this.$emit('add-favourite', joke);
    },
    removeFavourite(favourite) {
      this.$emit('remove-favourite', favourite);
    },
    isFavourite(joke) {
      this.$emit('is-favourite', joke);
    },
  },
};
</script>

<style scoped>
  .jokes {
    padding: 40px 0px;
  }
</style>
