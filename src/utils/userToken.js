// 设置用户的token
export const setUserToken = (token) => {
  localStorage.setItem('USERTOKEN', token)
}
// 获取用户的token
export const getUserToken = () => localStorage.getItem('USERTOKEN')
// 清除用户的token
export const clearUserToken = () => localStorage.removeItem('USERTOKEN')