import { useMainApi } from '@/shared/api';

import type { TMainApiResponse } from '@shared/api/types';
import type { IOrder } from '@entities/order';

export function getOrders(): Promise<Array<IOrder>> {
  return useMainApi<TMainApiResponse<IOrder>>('/list', {
    method: 'GET',
  }).then((res) => res.response.data.list);
}
