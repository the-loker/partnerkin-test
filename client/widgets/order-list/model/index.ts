import type { IOrder } from '@/entities/order';
import type { ExtractPropTypes, PropType } from 'vue';

export const orderListProps = {
  orders: {
    type: Array as PropType<Array<IOrder>>,
    default: () => [],
  },
} as const;
export type TOrderListProps = ExtractPropTypes<typeof orderListProps>;
