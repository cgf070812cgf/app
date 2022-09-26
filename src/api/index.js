// 所以的api接口统一管理
import requests from "./request"
import mockRequests from "./mockRequest"

// 三级联动接口
// /api/product/getBaseCategoryList 
// method:get 
export const reqGetCategoryList = () => requests.get('/product/getBaseCategoryList')

// 获取home轮播图的接口
export const reqGetBannerList = () => mockRequests.get('/banner')
// 获取home轮播图的接口
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据的接口
// /api/list
//  method:post 
// 有参数:params
export const reqGetSearchInfo = params => requests({ url: '/list', method: 'POST', data: params })

// 获取产品详情信息的接口
// /api/item/{ skuId } 
// method:get 
// 有参数:skuId
export const reqGetGoodsList = skuId => requests.get(`/item/${skuId}`)

// 将产品添加到购物车中（更新产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum } 
// method:post 
// 有参数:skuId skuNum
export const reqAddOrUpdateShopCar = (skuId, skuNum) => requests.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 获取用户购物车的信息
// /api/cart/cartList 
// method:get 
export const reqGetShopCarList = () => requests.get(`/cart/cartList`)

// 删除购物车中的物品
// /api/cart/deleteCart/{skuId} 
// method:delete 
// 有参数:skuId
export const reqDeleteShopCarSku = skuId => requests.delete(`/cart/deleteCart/${skuId}`)

// 切换商品选择状态
// /api/cart/checkCart/{skuId}/{isChecked} 
// method:get 
// 有参数:skuId isChecked
export const reqUpdateChecked = (skuId, isChecked) => requests.get(`/cart/checkCart/${skuId}/${isChecked}`)

// 获取验证码
// /api/user/passport/sendCode/{phone}
// method:get 
// 有参数:phone
export const reqGetPhoneCode = phone => requests.get(`/user/passport/sendCode/${phone}`)

// 提交注册信息
// /api/user/passport/register
// method:post
// 有参数:phone password code
export const reqCommitRegister = data => requests({ url: '/user/passport/register', method: 'POST', data })

// 登陆
// /api/user/passport/login
// method:post
// 有参数:phone password
export const reqLogin = data => requests({ url: '/user/passport/login', method: 'POST', data })

// 获取用户信息，要带token
// /api/user/passport/auth/getUserInfo
// method:get
export const reqGetUserInfo = () => requests.get('/user/passport/auth/getUserInfo')

// 退出登陆
// /api/user/passport/logout
// method:get
export const reqUserLogout = () => requests.get('/user/passport/logout')

// 获取用户地址信息
// /api/user/userAddress/auth/findUserAddressList
// method:get
export const reqGetAddressList = () => mockRequests.get('/address')
// export const reqGetAddressList = () => requests.get('/user/userAddress/auth/findUserAddressList')

// 获取订单交易信息
// /api/order/auth/trade
// method:get
export const reqGetTradeList = () => requests.get('/order/auth/trade')

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
// method:post
// 有参数:tradeNo consignee consigneeTel deliveryAddres paymentWay orderComment orderDetailList
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'POST' })

// 获取订单的支付信息
// /api/payment/weixin/createNative/{orderId}
// method:get
// 有参数:orderId
export const reqGetPayInfo = orderId => requests.get(`/payment/weixin/createNative/${orderId}`)

// 查询订单的支付状态
// /api/payment/weixin/queryPayStatus/{orderId}
// method:get
// 有参数:orderId
export const reqGetPayStatus = orderId => requests.get(`/payment/weixin/queryPayStatus/${orderId}`)