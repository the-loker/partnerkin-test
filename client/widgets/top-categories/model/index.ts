import type { ICategory } from '@/entities/category';
import type { ExtractPropTypes } from 'vue';

export const topCategoriesProps = {
  categories: {
    type: Array as PropType<Array<ICategory>>,
    default: () => [],
  },
} as const;
export type TTopCategoriesProps = ExtractPropTypes<typeof topCategoriesProps>;
