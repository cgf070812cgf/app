const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 自动打开
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    hot: false,
    proxy: null
  },

  // 关闭eslint语法检测
  lintOnSave: false,

})
