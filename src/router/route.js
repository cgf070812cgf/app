import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCar from '@/pages/ShopCar'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GropuOrder from '@/pages/Center/GropuOrder'

import store from '@/store'

export default [
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
  {
    path: '/detail/:skuId',
    component: Detail,
    meta: { show: true }
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true }
  },
  {
    path: '/shopcar',
    component: ShopCar,
    meta: { show: true }
  },
  {
    path: '/trade',
    component: Trade,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path === '/shopcar') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path === '/trade' && store.state.trade.orderId) {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path === '/pay') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/center',
    component: Center,
    meta: { show: true },
    // 二级路由组件
    children: [
      {
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'grouporder',
        component: GropuOrder,
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  },
  // 重定向，初始访问指定到home页面
  {
    path: '*',
    redirect: '/home'
  }
]