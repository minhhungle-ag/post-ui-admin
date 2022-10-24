import { useQuery } from 'react-query'
import { userApi } from '../api/userApi'

export function useUser(userId) {
  const queryKey = ['/user', userId]
  const { data, isLoading, error } = useQuery(queryKey, () => userApi.get(userId))

  return {
    user: data?.data,
    isLoading,
    error,
  }
}
