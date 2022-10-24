import { useMutation, useQueryClient } from 'react-query'
import { uploadApi } from '../api/uploadApi'

export function useUpload() {
  const queryKey = ['/upload']
  const queryClient = useQueryClient()

  const addMutation = useMutation(uploadApi.add, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    addMutation,
  }
}
