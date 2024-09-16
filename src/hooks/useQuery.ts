import {useQuery as useReactQuery, UseQueryOptions} from "@tanstack/react-query";

type IOptions<T> = UseQueryOptions<IResponse<T>, IError>;

export default function useQuery<T>({queryFn, queryKey, ...options}: IOptions<T>) {
  return useReactQuery<IResponse<T>, IError>({
    queryKey: queryKey,
    queryFn,
    ...options,
  });
}
