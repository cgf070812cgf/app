import { reqCategoryList } from '../../api'

// state:仓库存储数据的地方
const state = {
  categoryList: [],
}
// actions:处理action，可以写自己的业务逻辑，也可以处理异步任务
const actions = {
  async categoryList ({ commit }) {
    let categoryList = await reqCategoryList()
    if (categoryList.code === 200) {
      commit('CATEGORYLIST', categoryList.data)
    }
  }
}
// mutations:修改state的唯一手段
const mutations = {
  CATEGORYLIST (state, value) {
    state.categoryList = value
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