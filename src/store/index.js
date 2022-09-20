import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import home from './home'
import search from './search'

Vue.use(Vuex)


export default new Vuex.Store({
  // 实现Vue模块化开发
  modules: {
    home,
    search
  }
})