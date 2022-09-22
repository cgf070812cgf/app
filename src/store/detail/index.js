import { reqGetGoodsList } from '../../api'
const state = {
  goodsList: {}
}
const actions = {
  async getGoodsList ({ commit }, skuId) {
    let result = await reqGetGoodsList(skuId)
    if (result.code === 200) {
      commit('SETGOODSLIST', result.data)
    }
  }
}
const mutations = {
  SETGOODSLIST (state, value) {
    state.goodsList = value
  }
}
const getters = {
  // 当前计算的值至少为空对象，会没有警告
  categoryView: state => state.goodsList.categoryView || {},
  skuInfo: state => state.goodsList.skuInfo || {},
  spuSaleAttrList: state => state.goodsList.spuSaleAttrList || [],
}

export default {
  state,
  actions,
  mutations,
  getters
}
