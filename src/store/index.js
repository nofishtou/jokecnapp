import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jokes: [],
    favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
    loading: false,
    results: null,
  },
  actions: {
    fetchJokes({ commit }, params) {
      let urlRequest = 'https://api.chucknorris.io/jokes/';
      commit('isLoading', true);
      if (params.typeRequest === 'random') {
        urlRequest += 'random';
      }
      if (params.typeRequest === 'category') {
        urlRequest += `random?category=${params.category}`;
      }
      if (params.typeRequest === 'search') {
        if (!params.text) {
          commit('isLoading', false);
          return;
        }
        urlRequest += `${params.typeRequest}?query=${params.text}`;
      }
      fetch(urlRequest)
        .then((res) => res.json())
        .then((data) => {
          commit('fetchJokes', data);
          commit('isLoading', false);
        })
        .catch((e) => {
          commit('isLoading', false);
          console.error(`${e}`);
        });
    },
    addFavourite({ commit }, favourite) {
      commit('addFavourite', favourite);
    },
    removeFavourite({ commit }, id) {
      commit('removeFavourite', id);
    },
  },
  mutations: {
    fetchJokes(state, jokes) {
      if (jokes.result) {
        state.results = jokes.total;
        state.jokes = [...jokes.result];
      } else {
        const newJokes = [];
        newJokes.push(jokes);
        state.results = null;
        state.jokes = newJokes;
      }
    },
    addFavourite(state, favourite) {
      state.favourites.push(favourite);
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    },
    removeFavourite(state, id) {
      state.favourites = state.favourites.filter((favourite) => favourite.id !== id);
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    },
    isLoading(state, value) {
      state.loading = value;
    },
  },
  getters: {
    getAllJokes: (state) => state.jokes,
    getAllFavourites: (state) => state.favourites,
    isFavourite: (state) => (id) => state.favourites.some((el) => el.id === id),
    loadingStatus: (state) => state.loading,
    getResults: (state) => state.results,
  },
  modules: {

  },
});
