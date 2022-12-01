<template>
    <div >
      <div class="buttonDiv1" :style="{position:'absolute', right:'50px', bottom:'200px', width:'50px'}">
        <transition name="slide">
         <div class="buttonDiv2" v-show='$store.state.buttons'>
          <b-button squared :style="{width:'100%', height:'33.34%'}">c
             <div :style="{marginLeft:'-100px', width:'50px', height:'20px', position:'relative', backgroundColor:'red'}">
            </div> 
          </b-button>
          <b-button squared :style="{width:'100%', height:'33.34%'}">c</b-button>
          <b-button squared :style="{width:'100%', height:'33.34%'}">c</b-button>
         </div>
        </transition>




         <div class="buttonDiv3">
          <b-button @click="toggleButtons ()" squared :style="{width:'100%', height:'100%'}">a</b-button>
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
    }
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
   transition-duration: 1.3s;
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
</style>
