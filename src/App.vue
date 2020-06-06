<template>
  <div id="app">
    <div class="container">
      <div class="jokes-cont">
        <div class="jokes-nav">
          <h1 class="jokes-heading">MSI 2020</h1>
          <img class="show-icon" @click="showFavourites"  src="@/assets/img/showicon.png" alt="show-icon">
        </div>

        <GetJokes />
        <Jokes
          :jokes="allJokes"
        />
      </div>
      <div class="favourites" ref="favourites">
        <div class="favourites-nav">
          <img  class="hide-icon" @click="hideFavourites"  src="@/assets/img/hideicon.png" alt="hide-icon">
          <h3 class="favourites-heading">Favourite</h3>
        </div>
        <Favourite
          v-for="favourite of allFavourites"
          :favourite="favourite"
          :key="favourite.id"
        />
      </div>
    </div>
    <div class="shadow-background" ref="shadowBackground" v-on:click="hideFavourites"></div>
  </div>
</template>

<script>
import GetJokes from '@/components/GetJokes';
import Jokes from '@/components/Jokes';
import Favourite from '@/components/Favourite';

export default {
  name: 'App',
  computed: {
    allJokes() {
      return this.$store.getters.getAllJokes;
    },
    allFavourites() {
      return this.$store.getters.getAllFavourites;
    },
  },
  methods: {
    showFavourites() {
      this.$refs.favourites.classList.add('show');
      this.$refs.shadowBackground.classList.add('shadow-background-active');
    },
    hideFavourites() {
      this.$refs.favourites.classList.remove('show');
      this.$refs.shadowBackground.classList.remove('shadow-background-active');
    },
  },
  components: {
    GetJokes,
    Jokes,
    Favourite,
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  display: flex;
  margin: 0 auto;
}

.jokes-cont{
  width: 67%;
  padding: 20px;
}

.jokes-nav {
  display: flex;
  justify-content: space-between;
}

.favourites-nav {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.show-icon {
  display: none;
  transition: all 0.3s ease-in-out;
}

.hide-icon {
  display: none;
  width: 28px;
  height: 28px;
  transition: all 0.3s ease-in-out;
}

.jokes-heading {
  padding-left: 1rem;
  font-family: "Roboto-Bold", "Arial", sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #333333;
}

.favourites {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 33%;
  min-height: 100vh;
  background: #F8F8F8;
}

.favourites-heading {
  padding-left: 30px;
  padding-bottom: 20px;
  align-self: flex-start;
  font-family: "Roboto-Medium", "Arial", sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #ABABAB;
}

@media (min-width: 768px) and (max-width: 1200px) {
  .favourites-nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .show-icon {
    display: block;
  }

  .hide-icon {
    display: block;
  }

  .jokes-cont{
    width: 100%;
  }

  .favourites {
    position: absolute;
    left: 34%;
    display: none;
    width: 66%;
    z-index: 10;
  }

  .favourites-heading {
    padding-left: 20px;
  }

  .favourites.show {
    display: flex;
  }

  .shadow-background {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(45,48,58, 0.7);
    z-index: 5;
  }

  .shadow-background-active {
    display: block;
  }
}

@media (min-width: 375px) and (max-width: 767px)  {
  .favourites-nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .show-icon {
    display: block;
  }

  .hide-icon {
    display: block;
  }

  .jokes-cont{
    width: 100%;
  }

  .favourites {
    position: absolute;
    display: none;
    width: 100%;
    z-index: 10;
  }

  .favourites h3 {
    padding-left: 20px;
  }

  .favourites.show {
    display: flex;
  }
}

@media (min-width: 320px) and (max-width: 374px)  {
  .favourites-nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .show-icon {
    display: block;
  }

  .hide-icon {
    display: block;
  }

  .jokes-cont{
    width: 100%;
  }

  .favourites {
    position: absolute;
    display: none;
    width: 100%;
    z-index: 10;
  }

  .favourites h3 {
    padding-left: 20px;
  }

  .favourites.show {
    display: flex;
  }
}

@media(hover: hover){
  .show-icon:hover {
    transform: rotate(180deg);
  }

  .hide-icon:hover {
    transform: rotate(180deg);
  }
}

@font-face {
  font-family: "Roboto-Bold";
  src: url("~@/assets/fonts/Roboto-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "Roboto-Medium";
  src: url("~@/assets/fonts/Roboto-Medium.ttf") format("truetype");
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: "Roboto-Regular";
  src: url("~@/assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
}
</style>
