import { useMainApi } from '@/shared/api';
import { searchParamsToObject } from '@/shared/lib';

import type { TMainApiResponse } from '@shared/api/types';
import type { IOrder } from '@entities/order';

export function getOrders(query?: URLSearchParams): Promise<Array<IOrder>> {
  return useMainApi<TMainApiResponse<IOrder>>('/list', {
    method: 'GET',
    query: query ? searchParamsToObject(query) : undefined,
  }).then((res) => res.response.data.list);
}
