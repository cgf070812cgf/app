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