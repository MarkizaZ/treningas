<template>
    <div >
      
      <div :style="{position:'absolute', right:'50px', bottom:'150px', width:'300px', height:'152px'}">
        
        <transition name="slide">
          <div :style="{left:'0px', top:'0px', width:'75%', height:'25%',  position:'absolute'}" v-show='$store.state.sideButton1'>
            <b-button class="botunSide" >d1</b-button>
            <b-button  class="botunSide">d2</b-button>
            <b-button  class="botunSide">d3</b-button>
            <b-button  class="botunSide">d4</b-button>
          </div>
        </transition>
        <transition name="slide">
        <div :style="{ left:'0px', top:'40px', width:'75%', height:'25%', position:'absolute'}" v-show='$store.state.sideButton2'>
            <b-button  class="botunSide">d1</b-button>
            <b-button  class="botunSide">d2</b-button>
            <b-button  class="botunSide">d3</b-button>
            <b-button  class="botunSide">d4</b-button>
        </div>
        </transition>
        <transition name="slide">
        <div :style="{ left:'0px', top:'80px', width:'75%', height:'25%',  position:'absolute'}" v-show='$store.state.sideButton3'>
            <b-button  class="botunSide">d1</b-button>
            <b-button  class="botunSide">d2</b-button>
            <b-button  class="botunSide">d3</b-button>
            <b-button  class="botunSide">d4</b-button>
        </div>
        </transition>


        <!-- glavni botun-p -->
        <div :style="{ width:'75px', height:'152px',  right:'-0px', bottom:'0px', position:'absolute'}">

          <div :style="{width:'100%', right:'0px', top:'0px', position:'absolute'}">
            <transition name="slide">
              <div  v-show='$store.state.buttons'>
                <b-button  @click="toggleSideButton1()" :style="{width:'100%', height:'25%', margin:'1%'}">D</b-button>
                <b-button  @click="toggleSideButton2()" :style="{width:'100%', height:'25%', margin:'1%'}">C</b-button>
                <b-button  @click="toggleSideButton3()" :style="{width:'100%', height:'25%', margin:'1%'}">B</b-button>
              </div>
            </transition>
          </div>
        </div>
        <div>
          <b-button @click="toggleButtons ()"  
          :style="{  width:'75px', margin:'1%', position:'absolute', right:'-4px', bottom:'-9px' }"><b-icon-chevron-up/></b-button>
        </div>
       

          
        </div>



        <b-dropdown  id="dropdown-buttons" text="Tools" class="m-2" menu-class="w-100" style="bottom: 80px; right:70px; position:absolute">
                
            <b-dropdown-item-button> <b-button @click="sidebarOn('sidebarLayers')"><b-icon-layers-half></b-icon-layers-half></b-button>
            </b-dropdown-item-button>

            <b-dropdown-item-button> <b-button  @click="sidebarOn('sidebarGlobe')"><b-icon-globe></b-icon-globe></b-button>
            </b-dropdown-item-button>
           
            <b-dropdown-item-button> <b-button @click="toolbarOn()"><b-icon-pencil></b-icon-pencil></b-button>    
            </b-dropdown-item-button>

        </b-dropdown>
        <b-sidebar v-for="bar in sidebars" :key="bar" :width="bar ==='sidebarCrtanje' && '100px'" no-header 
        :title="bar"  :visible="$store.state.sidebar===bar">
            <SidebarLayers v-if="bar ==='sidebarLayers'" />
            <SidebarGlobe :style="{paddingTop:'50px'}" v-if="bar ==='sidebarGlobe'" />
        </b-sidebar>
    </div>

</template>

<script>

import SidebarLayers from "./SidebarLayers.vue"
import SidebarGlobe from "./SidebarGlobe.vue"
import {mapState} from 'vuex'

export default {
    components: {
        SidebarLayers,
        SidebarGlobe,
    },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['sidebars']),
    sidebars(){
        return this.$store.state.sidebars
    },
    buttons () {
      return this.$store.state.buttons
    }
  },
  methods: {
    sidebarOn(activeSidebar) {
      this.$store.commit('setActiveSidebar',activeSidebar)
  },
    toolbarOn() {
      this.$store.commit('setActiveToolbar')
  },
    toggleButtons() {
      this.$store.commit('toggleButtons')
    },
    toggleSideButton1 () {
      this.$store.commit('toggleSideButton1')
    },
     toggleSideButton2 () {
      this.$store.commit('toggleSideButton2')
    },
     toggleSideButton3 () {
      this.$store.commit('toggleSideButton3')
    },
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


ul {
   cursor: pointer;
}

.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.8s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
.botunSide {
  width:22%; 
  height:90%;
   margin:1%
   }
</style>
