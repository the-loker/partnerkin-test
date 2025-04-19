import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack';

export const useMainApi = <
  T,
  R extends NitroFetchRequest = NitroFetchRequest,
  O extends NitroFetchOptions<R> = NitroFetchOptions<R>
>(
  url: R,
  options?: O
) => {
  return $fetch<T>(url, {
    baseURL: '/api',
    ...options,
  });
};
