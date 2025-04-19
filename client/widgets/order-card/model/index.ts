import type { IOrder } from '@/entities/order';
import type { ExtractPropTypes, PropType } from 'vue';

export const orderCardProps = {
  order: {
    type: Object as PropType<IOrder>,
    required: true,
  },
} as const;
export type TOrderCardProps = ExtractPropTypes<typeof orderCardProps>;
