import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
    sidebars: ['sidebarLayers', 'sidebarGlobe','sidebarCrtanje'],
    layers: [
      {name: 'Layer1', color:'black', color2:"grey"},
      {name: 'Layer2', color:'red', color2:"yellow"},  
      {name: 'Layer3', color:'green', color2:"blue"},
      {name: 'Layer4', color:'blue', color2:"green"},
    ],
    crtanje: false,
    vrstaCrtanja:'LineString',
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
    izborCrtanja(state, select) {
      state.vrstaCrtanja = select
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
    },

  },
  actions: {},
  modules: {},
});