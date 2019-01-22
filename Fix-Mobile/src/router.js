import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index/index.vue'; // 首页
import Assistant from './views/assistant/index.vue'; // 助手
import Train from './views/train/index.vue'; // 培训
import Service from './views/service/index.vue'; // 服务
import Shopping from './views/shopping/index.vue'; // 服务

import vuex from '@/store/index';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      title: '首页',
      navName: 'index'
    }
  },
  {
    path: '/assistant',
    name: 'Assistant',
    component: Assistant,
    meta: {
      title: '助手',
      navName: 'assistant'
    }
  },
  {
    path: '/train',
    name: 'Train',
    component: Train,
    meta: {
      title: '培训',
      navName: 'train'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
    meta: {
      title: '服务',
      navName: 'service'
    }
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping,
    meta: {
      title: '商城',
      navName: 'shopping'
    }
  }
];

let router = new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        x: 0,
        y: 0
      };
    } else {
      return savedPosition;
    }
  }
});

export default router;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  // if (to.meta.title) {
  //   document.title = to.meta.title;
  //   // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
  //   let str = /\(i[^;]+;( U;)? CPU.+Mac OS X/;
  //   if (navigator.userAgent.match(str)) {
  //     const hackIframe = document.createElement('iframe');
  //     hackIframe.style.display = 'none';
  //     hackIframe.src = '/fixIosTitle.html?r=' + Math.random();
  //     document.body.appendChild(hackIframe);
  //     setTimeout(_ => {
  //       document.body.removeChild(hackIframe);
  //     }, 300);
  //   }
  // }
  setTitle(to, from, next);
  ctrlNavBar(to, from, next);
  next();
});

function ctrlNavBar(to, from, next) {
  if (to.meta.navName) {
    //需要navBar的页面
    vuex.dispatch('AgettabberSwite', true);
    vuex.dispatch('AgetnavbarText', to.meta.navName);
  } else {
    vuex.dispatch('AgettabberSwite', false);
  }
}

function setTitle(to, from, next) {
  if (to.meta.title) {
    document.title = to.meta.title;
    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    let str = /\(i[^;]+;( U;)? CPU.+Mac OS X/;
    if (navigator.userAgent.match(str)) {
      const hackIframe = document.createElement('iframe');
      hackIframe.style.display = 'none';
      hackIframe.src = '/fixIosTitle.html?r=' + Math.random();
      document.body.appendChild(hackIframe);
      setTimeout(_ => {
        document.body.removeChild(hackIframe);
      }, 300);
    }
  }
}
