<template>
  <div class="example">
    <span>1</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import api from "../api/index";
console.log(api)
export default {
  components: {
  },
  name: "example",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getAllNum"])
  },
  watch: {
    allNumber(newVal) {
      console.log(newVal)
    }
  },
  computed: {
    ...mapGetters(['allNumber'])
  },
  created() {
    console.log('先')
  },
  mounted() {
    api.getCsrf().then(json => {
      console.log(json.data)
    })
    console.log(api.getCsrf)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .example {
    width: 100%;
    height: 200px;
    background: red;
  }
</style>