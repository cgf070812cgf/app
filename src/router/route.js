// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，
// 然后当路由被访问的时候才加载对应组件，这样就会更加高效。

// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Search from '@/pages/Search'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCar from '@/pages/ShopCar'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// import MyOrder from '@/pages/Center/MyOrder'
// import GropuOrder from '@/pages/Center/GropuOrder'

import store from '@/store'

export default [
  {
    path: '/home',
    component: () => import('@/pages/Home'),
    meta: { show: true }
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: { show: false }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: { show: false }
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: () => import('@/pages/Search'),
    meta: { show: true }
  },
  {
    path: '/detail/:skuId',
    component: () => import('@/pages/Detail'),
    meta: { show: true }
  },
  {
    path: '/addcartsuccess',
    component: () => import('@/pages/AddCartSuccess'),
    meta: { show: true }
  },
  {
    path: '/shopcar',
    component: () => import('@/pages/ShopCar'),
    meta: { show: true }
  },
  {
    path: '/trade',
    component: () => import('@/pages/Trade'),
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
    component: () => import('@/pages/Pay'),
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
    component: () => import('@/pages/PaySuccess'),
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
    component: () => import('@/pages/Center'),
    meta: { show: true },
    // 二级路由组件
    children: [
      {
        path: 'myorder',
        component: () => import('@/pages/Center/MyOrder'),
      },
      {
        path: 'grouporder',
        component: () => import('@/pages/Center/GropuOrder'),
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