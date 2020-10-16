import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminToken: null,
    adminPostings: [],
    postings: [],
    isLoggedIn: false,
  },
  mutations: {
    setAdminToken(state, token) {
      state.adminToken = token;
    },

    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },

    setPostings(state, postings) {
      state.postings = postings;
    },

    setAdminPostings(state, postings) {
      state.adminPostings = postings;
    },

  },
  actions: {
    async requestAdminToken({ commit }, { username, password }) {
      commit("setIsLoggedIn", false);

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
    async requestAdminPostings(ctx, { page, size }) {
      const token = ctx.state.adminToken;
      console.log("token ", token);
      return new Promise((resolve, reject) => {
        if (!ctx.state.isLoggedIn) {
          console.log("not logged in");
          reject();
        }
        fetch(`http://localhost:5000/api/v1/myList?page=${page}&size=${size}`,
          {
            mode: 'cors',
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              token
            },
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            ctx.commit("setAdminPostings", data.content);
            resolve();
          }).catch((err) => {
            console.error(err);
            reject();
          });
      });
    },
    async requestPostings({ commit }, { page, size }) {
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:5000/api/v1/list?page=${page}&size=${size}`,
          {
            mode: 'cors',
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            commit("setPostings", data.content);
            resolve();
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
