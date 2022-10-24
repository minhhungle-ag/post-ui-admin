import axiosClient from './axiosClient'

export const userApi = {
  getAll(params) {
    return axiosClient.get('/user', { params })
  },

  get(userId) {
    return axiosClient.get(`/user/${userId}`)
  },

  add(data) {
    return axiosClient.post('/user', data)
  },

  update(data) {
    return axiosClient.patch(`/user/${data?.id}`, data)
  },

  remove(id) {
    return axiosClient.delete(`/user/${id}`)
  },
}
