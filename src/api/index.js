// 所以的api接口统一管理
import requests from "./request"
import mockRequests from "./mockRequest"

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
export const reqGetCategoryList = () => requests.get('/product/getBaseCategoryList')

// 获取home轮播图的接口
export const reqGetBannerList = () => mockRequests.get('/banner')
// 获取home轮播图的接口
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据的接口
// /api/list post 有参数：
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'POST', data: params })

// 获取产品详情信息的接口
// /api/item/{ skuId } get 有参数
export const reqGetGoodsList = (skuId) => requests.get(`/item/${skuId}`)

// 将产品添加到购物车中（更新产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum } post 有参数
export const reqAddOrUpdateShopCar = (skuId, skuNum) => requests.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 获取用户购物车的信息
// /api/cart/cartList get 无参数
export const reqGetShopCarList = () => requests.get(`/cart/cartList`)

// 删除购物车中的物品
// /api/cart/deleteCart/{skuId} delete 有参数
export const reqDeleteShopCarSku = (skuId) => requests.delete(`/cart/deleteCart/${skuId}`)

// 切换商品选择状态
// /api/cart/checkCart/{skuId}/{isChecked} get 有参数
export const reqUpdateChecked = (skuId, isChecked) => requests.get(`/cart/checkCart/${skuId}/${isChecked}`)