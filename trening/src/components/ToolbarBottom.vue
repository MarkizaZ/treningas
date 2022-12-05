<template>
    <div class="mainDiv">
       
      <b-form-select :value="$store.state.layer" :options="$store.state.layers" 
        @input="toggleLayer" 
      :style="{position:'absolute', left:'2%', bottom:'30%', height:'22px', width:'100px', fontSize:'13px'}"></b-form-select>
       
      <b-button v-b-tooltip.hover.noninteractive title="Toggle draw (press Shift for Fehand Draw)" size="sm" :style="{position:'absolute', left:'12%', bottom:'18%'}" 
      @click="toggleDraw()" :pressed=$store.state.crtanje variant="outline-secondary" > <b-icon-plus></b-icon-plus></b-button> 


    <div :style="{position:'absolute', left:'15.5%', bottom:'1%'}" >
      <b-dropdown v-b-tooltip.hover.noninteractive  title="Draw select" :disabled="!crtanje" 
       droptop no-caret boundary="window" offset="-5" size="sm" class="drawSelectButton m-2" >
        <template #button-content >
          <b-icon :icon="$store.state.ikona" ></b-icon>
        </template>
        <div >
        <b-button  v-b-tooltip.hover.noninteractive id="but1"  title="Point draw" class="m-1" size="sm" @click="vrstaIkone('dot');vrstaCrtanja('Point')" >
           <b-icon-dot></b-icon-dot> </b-button>
        </div>
        <div>
        <b-button v-b-tooltip.hover.noninteractive title="Line draw" class="m-1" size="sm"  @click="vrstaIkone('pencil-square');vrstaCrtanja('LineString')" >
            <b-icon-pencil-square></b-icon-pencil-square></b-button>
        </div>
        <div>
        <b-button v-b-tooltip.hover.noninteractive title="Polygon draw" class="m-1" size="sm" @click="vrstaIkone('hexagon');vrstaCrtanja('Polygon')" >
            <b-icon-hexagon></b-icon-hexagon></b-button>
        </div>
        <div>
        <b-button v-b-tooltip.hover.noninteractive title="Circle draw" class="m-1" size="sm" @click="vrstaIkone('circle');vrstaCrtanja('Circle')" >
            <b-icon-circle></b-icon-circle></b-button>
        </div>
      </b-dropdown>
    </div>

      <b-button size="sm" :style="{position:'absolute', left:'20%', bottom:'18%'}"  v-b-tooltip.hover.noninteractive title="Toggle select" @click="toggleSelect()" :pressed.sync="myToggle" variant="outline-secondary" > <b-icon-hand-index></b-icon-hand-index></b-button>

      <b-button size="sm" :style="{position:'absolute', left:'24%', bottom:'18%'}"  v-b-tooltip.hover.noninteractive title="Toggle snap" @click="toggleSnap()" :pressed.sync="myToggle2" variant="outline-secondary" > <b-icon-arrows-angle-contract></b-icon-arrows-angle-contract></b-button>

      <b-button size="sm" :style="{position:'absolute', left:'28%', bottom:'18%'}"  v-b-tooltip.hover.noninteractive title="Toggle modify" @click="toggleModify()" :pressed=$store.state.modify variant="outline-secondary" > <b-icon-arrows-move></b-icon-arrows-move></b-button>


    <div :style="{position:'absolute', left:'31.5%', bottom:'1%'}">
    <b-dropdown id="dropdown-2"  class="drawSelectButton m-2" size="sm" boundary="window" v-b-tooltip.hover.noninteractive title="Stroke color"
     droptop no-caret :variant="$store.state.bojaIkone">
        <template #button-content >
         <b-icon-paint-bucket></b-icon-paint-bucket>
      </template>
         <div> <b-button @click="red('black'), bikone('dark')" variant="dark" class="botun" size="sm"> <b-icon-paint-bucket ></b-icon-paint-bucket></b-button> </div>
         <div> <b-button @click="red('red'), bikone('danger')" variant="danger" class="botun" size="sm"> <b-icon-paint-bucket ></b-icon-paint-bucket></b-button> </div>
         <div> <b-button @click="red('green'), bikone('success')" variant="success" class="botun" size="sm"> <b-icon-paint-bucket ></b-icon-paint-bucket></b-button> </div>
         <div> <b-button @click="red('blue'), bikone('primary')" variant="primary" class="botun" size="sm"> <b-icon-paint-bucket ></b-icon-paint-bucket></b-button> </div>
     </b-dropdown>
    </div>
    <div :style="{position:'absolute', left:'35.5%', bottom:'1%'}">
         <b-dropdown id="dropdown-3"  class="drawSelectButton m-2" size="sm" boundary="window" v-b-tooltip.hover.noninteractive title="Fill color"
          droptop no-caret :variant="$store.state.bojaIkone2">
        <template #button-content >
         <b-icon-paint-bucket></b-icon-paint-bucket>
      </template>
         <div> <b-button @click="fill('grey'), bikone2('secondary')" variant="secondary" class="botun" size="sm"> <b-icon-paint-bucket ></b-icon-paint-bucket></b-button> </div>
         <div> <b-button @click="fill('red'), bikone2('danger')" variant="danger" class="botun" size="sm"> <b-icon-paint-bucket ></b-icon-paint-bucket></b-button> </div>
         <div> <b-button @click="fill('green'), bikone2('success')" variant="success" class="botun" size="sm"> <b-icon-paint-bucket ></b-icon-paint-bucket></b-button> </div>
         <div> <b-button @click="fill('lightblue'), bikone2('info')" variant="info" class="botun" size="sm"> <b-icon-paint-bucket ></b-icon-paint-bucket></b-button> </div>
     </b-dropdown>
    </div>

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
        ],
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
    },
    bojaIkona () {
      return this.$store.state.bojaIkone
    },
     bojaFilla () {
      return this.$store.state.boja2
    },

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
          console.log(layer)
        this.$store.commit('setActiveLayer',layer) 
    },
        vrstaIkone(vrsta) {
          this.$store.commit('icon',vrsta) 
    },
        red(boja) {
        this.$store.commit('boja',boja) 
    },
        bikone(bojai) {
        this.$store.commit('ikonab',bojai) 
    },
        fill (bojaF) {
        this.$store.commit('fillB',bojaF) 
    },
        bikone2(bojai) {
        this.$store.commit('ikonabF',bojai) 
    },


    },
}
</script>

<style>
    .mainDiv {
        position: absolute; 
        bottom: 0px;
        background-color:#c8d1d6;
        width: 100%;
        height: 50px;
        border-top-style: solid;
        border: '1px  grey'
    }
   .drawSelectButton > ul
            { background-color: rgba(1, 221, 30, 0);
    border: none }
    .butDiv {
        background-color: white;
    }
    .botun {
        margin: 2px
    }
</style>