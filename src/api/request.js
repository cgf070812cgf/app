// 对axios二次封装
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 引入仓库
import store from '@/store'

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 添加请求拦截器
requests.interceptors.request.use(config => {
  // 在发送请求之前进行处理

  nprogress.start() // 开启进度条
  // 判断仓库中是否有游客的个人信息
  if (store.state.detail.uuid_token) {
    // 给请求添加请求头字段（userTempId）
    config.headers.userTempId = store.state.detail.uuid_token
  }
  return config

}, error => {
  // 对请求错误进行处理
  return Promise.reject(error)
})

// 添加响应拦截器
requests.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做处理

  nprogress.done() // 响应成功，关闭进度条

  return response.data
}, error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做处理
  console.log("响应失败" + error)
  return Promise.reject(error)
})

// 对外暴露axios
export default requests