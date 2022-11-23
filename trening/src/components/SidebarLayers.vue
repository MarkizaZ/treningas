<template>
    <div class="mt-5 mb-1 ml-2 mr-3" :style="{backgroundColor:'red'}">
        <b-button>PALI CRANJE</b-button>
        <b-form-input v-model="text"></b-form-input>
        ISPIS: {{text}}
        <b-button @click="textfunc">drugi botun</b-button>
    </div>
</template>
<script>
export default {
    data (){
        return {
            text: null
        }
    }, 
    methods: {
        textfunc(){
            this.text='Ante'
        }
    }
}
</script>