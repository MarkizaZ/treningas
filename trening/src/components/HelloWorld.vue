<template>
  <div>
    <div :class="pritisnut ? 'aaaa' : 'bbbb'">{{ msg }} {{ number }}</div>
    <div>frtztzur</div>
    <b-button variant="danger" pill @click="func"> asda </b-button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      broj:1, pritisnut: false };
  },
  name: "HelloWorld",
  props: {
    msg: Number,
    number: Number,
    ime: String,
  },
  methods: {
    func(){
      this.$emit('promijeniMSG', this.broj++)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.aaaa {
  background-color: blue;
}
.bbbb {
  background-color: violet;
}
</style>
