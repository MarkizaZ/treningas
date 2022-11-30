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
          <!-- <vl-style>          
              <vl-style-fill :color="$store.state.boja"></vl-style-fill>
              <vl-style-stroke :color="$store.state.boja"></vl-style-stroke>
          </vl-style> -->
          <vl-style-func :function="styleFucnction">
            
          </vl-style-func>
      </vl-source-vector>
    </vl-layer-vector>

    <vl-interaction-select 
    v-if="modify"
    v-bind:source="$store.state.layer"
    @select="select"
    />
      
    <vl-interaction-draw  v-if="paliCrtanje"
    v-bind:source="$store.state.layer"
    v-bind:type="$store.state.vrstaCrtanja"
    @drawend="krajCrtanja"
    />
    <vl-interaction-snap v-if="snap"
     v-bind:source="$store.state.layer" />

    <VlInteractionModify v-if="modify"
     v-bind:source="$store.state.layer"/>

     <VlInteractionSelect v-if="select"
     hitTolerance= 4
     multi=true
      />

  </vl-map> 
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {cloneDeep as _cloneDeep} from 'lodash'
import Vue from "vue";
import VueLayers from "vuelayers";
import "vuelayers/dist/vuelayers.css"; // needs css-loader
import { Fill, Stroke, Style } from 'ol/style'

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
      paliCrtanje() {
      return this.$store.state.crtanje
    },
      vrstaCrtanja() {
      return this.$store.state.vrstaCrtanja
    },
      select () {
      return this.$store.state.select
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
    },
    boja () {
      return this.$store.state.boja
    },

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
    krajCrtanja (e) {
      console.log(e)
      e.feature.set('color', this.boja)
    },
    styleFucnction (feature) {
      const color = feature.get('color')
      return [
        new Style({
           fill: new Fill({color: color}),
           stroke: new Stroke({color: color})})];
    }
  }
};
</script>
