import { reqGetAddressList, reqGetTradeList } from '@/api'
const state = {
  addressList: [],
  tradeList: {}
}
const actions = {
  async getAddressList ({ commit }) {
    let result = await reqGetAddressList()
    if (result.code === 200) {
      commit('SETADDRESSLIST', result.data)
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  async getTradeList ({ commit }) {
    let result = await reqGetTradeList()
    if (result.code === 200) {
      commit('SETTRADELIST', result.data)
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
}
const mutations = {
  SETADDRESSLIST (state, value) {
    state.addressList = value
  },
  SETTRADELIST (state, value) {
    state.tradeList = value
  }
}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters
}