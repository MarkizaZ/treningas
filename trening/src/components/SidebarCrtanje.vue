<template>
  <div :style="{paddingTop:'90px'}">
    <b-form-checkbox  :checked="crtanje" @change="toggleDraw()" >
      Crtanje
    </b-form-checkbox>
    Odabir crtanja
    <b-form-select :disabled="!crtanje" v-model="selected" @change="vrstaCrtanja(selected)" :options="options"></b-form-select>

    {{selected}}
    <b-form-checkbox :checked="snap" @change="toggleSnap()" >
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
        checked: false,
        selected: 'LineString',
        options: [
          { value: 'LineString', text: 'Linije' },
          { value: 'Polygon', text: 'Poligon' },
          { value: 'Circle', text: 'Krug', }
        ]

    };
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
            console.log('click')
        this.$store.commit('paliModify')
    },
        toggleLayer(layer){
        this.$store.commit('setActiveLayer',layer) 
    }
},
}
</script>
