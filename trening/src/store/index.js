import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
    sidebars: ['sidebarLayers', 'sidebarGlobe'],
    toolbar: false,
    layers: [
      { value: 'Layer 1', text: 'Layer 1', geomType: 'Point', visible: true, opacity:1 },
      { value: 'Layer 2', text: 'Layer 2', geomType: 'LineString', visible: true, opacity:1   },
      { value: 'Layer 3', text: 'Layer 3', geomType: 'Polygon', visible: true, opacity:1   },
      { value: 'Layer 4', text: 'Layer 4', geomType: 'Circle', visible: true, opacity:1   }
    ],
    array1: ['jedan', 'dva', 'tri', 'četiri', 'pet', 'šest' ],
    array2: ['jedan 1', 'dva 2', 'tri 3', 'četiri 4', 'pet 5', 'šest 6' ],
    array3: [31, 12, 63, 84, 5, 96, 73],
    object1: { ime: 'aa', prezime: 'qq', dob: 21},
    fromentriesPr: [
    ['ime' ,'jedan'],
    ['ime2' ,'jedan2'],
    ['ime3' ,'jedan3']
    ],
    layer:'Layer 1',
    crtanje: false,
    vrstaCrtanja:'LineString',
    selectcrt:false,
    select:false,
    snap:false,
    modify:false,
    boja: 'black',
    boja2: 'grey',
    bojaIkone:'dark',
    bojaIkone2:'secondary',
    text: '',
    ikona: 'pencil-square',
    ikona2: 'eye-slash',
    buttons: false,
    sideButton1:false,
    sideButton2:false,
    sideButton3:false,

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
      if(state.sideButton1===true || state.sideButton2===true
        || state.sideButton3 === true){
        state.sideButton1 = false
        state.sideButton2 = false
        state.sideButton3 = false
      }
    },
    toggleSideButton1 (state) {
      state.sideButton1 = !state.sideButton1
    },
    toggleSideButton2 (state) {
      state.sideButton2 = !state.sideButton2
    },
    toggleSideButton3 (state) {
      state.sideButton3 = !state.sideButton3
    },
    setVisibleLayers (state, layers) {
      const visibleLayers = layers.map(item=>item.text)
      state.layers.forEach(item=> {
          item.visible=visibleLayers.includes(item.text)
      })
      

      // KOMPLICIRANI NACIN
      // for (const index in state.layers) {
      //   console.log ('1111',state.layers[index])
      //   console.log('bbbb',layers)
      //   const layerState = state.layers[index]
      //   let a = 0
      //     for (const index2 in layers) {
      //     console.log(index2)
      //         if ( layerState.text === layers[index2].text){
      //           a++
      //         }
      //     }
      //   if(a===0){
      //     layerState.visible=false
      //   } else {
      //     layerState.visible=true
      //   }
      //   a=0;
      // }
    },
    setOpacity(state, value) {
      const temp = state.layers.find(item => item.text === value.layer)
      temp.opacity = Number(value.event)
    } 

  },
  actions: {},
  modules: {},
});