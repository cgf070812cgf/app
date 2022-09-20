import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
// 三级联动组件
import TypeNav from './components/TypeNav'
// 轮播图组件
import Carousel from './components/Carousel'
// 分页器组件
import Pagination from './components/Pagination'
// 注册为全局组件
// 第一个参数为组件的注册名，第二个参数为组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
// 引入mock虚拟的数据
import './mock/mockServer'
// 引入swiper.css样式
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
