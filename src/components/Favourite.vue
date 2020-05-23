<template>
  <div class="favourite">
    <div class="favourite-icon-cont">
      <img class="favourite-icon" src="@/assets/img/favicon.png" alt="text icon">
    </div>
    <div class="favourite-info">
      <img class="favourite-info-heart" src="@/assets/img/heart.png" alt="heart" @click="removeFavourite">
      <span class="favourite-small-text">ID:<a :href="favourite.url" class="favourite-info-link">{{favourite.id}} <img class="favourite-info-link-icon" src="@/assets/img/link.png" alt="link"></a></span>
      <p class="favourite-medium-text">{{favourite.value}}</p>
      <div class="favourite-info-bottom">
        <span class="favourite-small-text">{{getDate()}}</span>
        <span v-if="favourite.categories.length" class="favourite-category">{{favourite.categories[0]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from "moment/moment";

export default {
  props: ['favourite'],
  methods: {
    getDate() {
      const time = moment.duration(moment().diff(moment(this.favourite.updated_at))).asHours();
      return `${Math.floor(time)} hours ago`;
    },
    removeFavourite() {
      this.$emit('remove-favourite', this.favourite);
    },
  },
};
</script>

<style scoped>
  .favourite {
    width: 90%;
    display: flex;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
  }

  .favourite-icon-cont {
    width: 15%;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;

  }

  .favourite-icon {
    padding-top: 15px;
  }

  .favourite-info {
    width: 85%;
    display: flex;
    flex-direction: column;
  }

  .favourite-info-heart {
    width: 20px;
    height: 17px;
    align-self: flex-end;
    transition: all 0.3s ease-in-out;
  }

  .favourite-info-link {
    margin-left: 3px;
  }

  .favourite-info-link-icon {
    margin-left: 5px;
    width: 10px;
    height: 10px;
  }

  .favourite-info-bottom {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .favourite-medium-text {
    padding-top: 10px;
    font-family: "Roboto-Regular", "Arial", sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: #333333;
  }

  .favourite-small-text {
    font-family: "Roboto-Regular", "Arial", sans-serif;
    font-size: 10px;
    line-height: 14px;
    color: #ABABAB;
  }

   .favourite-category {
    margin: 0.25rem 0.5rem;
    padding: 0.25rem 0.5rem;
    border: 2px solid #F8F8F8;
    background-color: #F8F8F8;
    border-radius: 6px;
    font-family: "Roboto-Medium", "Arial", sans-serif;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .favourite + .favourite {
    margin-top: 20px;
  }

    @media (min-width: 768px) and (max-width: 1200px) {
    .favourite{
      width: 100%;
      padding: 30px;
      border-radius: 10px;
    }
  }

  @media (min-width: 375px) and (max-width: 767px) {
    .favourite{
      width: 100%;
      padding: 30px;
      border-radius: 10px;
    }

    .favourite-icon-cont {
      width: 20%;
    }

    .favourite-info {
      width: 80%;
    }

    .favourite-info-bottom {
      flex-direction: column;
    }

    .favourite-category {
      margin: 1rem 0 0 0;
      padding: 0.25rem 2rem;
      align-self: flex-start;
      text-align: center;
    }
  }

  @media (min-width: 320px) and (max-width: 374px) {
    .favourite{
      width: 100%;
      padding: 30px;
      border-radius: 10px;
    }

    .favourite-icon-cont {
      width: 20%;
    }

    .favourite-info {
      width: 80%;
    }

    .favourite-info-bottom {
      flex-direction: column;
    }

    .favourite-category {
      margin: 1rem 0 0 0;
      padding: 0.25rem 2rem;
      align-self: flex-start;
      text-align: center;
    }

    .favourite-info-bottom {
      padding-top: 20px;
    }

    .favourite-medium-text {
      font-size: 16px;
      line-height: 22px;
    }

    .favourite-small-text {
      font-size: 8px;
      line-height: 12px;
    }
  }

  @media(hover: hover){
    .favourite-info-heart:hover {
      transform: scale(1.1);
    }
  }
</style>
