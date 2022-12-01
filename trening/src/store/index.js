import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
    sidebars: ['sidebarLayers', 'sidebarGlobe'],
    toolbar: false,
    layers: [
      {name: 'Layer 1', geomType:'Point'},
      {name: 'Layer 2', geomType:'LineString'},  
      {name: 'Layer 3', geomType:'Polygon'},
      {name: 'Layer 4', geomType:'Circle'},
    ],
    crtanje: false,
    vrstaCrtanja:'LineString',
    selectcrt:false,
    select:false,
    snap:false,
    modify:false,
    boja: 'black',
    boja2: 'green',
    bojaIkone:'dark',
    bojaIkone2:'secondary',
    text: '',
    layer:'Layer 1',
    ikona: 'pencil-square',
    buttons: false,
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
    },
    ikonab (state, boja) {
      state.bojaIkone = boja
    },
    setActiveToolbar (state) {
      state.toolbar = !state.toolbar
      if(state.toolbar===false){
        state.crtanje = false
      }
    },
    fillB (state, bojaF) {
      state.boja2 = bojaF
    },
    ikonabF (state, boja) {
      state.bojaIkone2 = boja
    },
    toggleButtons (state) {
      state.buttons = !state.buttons
    }

  },
  actions: {},
  modules: {},
});