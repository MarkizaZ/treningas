<template>
<div>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    style="position: absolute;"
    ref="mapRef"
  >
    <vl-view
       ref="viewRef"
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    ></vl-view>
    <!-- <vl-layer-vector>
      <vl-layer-source ident="sourceVector"></vl-layer-source>
    </vl-layer-vector>
    <vl-interaction-draw
    source="sourceVector"
    type="LineString"
    >

    </vl-interaction-draw> -->

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
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
    };
  },
  methods: {
    zoomChange (){
        console.log('aaaaaaaaaaaaaaa')
        console.log(this.$refs.viewRef)
        console.log(this.$refs.mapRef)
    }
  }
};
</script>
