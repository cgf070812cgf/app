import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写push方法
// location跳转到位置
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

// 重写replace方法
// location跳转到位置
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}
// 配置路由
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true }
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false }
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false }
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: Search,
      meta: { show: true }
    },
    // 重定向，初始访问指定到home页面
    {
      path: '*',
      redirect: '/home'
    }
  ]
})