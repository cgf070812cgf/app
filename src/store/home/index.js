import { reqGetCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'

// state:仓库存储数据的地方
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
}
// actions:处理action，可以写自己的业务逻辑，也可以处理异步任务
const actions = {
  // 发送获取categoryList的请求
  async getCategoryList ({ commit }) {
    let result = await reqGetCategoryList()
    if (result.code === 200) {
      commit('SETCATEGORYLIST', result.data)
    }
  },

  // 发送获取bannerList的请求
  async getBannerList ({ commit }) {
    let result = await reqGetBannerList()
    if (result.code === 200) {
      commit('SETBANNERLIST', result.data)
    }
  },

  // 发送获取floorList的请求
  async getFloorList ({ commit }) {
    let result = await reqGetFloorList()
    if (result.code === 200) {
      commit('SETFLOORLIST', result.data)
    }
  }

}
// mutations:修改state的唯一手段
const mutations = {
  SETCATEGORYLIST (state, value) {
    state.categoryList = value
  },
  SETBANNERLIST (state, value) {
    state.bannerList = value
  },
  SETFLOORLIST (state, value) {
    state.floorList = value
  }
}
// getters:可理解为计算属性，用于简化仓库，让组件获取数据更加方便
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}