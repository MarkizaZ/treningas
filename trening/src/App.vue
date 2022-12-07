<template>
  <div id="app">
    <VueMap ref="vueMap" />
      <ButtonGroup/>
      <ToolbarBottom v-show="$store.state.toolbar" />
  </div>
</template>

<script>
import VueMap from "./components/VueMap.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import ToolbarBottom from "./components/ToolbarBottom.vue";




export default {
  data() {
    return {
    };
  },
  name: "App",
  components: {
    VueMap,
    ButtonGroup,
    ToolbarBottom
  },
  computed: {
      toolbar() {
      return this.$store.state.toolbar
    },
  },
  mounted() {
  },
  methods: {
    sidebarOn(activeSidebar) {
      this.$store.commit('setActiveSidebar',activeSidebar)
      },
      fuck() {
        console.log('aasdas')
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
