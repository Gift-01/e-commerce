import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    users: [],
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_USER(state, user) {
      state.users.push(user);
    },
    CLEAR_USER(state) {
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
