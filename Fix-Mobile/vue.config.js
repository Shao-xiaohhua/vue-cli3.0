var proxyConfig = require('./proxy.config');
module.exports = {
  baseUrl: './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      // 引入全局scss
      // sass: {
      //   data: `@import "@/assets/scss/common.scss";`
      // },
      // 引入iconfont
      css: {
        data: `@import "@/assets/fonts/iconfont.css";`
      }
    }
  },
  devServer: {
    // 配置服务器代理
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    proxy: proxyConfig
    // proxy: proxyConfig.proxy
  },
  // // 使用vux
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    });
  }
};
