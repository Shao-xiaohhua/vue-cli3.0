module.exports = {
  baseUrl: '',
  outputDir: 'dist',
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
    proxy: {
      '/url': {
        target: 'http://12348.justice.gov.cn/',
        // websocket
        ws: true,
        // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/url': ''
        }
      }
    }
  },
  // // 使用vux
  // configureWebpack: config => {
  //   require('vux-loader').merge(config, {
  //     options: {},
  //     plugins: ['vux-ui']
  //   })
  // }
}