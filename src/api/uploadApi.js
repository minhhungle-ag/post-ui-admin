import axiosClient from './axiosClient'

export const uploadApi = {
  add(formData) {
    return axiosClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
