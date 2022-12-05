<template>
    <div >


    <div :style="{position:'absolute', width:'300px', height:'400px', right:'4%', bottom:'50%'}">
        <b-button>Layers
        </b-button>
        <div :style="{padding:'5px', border:'solid', borderColor:'black'}">
            <b-table striped hover :items="items" :fields="fields" :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc" :select-mode="selectMode" ref="selectableTable" selectable sticky-header
      @row-selected="onRowSelected"  thead-class="hidden_header">
      
     <template #cell(visible)="data">
        <b-icon :icon="!data.item.visible? 'eye-slash': 'eye'"> {{data}}</b-icon>

      </template>
            <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
      </template>
            <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col xs class="text-sm-right" style="font-size: 0.70rem;" ><b>Geom type:{{ row.item.geomType }}</b></b-col>
            <b-col xs class="text-sm-right" style="font-size: 0.70rem;" ><b>Value:{{ row.item.value }}</b></b-col>
            <div >
            <b-form-input id="range-2"  :style="{margin:'10px'}" @change="setOpacity($event,row.item.value)" 
            :value="computedOpacity(row.item.value)" type="range" min="0" max="1" step="0.1"></b-form-input>
            <b-tooltip target="range-2" triggers="hover" :delay="{show: 1000, hide: 100}" >Set opacity </b-tooltip>
            </div>
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

export default {
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
        selected: []
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

    },
    methods: {
        onRowSelected( items, ) {
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
        }

    }
}
</script>

<style >
.hidden_header {
  display: none;
}
</style>