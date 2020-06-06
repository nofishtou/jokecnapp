<template>
  <div class="jokes">
    <p v-if="results === 0" class='jokes-text'>no jokes found :C</p>
    <Joke
      v-for="joke of jokes"
      :joke="joke"
      :key="joke.id"
    />
  </div>
</template>

<script>
import Joke from '@/components/Joke';

export default {
  props: ['jokes'],
  computed: {
    results() {
      return this.$store.getters.getResults;
    },
  },
  components: {
    Joke,
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
