import axiosClient from './axiosClient'

export const postApi = {
  getAll(params) {
    return axiosClient.get('/posts', { params })
  },

  get(id) {
    return axiosClient.get(`/posts/${id}`)
  },

  add(data) {
    return axiosClient.post('/posts', data)
  },

  update(data) {
    return axiosClient.put(`/posts/${data?.id}`, data)
  },

  remove(id) {
    return axiosClient.delete(`/posts/${id}`)
  },
}
