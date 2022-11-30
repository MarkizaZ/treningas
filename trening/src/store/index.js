import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
    sidebars: ['sidebarLayers', 'sidebarGlobe','sidebarCrtanje'],
    layers: [
      {name: 'Layer 1'},
      {name: 'Layer 2'},  
      {name: 'Layer 3'},
      {name: 'Layer 4'},
    ],
    crtanje: false,
    vrstaCrtanja:'LineString',
    selectcrt:false,
    select:false,
    snap:false,
    modify:false,
    boja: 'black',
    text: '',
    layer:'Layer 1',
    ikona: 'pencil-square'
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
    izborCrtanja(state, selectcrt) {
      state.vrstaCrtanja = selectcrt
    },
    paliSelect(state) {
      state.select = !state.select
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
    icon (state, vrsta) {
      state.ikona = vrsta
    },
    boja (state, boja ) {
      state.boja = boja
    }

  },
  actions: {},
  modules: {},
});