import Mock from 'mockjs'
// 引入json数据
// webpack默认暴露图片和json文件
import banner from './banner.json'
import floor from './floor.json'

// mock数据：第一个参数是请求地址 第二个参数是请求数据
// 模拟轮播图的数据
Mock.mock("/mock/banner", { code: 200, data: banner })
// 模拟floor数据
Mock.mock("/mock/floor", { code: 200, data: floor })