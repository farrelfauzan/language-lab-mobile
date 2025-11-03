import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

type QueryKey = string | [string, ...unknown[]];

export const useApiQuery = <TData>(
  key: QueryKey,
  queryFn: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData>, "queryKey" | "queryFn">
) => {
  return useQuery<TData>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn,
    ...options,
  });
};

export const useApiMutation = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: Omit<UseMutationOptions<TData, unknown, TVariables>, "mutationFn">
) => {
  return useMutation<TData, unknown, TVariables>({
    mutationFn,
    ...options,
  });
};
