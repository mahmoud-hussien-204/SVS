import {
  useMutation as useMutationReactQuery,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";

type IOptions<TD, TV> = UseMutationOptions<IResponse<TD>, IError, TV>;

export default function useMutation<TD, TV>({
  mutationFn,
  mutationKey,
  ...options
}: IOptions<TD, TV>) {
  // Access the client
  const queryClient = useQueryClient();

  // mutation function
  const mutation = useMutationReactQuery<IResponse<TD>, IError, TV>({
    mutationKey,
    mutationFn,
    ...options,
  });

  return {...mutation, queryClient};
}
