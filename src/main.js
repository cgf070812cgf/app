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
// 引入element ui组件
import { Button, MessageBox } from 'element-ui'
// 注册为全局组件
// 第一个参数为组件的注册名，第二个参数为组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
// 注册element ui组件
Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
// 引入mock虚拟的数据
import './mock/mockServer'
// 引入swiper.css样式
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

// 引入表单验证信息
import '@/utils/validate'

// 统一接受api文件里所有的请求函数
import * as API from '@/api'

// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
// 引入加载图片
import loadimage from '@/assets/loadimage.gif'
//注册插件
Vue.use(VueLazyload, {
  //懒加载默认的图片
  loading: loadimage
})

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate () {
    Vue.prototype.$bus = this
    Vue.prototype.$api = API
  }
}).$mount('#app')
