<template>
<div>
  <vl-map
    :load-tiles-while-animating="false"
    :load-tiles-while-interacting="false"
    style="position: absolute;"
    ref="mapRef"
    id="vueLayersMap"
    :default-controls="{zoom: false}"
    :default-interactions="{shiftDragZoom:false, doubleClickZoom:false}"
    @pointermove="pointerMove"
  >
    <vl-view
       ref="viewRef"
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
      projection="EPSG:3765"
      :extent="[208311.05,4608969.52,744179.92,5161549.72]"
    />
    <VlLayerTile id="osm">
      <vl-source-osm />
    </VlLayerTile>

    <vl-layer-vector  ref="layerRef" projection="EPSG:3765" key="Layer2" name="Layer2" id="Layer2"
             >
      <vl-source-vector ident="Layer2" :features.sync="features" />
          <!-- <vl-style>
            <vl-style-circle>
              <vl-style-fill :color="layer.fillColor"></vl-style-fill>
              <vl-style-stroke :color="layer.strokeColor"></vl-style-stroke>
            </vl-style-circle>
            <vl-style-fill :color="layer.fillColor"></vl-style-fill>
            <vl-style-stroke :color="layer.strokeColor"></vl-style-stroke>
          </vl-style> -->
    </vl-layer-vector>

    <vl-interaction-select 
    v-if="modify"
    v-bind:source="$store.state.layer"
    @select="select"
    />
      
    <vl-interaction-draw  
    ref="drawRef"
    v-if="paliCrtanje"
    source="Layer2"
    :type="layerGeomType"
    :stop-click="true"

    @drawend="krajCrtanja"
    />
    <vl-interaction-snap v-if="snap"
     :source="$store.state.layer" />

    <vl-interaction-modify 
      id="modify1"
      v-if="modify"
      :pixel-tolerance="20"
      source="Layer2"
      @modifyend="modifyEnd"
      @modifystart="modifyStart" />
<!-- 
     <VlInteractionSelect 
     v-if="select"
     :hitTolerance="4"
     :multi='true'
      /> -->

      <!-- <vl-Interaction-translate v-if="translate"
      v-bind:source="$store.state.layer"
      /> -->

  </vl-map> 
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {cloneDeep as _cloneDeep} from 'lodash';
import Vue from "vue";
import {register} from 'ol/proj/proj4';
import proj4 from 'proj4';
import VueLayers from "vuelayers";
import "vuelayers/dist/vuelayers.css"; // needs css-loader
import {DragPan, MouseWheelZoom} from 'ol/interaction'


Vue.use(VueLayers, {dataProjection: 'EPSG:3765'});
export default {
  data() {
    return {
      zoom: 2,
      center: [500000, 500000],
      rotation: 0,
      features: []
    };
  },
  beforeMount() {
    proj4.defs('EPSG:3765','+proj=tmerc +lat_0=0 +lon_0=16.5 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs');
register(proj4)
    this.layers.forEach(element => {  
      this.features[element.value]=new Array()
    });console.log(this.features)
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
      translate() {
      return this.$store.state.translate
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
    },



  },
  watch: {
     undoTrigger(){
      this.undo()
     },
    features: {
      handler(){
        console.log(this.features)
      }, deep: true
    }

  },
  methods: {
      krajCrtanja (e) {
        console.log(e.feature.getGeometry())
    },
    undo () {
        this.$refs.drawRef.removeLastPoint()
      // console.log(this.$refs.drawRef)
      // this.$refs.drawRef.$interaction.handleEvent({
      //         type:'click', 
      //         coordinate:[14852020.343923, -7964126.851089],

      //         })

    }, 
    modifyEnd(){
      this.changeInteraction(true)
    },
    pointerMove(){
      // console.log(e.coordinate)
    },
    modifyStart() {
      this.changeInteraction(false)
    },
    changeInteraction(bool){
    const inter = this.$refs.mapRef.$map.getInteractions().getArray()
    console.log(inter)
    inter.forEach((iteraction)=> {
      if(iteraction instanceof DragPan || iteraction instanceof MouseWheelZoom){
        iteraction.setActive(bool)
      }
    })
    }

  }
};
</script>


