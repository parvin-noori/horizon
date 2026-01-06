export type UseGetDataResult<TData> = {
  data?: TData;
  isLoading: boolean;
  error?: Error | null;
};
