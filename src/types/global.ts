export interface UseGetDataResult<T> {
  data?: T;
  isLoading: boolean;
  error?: Error | null;
}
