import { reqGetSearchInfo } from '@/api'

// state:仓库存储数据的地方
const state = {
  searchList: {}
}
// actions:处理action，可以写自己的业务逻辑，也可以处理异步任务
const actions = {
  async getSearchList ({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params)
    if (result.code === 200) {
      commit('SETSEARCHLIST', result.data)
    }
  }
}
// mutations:修改state的唯一手段
const mutations = {
  SETSEARCHLIST (state, value) {
    state.searchList = value
  }
}
// getters:可理解为计算属性，用于简化仓库，让组件获取数据更加方便
const getters = {
  attrsList: (state) => state.searchList.attrsList || [],
  goodsList: (state) => state.searchList.goodsList || [],
  trademarkList: (state) => state.searchList.trademarkList || [],
  total: (state) => state.searchList.total || '',
}

export default {
  state,
  mutations,
  actions,
  getters
}