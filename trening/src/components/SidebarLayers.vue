<template>
    <div >
    <div :style="{position:'absolute', width:'300px', height:'600px', right:'4%', bottom:'30%'}">
        <b-button @click="toggleLayersTable()" class="m-2"> Layers    <b-icon icon="layers-fill" aria-hidden="true"></b-icon>
        </b-button>

        <div v-show='$store.state.layersTable' :style="{padding:'5px',width:'300px', height:'600px', border:'solid', borderColor:'black', backgroundColor:'transparent'}">
            <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0">
                <b-input-group size="sm">
                    <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search" class="m-2"></b-form-input>
                    <b-input-group-append>
                        <b-button size="sm" :style="{marginTop:'8px'}" :disabled="!filter" @click="filter = ''">Clear</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
         
        <b-table striped hover :items="items" :fields="fields" :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc" :select-mode="selectMode" ref="selectableTable" selectable sticky-header
        @row-selected="onRowSelected"  thead-class="hidden_header"  :filter="filter"
        :filter-included-fields="filterOn" @filtered="onFiltered"  :per-page="perPage">
        <template #cell(visible)="data">
        <b-icon :icon="!data.item.visible? 'eye-slash': 'eye'"> {{data}}</b-icon>

        </template>
            <template #cell(show_details)="row">
        <b-button size="sm" style="font-size: 0.75rem;" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
        </template>
            <template #row-details="row">
        <b-card >
          <b-row class="mb-2" >
            <b-col xs class="text-sm-right" style="font-size: 0.70rem;" ><b>Geom type:{{ row.item.geomType }}</b></b-col>
            <b-col xs class="text-sm-right" style="font-size: 0.70rem;" ><b>Value:{{ row.item.value }}</b></b-col>
            <div >
            <b-form-input id="range-2"  :style="{margin:'10px'}" @change="setOpacity($event,row.item.value)" 
            :value="computedOpacity(row.item.value)" type="range" min="0" max="1" step="0.1"></b-form-input>
            <b-tooltip target="range-2" triggers="hover" :delay="{show: 1000, hide: 100}" >Set opacity </b-tooltip>
            </div>
        <b-form-group  v-slot="{ ariaDescribedby }">
             <b-form-radio size="sm" v-model="fillStroke" :aria-describedby="ariaDescribedby" name="some-radios" value="fillColor">fillColor</b-form-radio>
             <b-form-radio size="sm" v-model="fillStroke" :aria-describedby="ariaDescribedby" name="some-radios" value="strokeColor">strokeColor</b-form-radio>
        </b-form-group>

        <color-picker
            theme="dark"
            :sucker-hide="true"
            @changeColor="changeColor($event, row.item.value, fillStroke)"/>
        </b-row>


        </b-card>
        </template>
        </b-table>

        <b-button size="sm" class="m-2" @click="selectAllRows">Select all</b-button>
        <b-button size="sm" @click="clearSelected">Clear selected</b-button>
        </div>
    </div>   
    </div>
</template>
<script>
 import colorPicker from '@caohenghu/vue-colorpicker'
export default {
    components: {
    colorPicker
    },
    data (){
        return {
            options: [
          { value: 'sidebarLayers', text: 'Open SidebarLayers'},
          { value: 'sidebarGlobe', text: 'Open SidebarGlobe'},
          { value: 'sidebarPen', text: 'Open SidebarPen'}
        ],
         fields: ['text', 'visible', 'show_details'],
         items: this.$store.state.layers,
         sortBy: 'text',
        sortDesc: false,
        selectMode: 'multi',
        selected: [],
        filter: null,
        filterOn: [],
        fillStroke: 'fillColor',
        perPage: 10,
        }
    }, 
    computed: {
        // ...mapState(['text'])
        text () {
            return this.$store.state.text
        },
        opacity () {
        return this.$store.state.opacity
        },
         layersTable () {
        return this.$store.state.layersTable
        },

    },
    mounted() {
      this.totalRows = this.items.length
    },
    methods: {
        onRowSelected(items) {
            console.log(items)
        this.$store.commit('setVisibleLayers', items)
        },
        selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
         },
         clearSelected() {
        this.$refs.selectableTable.clearSelected()
        },
        textfunc(){
            this.text='Ante'
        },
        promijeniText(event){
            console.log('OVO', event)
            // this.text = event
            this.$store.commit('changeText', event)
        },
        test(e){
            console.log(e)
        },
        sidebarOn(activeSidebar) {
            this.$store.commit('setActiveSidebar',activeSidebar)
        },
        setOpacity(event, layer) {
            console.log(event, layer)
            this.$store.commit('setOpacity',{event,layer})
            console.log()
        },
        computedOpacity(layer){
            const temp = this.$store.state.layers.find(item => item.text === layer 
            )
            return temp.opacity
        },
          onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      toggleLayersTable() {
        this.$store.commit('toggleLayerTb')
      },
      changeColor(e, layer, fillStroke) {
        const rgba =Object.entries(e.rgba)
        const rgbaSorted = rgba.sort().reverse()
        const rgbaSortedValues = 'rgba('+rgbaSorted.map(item => item[1]).join()+')'
        this.$store.commit('setLayerColor',{layer, rgbaSortedValues, fillStroke})

      }

    }
}
</script>

<style >
.hidden_header {
  display: none;
}
</style>