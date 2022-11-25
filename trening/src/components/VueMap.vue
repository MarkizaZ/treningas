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

    <vl-layer-vector>
      <vl-source-vector ident="nebitno" :features.sync="features"></vl-source-vector>
    </vl-layer-vector>

    <vl-layer-vector>

      <vl-source-vector ident="bitno" :features.sync="features2"></vl-source-vector>
          <vl-style>          
              <vl-style-fill color="white"></vl-style-fill>
              <vl-style-stroke color="red"></vl-style-stroke>
          </vl-style>

    </vl-layer-vector>

    <vl-interaction-draw v-if="crtanje"
    source="nebitno"
    type="LineString"
    :stop-click="true"
    />
    <vl-interaction-snap v-if="snap"
    source="nebitno" />

    <VlInteractionModify v-if="modify"
    source="nebitno"/>

  </vl-map> 
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
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
      features:[],
       features2:[]
    };
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
  }
};
</script>
