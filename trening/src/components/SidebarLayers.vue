<template>
    <div class="mt-5 mb-1 ml-2 mr-3" :style="{padding:'20px', backgroundColor:'red'}">
       
        <b-form-input :value="text" ></b-form-input>
        ISPIS: {{text}}
        
        <b-form-select :options="options"  @input="sidebarOn"></b-form-select>

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
        ]
        }
    }, 
    computed: {
        // ...mapState(['text'])
        text () {
            return this.$store.state.text
        }
    },
    methods: {
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
    }
}
</script>