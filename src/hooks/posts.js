import { useMutation, useQuery, useQueryClient } from 'react-query'
import { postApi } from '../api/post'

export function usePosts(params) {
  const queryKey = ['/posts', params]
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery(queryKey, () => postApi.getAll(params))

  const addMutation = useMutation((data) => postApi.add(data), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const updateMutation = useMutation((data) => postApi.update(data), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const removeMutation = useMutation((postId) => postApi.remove(postId), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    isLoading,
    error,
    postList: data?.data,
    pagination: data?.pagination,
    addMutation,
    updateMutation,
    removeMutation,
  }
}
