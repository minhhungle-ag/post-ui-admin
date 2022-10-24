import { useMutation, useQuery, useQueryClient } from "react-query";
import { userApi } from "../api/userApi";

export function useUsers(params) {
  const queryKey = ["/users", params];
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(queryKey, () =>
    userApi.getAll(params)
  );

  const addMutation = useMutation((data) => userApi.add(data), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
  const updateMutation = useMutation((data) => userApi.update(data), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });

  return {
    isLoading,
    error,
    userList: data?.data,
    pagination: data?.pagination,
    addMutation,
    updateMutation,
  };
}
