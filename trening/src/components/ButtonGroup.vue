<template>
    <div>
        <b-dropdown  id="dropdown-buttons" text="Tools" class="m-2" menu-class="w-100" style="bottom: 30px; right:80px; position:absolute">

            <b-dropdown-item-button> <b-button @click="sidebarOn('sidebarLayers')"><b-icon-layers-half></b-icon-layers-half></b-button>
            </b-dropdown-item-button>

            <b-dropdown-item-button> <b-button  @click="sidebarOn('sidebarGlobe')"><b-icon-globe></b-icon-globe></b-button>
            </b-dropdown-item-button>
           
            <b-dropdown-item-button> <b-button  @click="sidebarOn('sidebarPen')"><b-icon-pencil></b-icon-pencil></b-button>    
            </b-dropdown-item-button>

        </b-dropdown>
        <b-sidebar v-for="bar in sidebars" :key="bar" :visible="$store.state.sidebar===bar">
            <div>{{bar}}</div>
            <div v-if="bar==='sidebarLayers'">aaaaaaaa</div>
            <div v-if="bar==='sidebarGlobe'">bbbbbbbbb</div>
            <div v-if="bar==='sidebarPen'">cccccccccc</div>
            <SidebarLayers v-if="bar ==='sidebarLayers'" />
        </b-sidebar>
<!-- 
        <b-sidebar :visible="isSidebarLayersOn" id="sidebarLayers" title="Layers" shadow>
                    <div class="px-3 py-2"></div>
        </b-sidebar>

        <b-sidebar :visible="isSidebarLayersOn2" id="sidebarGlobe" title="Map" shadow>
                    <div class="px-3 py-2"></div>
        </b-sidebar>
        
        <b-sidebar :visible="isSidebarLayersOn3" id="sidebarPen" title="Draw" shadow>
                    <div class="px-3 py-2"></div>
        </b-sidebar> -->
    </div>
</template>

<script>

import SidebarLayers from "./SidebarLayers.vue"
import {mapState} from 'vuex'
export default {
    components: {
        SidebarLayers
    },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('sidebars'),
    sidebars(){
        return this.$store.state.sidebars
    },
    isSidebarLayersOn () {
        if(this.$store.state.sidebar==='sidebarGlobe'){
            return true
        }
        else return false
    },
    isSidebarLayersOn2 () {
        if(this.$store.state.sidebar==='sidebarLayers'){
            return true
        }
        else return false
    },
     isSidebarLayersOn3 () {
        if(this.$store.state.sidebar==='sidebarPen'){
            return true
        }
        else return false
    }

  },
  methods: {
    sidebarOn(activeSidebar) {
        this.$store.commit('setActiveSidebar',activeSidebar)
    }

    }
};
</script>
