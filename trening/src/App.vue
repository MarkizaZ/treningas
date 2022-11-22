<template>
  <div id="app">
    <VueMap ref="vueMap" />
    <ButtonGroup/>
  </div>
</template>

<script>
import VueMap from "./components/VueMap.vue";
import ButtonGroup from "./components/ButtonGroup.vue";

export default {
  data() {
    return {
    };
  },
  name: "App",
  components: {
    VueMap,
    ButtonGroup,
  },
  mounted() {
  },
  methods: {
    funk(e) {
      console.log(this.$refs)
    
      this.msg = e;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
