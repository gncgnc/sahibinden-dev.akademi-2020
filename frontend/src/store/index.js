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
    },

    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    }
  },
  actions: {
    async requestAdminToken(ctx, admin) {
      const { username, password } = admin;
      try {
        const response = await fetch("http://localhost:5000/api/v1/token",
          {
            mode: 'cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
          });
        const json = await response.json();
        ctx.commit("setAdminToken", json.token);
        ctx.commit("setIsLoggedIn", true);
      } catch (err) {
        console.error(err);
      }
    },
  },
  modules: {
  },
});
