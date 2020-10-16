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
    async requestAdminToken({ commit }, admin) {
      commit("setIsLoggedIn", false);

      const { username, password } = admin;
      return new Promise((resolve, reject) => {
        fetch("http://localhost:5000/api/v1/token",
          {
            mode: 'cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
          })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "Valid") {
              commit("setAdminToken", data.token);
              commit("setIsLoggedIn", true);
              resolve();
            }
          }).catch((err) => {
            console.error(err);
            reject();
          });
      });
    },
  },
  modules: {
  },
});
