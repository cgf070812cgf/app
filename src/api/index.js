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