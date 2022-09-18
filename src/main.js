import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
// 三级联动组件
import TypeNav from './components/TypeNav'

// 注册为全局组件
// 第一个参数为组件的注册名，第二个参数为组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
