import { useQuery } from 'react-query'
import { postApi } from '../api/post'

export function usePost(postId) {
  const queryKey = ['/posts', postId]
  const { data, isLoading, error } = useQuery(queryKey, () => postApi.get(postId))

  return {
    post: data?.data,
    isLoading,
    error,
  }
}
