export type ApiResult<T> = {
  data?: T;
  isLoading: boolean;
  error: Error | null;
};
