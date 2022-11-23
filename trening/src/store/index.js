import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
    sidebars: ['sidebarLayers', 'sidebarGlobe', 'sidebarPen'],
    boja:'red',
    crtanje: false,
    text: ''
  }),

  getters:{},
  mutations: {
    setActiveSidebar(state, sidebar) {
      if(state.sidebar === sidebar) {
        state.sidebar = ''
      }
      else {state.sidebar = sidebar}
    },
    stBoja(state, novaBoja){
      state.boja=novaBoja
    },
    setText(state, text){
      state.text=text
    }

  },
  actions: {},
  modules: {},
});