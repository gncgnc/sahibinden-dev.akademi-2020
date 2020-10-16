import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminToken: null,
    currentAdminPosts: [],
    isLoggedIn: false,
  },
  mutations: {
    setAdminToken(state, token) {
      state.adminToken = token;
    }
  },
  actions: {
    requestAdminToken(ctx) {
      fetch("https://devakademi.sahibinden.com/api/authorization/token");
    }
  },
  modules: {
  },
});
