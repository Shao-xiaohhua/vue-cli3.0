<template>
  <!-- prettier-ignore -->
  <div class="app">
    <ViewBox body-padding-bottom="44px" ref="viewBox">
      <router-view/>
      <tabbar slot="bottom" style="position:fixed;" v-if="tabberSwite">
        <ul class="link-wrap">
          <li
            class="list"
            :class="{'active': item.act}"
            v-for="(item, index) in linkArr"
            :key="index"
          >
            <a :href="item.url">
              <i class="iconfont" :class="item.icon"></i>
              <br>
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </tabbar>
    </ViewBox>
  </div>
</template>
<script>
import { ViewBox, Tabbar } from 'vux';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { ViewBox, Tabbar },
  name: 'app',
  data() {
    return {
      selected: '',
      aa: '',
      transitionName: 'slide-left',
      linkArr: [
        {
          name: '首页',
          url: '#/',
          navName: 'index',
          act: true,
          icon: 'icon-home'
        },
        {
          name: '服务',
          url: '#/service',
          navName: 'service',
          act: false,
          icon: 'icon-square'
        },
        {
          name: '培训',
          url: '#/train',
          navName: 'train',
          act: false,
          icon: 'icon-course'
        },
        {
          name: '助手',
          url: '#/assistant',
          navName: 'assistant',
          act: false,
          icon: 'icon-mine-fill'
        },
        {
          name: '商城',
          url: '#/shopping',
          navName: 'shopping',
          act: false,
          icon: 'icon-mine-fill'
        }
      ]
    };
  },
  methods: {
    ...mapActions([]),
    getNavName() {
      for (let i = 0; i < this.linkArr.length; i++) {
        if (this.linkArr[i].navName === this.navbarText) {
          this.linkArr[i].act = true;
        } else {
          this.linkArr[i].act = false;
        }
      }
    },
    hashChange() {
      this.$refs.viewBox.scrollTo(0);
    }
  },
  watch: {
    navbarText() {
      this.getNavName();
    }
  },
  computed: {
    ...mapGetters(['showtabbar', 'tabberSwite', 'navbarText'])
  },
  created() {
    this.getNavName();
    // let navFun = function() {
    //   let name, value;
    //   let str = location.href; //取得整个地址栏
    //   let num = str.indexOf('?');
    //   str = str.substr(num + 1); //str得到?之后的字符串
    //   let arr = str.split('&'); //得到&分割的参数，放入数组中
    //   for (let i = 0; i < arr.length; i++) {
    //     num = arr[i].indexOf('=');
    //     if (num > 0) {
    //       name = arr[i].substring(0, num);
    //       value = arr[i].substr(num + 1);
    //       this[name] = value;
    //     }
    //   }
    // };
    // let Request = new navFun();
    // let name = decodeURI(Request.navName);
    // for (let i = 0; i < this.linkArr.length; i++) {
    //   let nameA = encodeURI(this.linkArr[i].name);
    //   this.linkArr[i].act = false;
    //   this.linkArr[i].navName = nameA;
    // }
    // for (let i = 0; i < this.linkArr.length; i++) {
    //   if (this.linkArr[i].name === name) {
    //     this.linkArr[i].act = true;
    //   }
    // }
  },
  mounted() {
    if (
      'onhashchange' in window &&
      (typeof document.documentMode === 'undefined' ||
        document.documentMode === 8)
    ) {
      window.onhashchange = this.hashChange;
    }
  }
};
</script>
<style lang="less">
/* prettier-ignore */
@import "~vux/src/styles/reset.less";
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  width: 100%;
  height: 100%;
  background: #f2f4f4;
  overflow: hidden;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
/* prettier-ignore */
@import 'assets/scss/variables';
/* prettier-ignore */
@import 'assets/scss/mixins';
.app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .weui-tabbar {
    transition: position 0.3s;
  }
  .weui-tabbar.hidden {
    bottom: -44px;
  }
  .router-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 44px;
    &.hidden {
      padding-bottom: 0;
    }
  }
}
.link-wrap {
  position: relative;
  width: 100%;
  height: 44px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  .list {
    width: calc(100% / 3);
    text-align: center;
    // line-height: 44px;
    a {
      position: relative;
      width: 100%;
      height: 100%;
      display: block;
      font-size: 12px;
      .iconfont {
        display: block;
        font-size: 20px;
      }
      span {
        display: block;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        text-align: center;
      }
    }
  }
  & .list.active a {
    color: $brand;
  }
  a {
    color: $gray-light;
  }
}
</style>
