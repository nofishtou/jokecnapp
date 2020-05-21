<template>
  <div class='categories' v-on:click="$emit('get-cat',$event)">
    <span class="category" v-bind:class="isActive('animal')">animal</span>
    <span class="category" v-bind:class="isActive('career')">career</span>
    <span class="category" v-bind:class="isActive('celebrity')">celebrity</span>
    <span class="category" v-bind:class="isActive('dev')">dev</span>
    <span class="category" v-bind:class="isActive('explicit')">explicit</span>
    <span class="category" v-bind:class="isActive('fashion')">fashion</span>
    <span class="category" v-bind:class="isActive('food')">food</span>
    <span class="category" v-bind:class="isActive('history')">history</span>
    <span class="category" v-bind:class="isActive('money')">money</span>
    <span class="category" v-bind:class="isActive('movie')">movie</span>
    <span class="category" v-bind:class="isActive('music')">music</span>
    <span class="category" v-bind:class="isActive('political')">political</span>
    <span class="category" v-bind:class="isActive('religion')">religion</span>
    <span class="category" v-bind:class="isActive('science')">science</span>
    <span class="category" v-bind:class="isActive('sport')">sport</span>
    <span class="category" v-bind:class="isActive('travel')">travel</span>
  </div>
</template>

<script>
export default {
  props: ['category'],
  methods: {
    isActive(value) {
      if (value === this.category) return 'active-category';
      return '';
    },
  },
};
</script>

<style>
.categories {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.category {
  margin: 0.25rem 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 2px solid #F8F8F8;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: "Roboto-Medium", "Arial", sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.active-category {
  background: #F8F8F8;
}

@media (min-width: 768px) and (max-width: 1200px) {
  .categories {
    width: 100%;
  }
}
@media (min-width: 375px) and (max-width: 767px) {
  .categories {
    width: 100%;
  }
}
</style>
