import { useMutation, useQueryClient } from 'react-query'
import { authApi } from '../api/auth'

export function useAuth() {
  const queryKey = ['/user']
  const queryClient = useQueryClient()

  const loginMutation = useMutation(authApi.login, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })
  const signUpMutation = useMutation(authApi.signUp, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    loginMutation,
    signUpMutation,
  }
}
