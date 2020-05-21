<template>
  <div class="get-jokes">
    <div class="get-jokes-text">
      <h2 class="get-jokes-text-greeting">Hey!</h2>
      <p class="get-jokes-text-info">Let`s try to find a joke for you:</p>
    </div>
    <form @submit.prevent="onSubmit">
      <label class="get-jokes-label" for="randomInput"><input type="radio" id="randomInput" class="get-jokes-form-radio" value="random" v-model="typeRequest">Random</label><br>
      <label class="get-jokes-label" for="categoryInput"><input type="radio" id="categoryInput" class="get-jokes-form-radio" value="category" v-model="typeRequest">From category</label><br>
      <Categories v-bind:category="category" v-if="typeRequest === 'category'" @get-cat="getCategory"/>
      <label class="get-jokes-label" for="searchInput"><input type="radio" id="searchInput" class="get-jokes-form-radio" value="search" v-model="typeRequest">Search</label><br>
      <input type="text" v-model="text" class="get-gokes-form-text" v-if="typeRequest === 'search'">
      <button class="get-jokes-btn" type="submit" >Get a Joke</button>
    </form>
  </div>
</template>

<script>
import Categories from '@/components/Categories';

export default {
  name: 'GetJokes',
  data() {
    return {
      typeRequest: 'random',
      category: 'animal',
      text: '',
    };
  },
  methods: {
    onSubmit() {
      let urlRequest = 'https://api.chucknorris.io/jokes/';
      if (this.typeRequest === 'random') {
        urlRequest += 'random';
      }
      if (this.typeRequest === 'category') {
        urlRequest += `random?category=${this.category}`;
      }
      if (this.typeRequest === 'search') {
        // validation on empty string
        if (!this.text) return;
        urlRequest += `${this.typeRequest}?query=${this.text}`;
      }
      fetch(urlRequest)
        .then((res) => res.json())
        .then((data) => this.$emit('get-jokes', data))
        .catch((e) => new Error(`${e}`));
    },
    getCategory(event) {
      if (event.target.classList.contains('category')) {
        this.category = event.target.textContent;
      }
    },
    isActive(value) {
      if (value === this.category) return 'active-category';
      return '';
    },
  },
  components: {
    Categories,
  },
};
</script>

<style scoped>
.get-jokes {
  padding-top: 2rem;
  padding-left: 1rem;
  width: 100%;
  text-align: left;
}

.get-jokes-text-greeting {
  font-family: "Roboto-Bold", "Arial", sans-serif;
  font-size: 32px;
  line-height: 44px;
}

.get-jokes-text-info {
  font-family: "Roboto-Medium", "Arial", sans-serif;
  font-size: 24px;
  line-height: 44px;
}

.get-jokes-label {
  display: inline-block;
  margin-bottom: 10px;
  font-family: "Roboto-Regular", "Arial", sans-serif;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
}

.get-jokes-form-radio{
  margin-right: 15px;
  cursor: pointer;
}

.get-gokes-form-text {
  width: 80%;
  padding: 0.375rem 0.75rem;
  margin-bottom: 15px;
  border: 2px solid #333333;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Roboto-Regular", "Arial", sans-serif;
  font-size: 16px;
  line-height: 22px;
}

.get-jokes-btn {
  display: block;
  padding: 0.375rem 1.5rem;
  background: linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%);
  border: 1px solid #7291FF;
  border-radius: 10px;
  font-family: "Roboto-Bold", "Arial", sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  outline: none;
  transition: all 0.3s ease-in-out;
}


@media (min-width: 375px) and (max-width: 767px) {
  .get-gokes-form-text {
    width: 100%;
  }
}

@media (min-width: 320px) and (max-width: 374px) {
  .get-gokes-form-text {
    width: 100%;
  }
}

@media(hover: hover){
  .get-jokes-btn:hover {
    background: #ffffff;
    color:#7291FF;
  }
}
</style>
