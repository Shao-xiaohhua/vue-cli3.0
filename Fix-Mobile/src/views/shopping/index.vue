<template>
    <!-- prettier-ignore -->
    <div class="shopping-wrap">
      商城
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    components: {
    },
    name: 'shopping',
    data() {
      return {
      };
    },
    methods: {
      ...mapActions([])
    },
    watch: {},
    computed: {
      ...mapGetters([])
    },
    created() {},
    mounted() {
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss" rel="stylesheet/scss">
  /* prettier-ignore */
  @import "../../assets/scss/common";
  </style>
  