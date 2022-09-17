import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

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