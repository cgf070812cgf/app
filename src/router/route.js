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
    meta: { show: true }
  },
  {
    path: '/pay',
    component: Pay,
    meta: { show: true }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: { show: true }
  },
  {
    path: '/center',
    component: Center,
    meta: { show: true }
  },
  // 重定向，初始访问指定到home页面
  {
    path: '*',
    redirect: '/home'
  }
]