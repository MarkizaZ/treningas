<template>
  <div :style="{paddingTop:'90px', position:'center'}">

    <b-button @click="toggleDraw()" :pressed.sync="myToggle" variant="outline-secondary" > <b-icon-pencil></b-icon-pencil></b-button> 

    <b-dropdown id="dropdown-dropright" dropright text="Drop-Right" variant="outline-secondary" class="m-2" :style="{padding:'0px, 100px'}">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>


    

    Odabir crtanja
    <b-form-select :disabled="!crtanje" v-model="selected" @change="vrstaCrtanja(selected)" :options="options"></b-form-select>

    {{selected}}
    <b-form-checkbox :style="{paddingTop:'60px'}" :checked="snap" @change="toggleSnap()" >
      Snap
    </b-form-checkbox>

    <b-form-checkbox :checked="modify" @change="toggleModify()" >
      Modify
    </b-form-checkbox>

    <b-dropdown id="dropdown-1" text="Layers" class="m-md-2">
        <b-dropdown-item v-for="layer in layers" :key="layer.name" 
        @click="toggleLayer(layer.name)">{{layer.name}}</b-dropdown-item>
     </b-dropdown>
     {{layer}}
  </div>
</template>

<script>



export default {
    components: {

    },
  data() {
    return {    
        myToggle: false,
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
    }

  },
  methods: {
        toggleDraw() {
        this.$store.commit('paliCrtanje')
    },
        vrstaCrtanja(select) {
          console.log("Drugi"+select)
          this.$store.commit('izborCrtanja', select)
    },
        toggleSnap() {
        this.$store.commit('paliSnap')
    },
        toggleModify() {
        this.$store.commit('paliModify')
    },
        toggleLayer(layer){
        this.$store.commit('setActiveLayer',layer) 
    }
},
}
</script>
