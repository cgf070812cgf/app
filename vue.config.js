const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 自动打开
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    hot: false,
    proxy: {
      //会把请求路径中的/api换为后面的代理服务器
      '/api': {
        //提供数据的服务器地址
        target: 'http://gmall-h5-api.atguigu.cn',
      }
    }
  },

  // 关闭eslint语法检测
  lintOnSave: false,

})
