import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './route'

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
  routes,
  // 对于页面跳转，全部都返回到页面顶部
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})