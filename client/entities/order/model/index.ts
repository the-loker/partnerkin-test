export * from './types';

import { getOrders } from '../api';
import type { IOrder } from './types';

export const useOrderStore = defineStore('orderStore', () => {
  const orders = ref<Array<IOrder>>([]);

  function loadOrders(query?: URLSearchParams): Promise<Array<IOrder>> {
    return getOrders(query);
  }

  function setOrders(data: Array<IOrder>) {
    orders.value = data;
  }

  function appendOrders(data: Array<IOrder>) {
    orders.value.push(...data);
  }

  return {
    orders,
    loadOrders,
    setOrders,
    appendOrders,
  };
});
