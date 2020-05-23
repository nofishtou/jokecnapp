<template>
  <div class="joke">
    <div class="joke-icon-cont">
      <img class="joke-icon" src="@/assets/img/icon.png" alt="text icon">
    </div>
    <div class="joke-info">
      <img v-if="isFavourite()" @click="removeFavourite" class="joke-info-heart" src="@/assets/img/heart.png" alt="heart">
      <img v-else @click="addFavourite" class="joke-info-heart" src="@/assets/img/emptyheart.png" alt="empty-heart">
      <span class="joke-small-text">ID: <a :href="joke.url" class="joke-info-link">{{joke.id}}<img class="joke-info-link-icon" src="@/assets/img/link.png" alt="link"></a></span>
      <p class="joke-medium-text">{{joke.value}}</p>
      <div class="joke-info-bottom">
        <span class="joke-small-text">{{getDate()}}</span>
        <span v-if="joke.categories.length" class="joke-category">{{joke.categories[0]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['joke', 'favourites'],
  methods: {
    getDate() {
      const today = new Date();
      const created = new Date(this.joke.updated_at);
      return `${Math.floor((today.getTime() - created.getTime()) / (1000 * 60 * 60))} hours ago`;
    },
    addFavourite() {
      this.$emit('add-favourite', this.joke);
    },
    removeFavourite() {
      this.$emit('remove-favourite', this.joke);
    },
    isFavourite() {
      return this.favourites.some((el) => el.id === this.joke.id);
    },
  },
};
</script>

<style scoped>
  .joke{
    width: 80%;
    display: flex;
    padding: 50px;
    background: #F8F8F8;
    border-radius: 20px;
  }

  .joke-icon-cont {
    width: 10%;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
  }

  .joke-icon {
    padding-top: 15px;
  }

  .joke-info {
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  .joke-info-heart {
    width: 20px;
    height: 17px;
    align-self: flex-end;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .joke-info-link {
    margin-left: 3px;
  }

  .joke-info-link-icon {
    margin-left: 5px;
    width: 10px;
    height: 10px;
  }

  .joke-info-bottom {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .joke-medium-text {
    padding-top: 10px;
    font-family: "Roboto-Regular", "Arial", sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: #333333;
  }

  .joke-small-text {
    font-family: "Roboto-Regular", "Arial", sans-serif;
    font-size: 10px;
    line-height: 14px;
    color: #ABABAB;
  }

  .joke-category {
    margin: 0.25rem 0.5rem;
    padding: 0.25rem 0.5rem;
    border: 2px solid #ffffff;
    background-color: #ffffff;
    border-radius: 6px;
    font-family: "Roboto-Medium", "Arial", sans-serif;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .joke + .joke {
    margin-top: 20px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    .joke{
      width: 100%;
      padding: 30px;
      border-radius: 10px;
    }
  }

  @media (min-width: 375px) and (max-width: 767px) {
    .joke{
      width: 100%;
      padding: 30px;
      border-radius: 10px;
    }

    .joke-icon-cont {
      width: 20%;
    }

    .joke-info {
      width: 80%;
    }

    .joke-info-bottom {
      flex-direction: column;
    }

    .joke-category {
      margin: 1rem 0 0 0;
      padding: 0.25rem 2rem;
      align-self: flex-start;
      text-align: center;
    }
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .joke{
      width: 100%;
      padding: 30px;
      border-radius: 10px;
    }

    .joke-icon-cont {
      width: 20%;
    }

    .joke-info {
      width: 80%;
    }

    .joke-info-bottom {
      flex-direction: column;
    }

    .joke-category {
      margin: 1rem 0 0 0;
      padding: 0.25rem 2rem;
      align-self: flex-start;
      text-align: center;
    }

    .joke-info-bottom {
      padding-top: 20px;
    }

    .joke-medium-text {
      font-size: 16px;
      line-height: 22px;
    }

    .joke-small-text {
      font-size: 8px;
      line-height: 12px;
    }
  }

  @media(hover: hover){
    .joke-info-heart:hover {
      transform: scale(1.1);
    }
  }
</style>
