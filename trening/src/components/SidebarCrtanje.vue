<template>
  <div>

    <div class="divclass">
      <b-button v-b-tooltip.hover.noninteractive title="Toggle draw (press Shift for Fehand Draw) " @click="toggleDraw()" :pressed=$store.state.crtanje variant="outline-secondary" > <b-icon-pencil></b-icon-pencil></b-button> 
    </div>


    <div class="divclass2">
      <b-dropdown v-b-tooltip.hover.noninteractive title="Draw seect" :disabled="!crtanje"  id="dropdown-dropright" dropright no-caret boundary="window" class="m-2" offset="-13">
        <template #button-content>
          <b-icon :icon="$store.state.ikona"></b-icon>
        </template>
         <b-button v-b-tooltip.hover.noninteractive title="Line draw" class="m-1"  @click="vrstaIkone('pencil-square');vrstaCrtanja('LineString')" variant="outline-secondary">
            <b-icon-pencil-square></b-icon-pencil-square></b-button>
          <b-button v-b-tooltip.hover.noninteractive title="Polygon draw" class="m-1" @click="vrstaIkone('hexagon');vrstaCrtanja('Polygon')" variant="outline-secondary">
            <b-icon-hexagon></b-icon-hexagon></b-button>
          <b-button v-b-tooltip.hover.noninteractive title="Circle draw" class="m-1" @click="vrstaIkone('circle');vrstaCrtanja('Circle')" variant="outline-secondary">
            <b-icon-circle></b-icon-circle></b-button>
      </b-dropdown>
     </div>

     <div class="divclass2">
      <b-button v-b-tooltip.hover.noninteractive title="Toggle select" @click="toggleSelect()" :pressed.sync="myToggle" variant="outline-secondary" > <b-icon-hand-index></b-icon-hand-index></b-button>
     </div>

     <div class="divclass2">
      <b-button v-b-tooltip.hover.noninteractive title="Toggle snap" @click="toggleSnap()" :pressed.sync="myToggle2" variant="outline-secondary" > <b-icon-arrows-angle-contract></b-icon-arrows-angle-contract></b-button>
     </div>

     <div class="divclass2">
      <b-button v-b-tooltip.hover.noninteractive title="Toggle modify" @click="toggleModify()" :pressed=$store.state.modify variant="outline-secondary" > <b-icon-arrows-move></b-icon-arrows-move></b-button>
     </div>


    <b-dropdown id="dropdown-1" size="sm" class="m-md-1" boundary="window" dropright no-caret>
      <template #button-content>
          <b-icon-layers ></b-icon-layers>
          <div>
          {{layer}}
        </div>
      </template>
        <b-dropdown-item v-for="layer in layers" :key="layer.name" 
        @click="toggleLayer(layer.name)">{{layer.name}}
        </b-dropdown-item>
     </b-dropdown>

     <b-button @click="red('black')" >Black</b-button>
     <b-button @click="red('red')" >Red</b-button>
     <b-button @click="red('green')" >Green</b-button>
     <b-button @click="red('blue')" >Blue</b-button>


  </div>
</template>

<script>



export default {
    components: {

    },
  data() {
    return {    
        myToggle: false,
        myToggle2: false,
        checked: false,
        selected: 'LineString',
        options: [
          { value: 'LineString', text: 'Linije' },
          { value: 'Polygon', text: 'Poligon' },
          { value: 'Circle', text: 'Krug', }
        ]

    };
  },
  watch: {
    crtanje () {
          if (this.$store.state.modify === this.$store.state.crtanje  && 
          this.$store.state.modify === true )
          this.$store.commit('paliModify')
    },
    modify () {
          if (this.$store.state.modify === this.$store.state.crtanje  && 
          this.$store.state.crtanje === true )
          this.$store.commit('paliCrtanje')
    },

  },
  computed: {
    sidebars(){
        return this.$store.state.sidebars
    },
    crtanje(){
        return this.$store.state.crtanje
    },
    snap(){
    return this.$store.state.snap
    },
    modify(){
    return this.$store.state.modify
    },
    layer(){
        return this.$store.state.layer
    },
    layers(){
       return this.$store.state.layers
    },
    btnStates() {
       return this.buttons.map(btn => btn.state)
    },
    ikona () {
      return this.$store.state.ikona
    }

  },
  methods: {
        toggleDraw() {
        this.$store.commit('paliCrtanje')
    },
        vrstaCrtanja(selectcrt) {
          this.$store.commit('izborCrtanja', selectcrt)
    },
        toggleSelect() {
        this.$store.commit('paliSelect')
    },
        toggleSnap() {
        this.$store.commit('paliSnap')
    },
        toggleModify() {
        this.$store.commit('paliModify')
    },
        toggleLayer(layer){
        this.$store.commit('setActiveLayer',layer) 
    },
        vrstaIkone(vrsta) {
          this.$store.commit('icon',vrsta) 
    },
        red(boja) {
        this.$store.commit('boja',boja) 
    }
},
}
</script>

<style>
  .divclass {
    padding-top: 80px;
    position:center;
  }
  .divclass2 {
    padding: 5px;
    position:center;
  }
  #dropdown-dropright > ul
  { background-color: rgba(255, 0, 0, 0);
    border: none }
    #dropdown-dropright > ul > button {
      background-color: white;
      border: '1px solid black'
    }
</style>