import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
    sidebars: ['sidebarLayers', 'sidebarGlobe','sidebarCrtanje'],
    layers: [
      {name: 'Layer1', color:'black'},
      {name: 'Layer2', color:'red'},  
      {name: 'Layer3', color:'green'},
      {name: 'Layer4', color:'blue'},
    ],
    crtanje: false,
    snap:false,
    modify:false,
    text: '',
    layer:'Layer1',
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
    setActiveLayer(state, layer) {
      state.layer = layer
    }

  },
  actions: {},
  modules: {},
});