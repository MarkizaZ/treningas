<template>
<div>
   {{layerGeomType}}
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    style="position: absolute;"
    ref="mapRef"
    :default-controls="{zoom: false}"
    :default-interactions="{shiftDragZoom:false}"
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

    <vl-layer-vector v-for="layer in layers" ref="layerRef" :key="layer.value">
      <vl-source-vector :ident="layer.value" :features.sync="features[layer.value]">
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
    v-bind:type="layerGeomType"
    @drawend="krajCrtanja"
    />
    <vl-interaction-snap v-if="snap"
     v-bind:source="$store.state.layer" />

    <VlInteractionModify v-if="modify"
     v-bind:source="$store.state.layer"/>

     <VlInteractionSelect v-if="select"
     :hitTolerance="4"
     :multi='true'
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
import { Fill, Stroke, Style, Circle } from 'ol/style'

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
      boja2 () {
      return this.$store.state.boja2
    },
      layerGeomType () {
        const type = this.layers.find((item) => {
          return this.layer === item.value
        })
        return type.geomType
      }

  },
  methods: {
    zoomChange (){
        console.log(this.$refs.viewRef)
        console.log(this.$refs.mapRef)
    },
      krajCrtanja (e) {
        console.log(e)
        e.feature.set('color', this.boja)
        e.feature.set('color2', this.boja2)
    },
    styleFucnction (feature) {
      const color = feature.get('color')
      const color2 = feature.get('color2')
      const fill = new Fill({color: color2})
      const stroke = new Stroke({color: color})
      return [
        new Style({
           image:new Circle({fill, stroke, radius:3}),
           fill,
           stroke})];
    }
  }
};
</script>


