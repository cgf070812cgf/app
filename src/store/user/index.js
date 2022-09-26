import { reqGetPhoneCode, reqCommitRegister, reqLogin, reqGetUserInfo, reqUserLogout } from '@/api'
import { setUserToken, getUserToken, clearUserToken } from '@/utils/userToken'
const state = {
  code: '',
  userToken: getUserToken(),
  userInfo: {}
}
const actions = {
  // 获取验证码
  async getPhoneCode ({ commit }, phone) {
    let result = await reqGetPhoneCode(phone)
    if (result.code === 200) {
      commit('SETPHONECODE', result.data)
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  // 提交注册信息
  async commitRegister (_, { phone, password, code }) {
    let result = await reqCommitRegister({ phone, password, code })
    if (result.code === 200) {
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  // 登陆
  async login ({ commit }, { phone, password }) {
    let result = await reqLogin({ phone, password })
    if (result.code === 200) {
      commit('SETUSERTOKEN', result.data.token)
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  // 获取用户信息
  async getUserInfo ({ commit }) {
    let result = await reqGetUserInfo()
    if (result.code === 200) {
      commit('SETUSERINFO', result.data)
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  async userLogout ({ commit }) {
    let result = await reqUserLogout()
    if (result.code === 200) {
      commit('CLEARUSERTOKEN')
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
  }
}
const mutations = {
  SETPHONECODE (state, value) {
    state.code = value
  },
  SETUSERTOKEN (state, value) {
    state.userToken = value
    setUserToken(value)
  },

  SETUSERINFO (state, value) {
    state.userInfo = value
  },
  CLEARUSERTOKEN (state) {
    state.userToken = ''
    state.userInfo = {}
    clearUserToken()
  },
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
}