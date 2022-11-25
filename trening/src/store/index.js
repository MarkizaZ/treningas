import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
    sidebars: ['sidebarLayers', 'sidebarGlobe','sidebarCrtanje'],
    crtanje: false,
    snap:false,
    modify:false,
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
    paliCrtanje(state){
      state.crtanje = !state.crtanje
    },
    paliSnap (state){
      state.snap = !state.snap
    },
    paliModify (state){
      state.modify = !state.modify
      console.log(state.modify)
    },

  },
  actions: {},
  modules: {},
});