import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './route'
import store from '@/store'


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
let router = new VueRouter({
  routes,
  // 对于页面跳转，全部都返回到页面顶部
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.userToken
  let name = store.state.user.userInfo.nickName
  setTimeout(() => store.state.home.confirmToNext = false, 100)

  if (token) {
    // 用户已经登陆了
    if (to.path === '/login' || to.path === '/register') {
      // 想跳转到登陆或注册页面，将被拒绝，并且直接跳转到home页面
      next('/home')
    } else {
      // 跳转到非登陆或注册页面
      // 判断有无用户信息
      if (name) {
        // 有用户信息，正常跳转
        next()
      } else {
        // 没有用户信息
        // 获取用户信息进行跳转
        try {
          // 获取用户信息成功，正常跳转
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          // 获取用户信息失败，登陆信息失效
          // 跳转回登陆页，重新登陆
          store.commit('CLEARUSERTOKEN')
          alert('登陆信息失效，请重新登陆')
          next('/login')
        }
      }
    }
  } else {
    // 用户未登陆
    let toPath = to.path
    if (toPath.indexOf('/trade') !== -1 || toPath.indexOf('/pay') !== -1 || toPath.indexOf('/center') !== -1) next(`/login?redirect=${toPath}`)
    else if (toPath.indexOf('/add') !== -1) next('/login')
    else next()
  }
})

export default router