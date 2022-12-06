<template>
<div>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    style="position: absolute;"
    ref="mapRef"
    id="vueLayersMap"
    :default-controls="{zoom: false}"
    :default-interactions="{shiftDragZoom:false}"
    tabindex="0"
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

    <vl-layer-vector v-for="layer in layers" ref="layerRef" :key="layer.value" :visible="layer.visible"
             :opacity="layer.opacity" >
      <vl-source-vector :ident="layer.value" :features.sync="features[layer.value]" />
          <vl-style>
            <vl-style-circle>
              <vl-style-fill :color="layer.fillColor"></vl-style-fill>
              <vl-style-stroke :color="layer.strokeColor"></vl-style-stroke>
            </vl-style-circle>
            <vl-style-fill :color="layer.fillColor"></vl-style-fill>
            <vl-style-stroke :color="layer.strokeColor"></vl-style-stroke>
          </vl-style>
    </vl-layer-vector>

    <vl-interaction-select 
    v-if="modify"
    v-bind:source="$store.state.layer"
    @select="select"
    />
      
    <vl-interaction-draw  
    ref="drawRef"
    v-if="paliCrtanje"
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
    },
          opacity () {
      return this.$store.state.opacity
    },
    undoTrigger() {
      return this.$store.state.undoTrigger
    }


  },
  watch: {
     undoTrigger(){
      this.undo()
     }
  },
  methods: {
    zoomChange (){
        console.log(this.$refs.viewRef)
        console.log(this.$refs.mapRef)
    },
      krajCrtanja (e) {
        console.log(e.feature.getGeometry())
        e.feature.set('color', this.boja)
        e.feature.set('color2', this.boja2)
    },
    undo () {
      // this.$refs.drawRef.removeLastPoint()
      console.log(this.$refs.drawRef)
      this.$refs.drawRef.$interaction.handleEvent({
              type:'click', 
              coordinate:[14852020.343923, -7964126.851089],

              })
    }, 
    bla(e){
      console.log('asdasdasdas', e)
    }

  }
};
</script>


