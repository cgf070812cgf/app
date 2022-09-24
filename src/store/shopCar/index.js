import { reqGetShopCarList, reqDeleteShopCarSku, reqUpdateChecked } from '../../api'
const state = {
  shopCarListArray: []
}
const actions = {
  async getShopCarList ({ commit }) {
    let result = await reqGetShopCarList()
    if (result.code === 200) {
      commit('SETSHOPCARLIST', result.data)
    }
  },
  async deleteShopCarSku (_, skuId) {
    let result = await reqDeleteShopCarSku(skuId)
    if (result.code === 200) {
      return 'success'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async updateChecked (_, { skuId, isChecked }) {
    let result = await reqUpdateChecked(skuId, isChecked)
    if (result.code === 200) {
      return 'success'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  updateAllChecked ({ dispatch, state }, isChecked) {
    let promiseAll = []
    state.shopCarListArray[0].cartInfoList.forEach(item => {
      promiseAll.push(dispatch('updateChecked', { skuId: item.skuId, isChecked }))
    })
    return Promise.all(promiseAll)
  },
  deleteAllChecked ({ dispatch, getters }) {
    let promiseAll = []
    getters.shopCarList.cartInfoList.forEach(item => {
      promiseAll.push(item.isChecked === 1 ? dispatch('deleteShopCarSku', item.skuId) : '')
    })
    return Promise.all(promiseAll)
  }
}
const mutations = {
  SETSHOPCARLIST (state, value) {
    state.shopCarListArray = value
  }
}
const getters = {
  shopCarList: state => state.shopCarListArray[0] || {},
}
export default {
  state,
  actions,
  mutations,
  getters
}