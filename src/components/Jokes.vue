<template>
  <div class="jokes">
    <p v-if="results === 0" class='jokes-text'>no jokes found :C</p>
    <Joke
      v-for="joke of jokes"
      :joke="joke"
      :favourites="favourites"
      :key="joke.id"
      @add-favourite="addFavourite"
      @remove-favourite="removeFavourite"
    />
  </div>
</template>

<script>
import Joke from '@/components/Joke.vue';

export default {
  props: ['jokes', 'favourites', 'results'],
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
    padding: 40px 20px;
  }

  .jokes-text{
    width: 80%;
    text-align: center;
    font-family: "Roboto-Regular", "Arial", sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: #333333;
  }
</style>
