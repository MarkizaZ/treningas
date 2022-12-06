import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    sidebar: '',
    sidebars: ['sidebarLayers', 'sidebarGlobe'],
    toolbar: false,
    layers: [
      { value: 'Layer 1', text: 'Layer 1', geomType: 'Point', visible: false, opacity:1 , fillColor: [0,0,255,1], strokeColor: [0,0,255,1]},
      { value: 'Layer 2', text: 'Layer 2', geomType: 'LineString', visible: false, opacity:1, fillColor: [255,255,255,1] , strokeColor: [255,255,255,1]  },
      { value: 'Layer 3', text: 'Layer 3', geomType: 'Polygon', visible: false, opacity:1, fillColor: [255,255,255,1], strokeColor: [255,255,255,1]   },
      { value: 'Layer 4', text: 'Layer 4', geomType: 'Circle', visible: false, opacity:1, fillColor: [255,255,255,1] , strokeColor: [255,255,255,1]  }
    ],
    layer:null,
    crtanje: false,
    vrstaCrtanja:'LineString',
    selectcrt:false,
    select:false,
    snap:false,
    modify:false,
    text: '',
    ikona: 'pencil-square',
    ikona2: 'eye-slash',
    buttons: false,
    sideButton:'',
    layersTable:true,
    undoTrigger:false,

  }),

  getters:{},
  mutations: {
    setActiveSidebar(state, sidebar) {
      if(state.sidebar === sidebar) {
        state.sidebar = ''
      }
      else if(state.toolbar === true) {
        state.toolbar = false
        state.sidebar = sidebar
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
    setActiveToolbar (state) {
      state.toolbar = !state.toolbar
      state.sidebar = ''
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
      if(state.sideButton !== ''){
        state.sideButton = false

      }
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
    },
    toggleSideButton(state, value) {
      if(state.sideButton === value) {
        state.sideButton = ''
      }
      else {state.sideButton = value}    
    },
    toggleLayerTb (state) {
      state.layersTable = !state.layersTable
    },
    setLayerColor (state, objekt) {
      console.log(objekt)
      const layer = state.layers.find(item => objekt.layer === item.value)
      if (!layer) {

        return
      } 
      console.log(layer)
      layer[objekt.fillStroke] = objekt.rgbaSortedValues
      console.log(objekt.fillStroke)
    },
    visibleLayerDraw(state, layer) {
      const visibleLayers = state.layers.find(item=>item.text == layer)
      visibleLayers.visible = true
    },
    undo (state) {
      state.undoTrigger = !state.undoTrigger
    }

  },
  actions: {},
  modules: {},
});