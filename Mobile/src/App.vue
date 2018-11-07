<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import 'assets/scss/variables';
  @import 'assets/scss/mixins';
  #app {
    width: 100%;
    height: auto;
  }
</style>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>