import axiosClient from './axiosClient'

export const authApi = {
  login(data) {
    return axiosClient.post('/user/login', data)
  },

  signUp(data) {
    return axiosClient.post(`/user/signup`, data)
  },
}
