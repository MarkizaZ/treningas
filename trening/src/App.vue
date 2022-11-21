<template>
  <div id="app" ref="bla">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld
     :msg="msg"
     ime="šime"
     @promijeniMSG="funk"/>
    <VueMap ref="vueMap" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import VueMap from "./components/VueMap.vue";

export default {
  data() {
    return {
      msg: "BLA BLA",
    };
  },
  name: "App",
  components: {
    HelloWorld,
    VueMap,
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
  margin-top: 60px;
}
</style>
