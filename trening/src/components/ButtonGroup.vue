<template>
    <div>
        <b-dropdown  id="dropdown-buttons" text="Tools" class="m-2" menu-class="w-100" style="bottom: 30px; right:80px; position:absolute">
                
            <b-dropdown-item-button> <b-button @click="sidebarOn('sidebarLayers')"><b-icon-layers-half></b-icon-layers-half></b-button>
            </b-dropdown-item-button>

            <b-dropdown-item-button> <b-button  @click="sidebarOn('sidebarGlobe')"><b-icon-globe></b-icon-globe></b-button>
            </b-dropdown-item-button>
           
            <b-dropdown-item-button> <b-button @click="sidebarOn('sidebarCrtanje')"><b-icon-pencil></b-icon-pencil></b-button>    
            </b-dropdown-item-button>

        </b-dropdown>
        <b-sidebar no-header 
        :title="bar" v-for="bar in sidebars" :key="bar" :visible="$store.state.sidebar===bar">
            <SidebarLayers v-if="bar ==='sidebarLayers'" />
            <SidebarGlobe :style="{paddingTop:'50px'}" v-if="bar ==='sidebarGlobe'" />
            <SidebarCrtanje v-if="bar ==='sidebarCrtanje'" />
        </b-sidebar>
    </div>
</template>

<script>

import SidebarLayers from "./SidebarLayers.vue"
import SidebarGlobe from "./SidebarGlobe.vue"
import SidebarCrtanje from "./SidebarCrtanje.vue"
import {mapState} from 'vuex'

export default {
    components: {
        SidebarLayers,
        SidebarGlobe,
        SidebarCrtanje
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
  },
  methods: {
    sidebarOn(activeSidebar) {
      this.$store.commit('setActiveSidebar',activeSidebar)
  },
    }
};
</script>
