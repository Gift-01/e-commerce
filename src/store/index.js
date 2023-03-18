import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user || !!JSON.parse(localStorage.getItem("loggedInUser"));
    },
    loggedInUser() {
      JSON.parse(localStorage.getItem("loggedInUser"));
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_USER(state, user) {
      const users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        const newUsersList = [...users, user];
        localStorage.setItem("users", JSON.stringify(newUsersList));
      } else if (!users) {
        localStorage.setItem("users", JSON.stringify([user]));
      }
    },
    CLEAR_USER(state) {
      localStorage.removeItem("loggedInUser");
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, details) {
      commit("SET_USER", details);
    },
    async signup({ commit }, details) {
      commit("ADD_USER", details);
    },
    async logout({ commit }) {
      commit("CLEAR_USER");
    },
  },
});
