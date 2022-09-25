import { reqGetGoodsList, reqAddOrUpdateShopCar } from '@/api'
import { getUUID } from '@/utils/uuidToken'
const state = {
  goodsList: {},
  uuid_token: getUUID()
}
const actions = {
  async getGoodsList ({ commit }, skuId) {
    let result = await reqGetGoodsList(skuId)
    if (result.code === 200) {
      commit('SETGOODSLIST', result.data)
    }
  },
  async addOrUpdateShopCar (_, { skuId, skuNum }) {
    let result = await reqAddOrUpdateShopCar(skuId, skuNum)
    if (result.code === 200) {
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
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
