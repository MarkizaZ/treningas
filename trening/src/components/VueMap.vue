<template>
<div>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    style="position: absolute;"
    ref="mapRef"
    @click="bla"
  >
    <vl-view
       ref="viewRef"
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    />
    <VlLayerTile id="osm">
      <vl-source-osm />
    </VlLayerTile>

    <vl-layer-vector v-for="layer in layers" :key="layer.name">
      <vl-source-vector :ident="layer.name" :features.sync="features[layer.name]">
          <vl-style>          
              <vl-style-fill :color="layer.color"></vl-style-fill>
              <vl-style-stroke :color="layer.color"></vl-style-stroke>
          </vl-style>
      </vl-source-vector>
    </vl-layer-vector>
<!-- 
    <vl-layer-vector>

      <vl-source-vector ident="Layer2" :features.sync="features2"></vl-source-vector>
          <vl-style>          
              <vl-style-fill color="white"></vl-style-fill>
              <vl-style-stroke color="red"></vl-style-stroke>
          </vl-style>

    </vl-layer-vector> -->
    <vl-interaction-select 
    v-if="modify"
    v-bind:source="$store.state.layer"
    @select="select"
    />
      
    <vl-interaction-draw v-if="crtanje"
    v-bind:source="$store.state.layer"
    type="LineString"
    />
    <vl-interaction-snap v-if="snap"
     v-bind:source="$store.state.layer" />
<!-- 
    <VlInteractionModify v-if="modify"
     v-bind:source="$store.state.layer"/> -->

  </vl-map> 
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {cloneDeep as _cloneDeep} from 'lodash'
import Vue from "vue";
import VueLayers from "vuelayers";
import "vuelayers/dist/vuelayers.css"; // needs css-loader
Vue.use(VueLayers);
export default {
  data() {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      features: {}
    };
  },
  beforeMount() {

    this.layers.forEach(element => {  
      this.features[element.name]=[]
    });
  }, 
  mounted(){
    console.log(this.$refs.mapRef.getInteractions())
  },
  computed: {
        crtanje() {
      return this.$store.state.crtanje
    },
        snap() {
      return this.$store.state.snap
    },
      modify() {
        return this.$store.state.modify
    },
      layer() {
        return this.$store.state.layer
    },
    layers () {
      return this.$store.state.layers
    }
  },
  methods: {
    zoomChange (){
        console.log('aaaaaaaaaaaaaaa')
        console.log(this.$refs.viewRef)
        console.log(this.$refs.mapRef)
    },
    bla(){
      console.log('bla')

    },
    select(e){
      console.log(e)
    }
  }
};
</script>
