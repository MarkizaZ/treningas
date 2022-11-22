import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
  }),

  getters:{},
  mutations: {
    setActiveSidebar(state, sidebar) {
      state.sidebar = sidebar
    }
  },
  actions: {},
  modules: {},
});