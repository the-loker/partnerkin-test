import { getCategories } from '../api';
import type { ICategory } from './types';

export * from './types';

export const useCategoryStore = defineStore('categoryStore', () => {
  const categories = ref<Array<ICategory>>([]);

  function loadCategories() {
    return getCategories();
  }

  function setCategories(data: Array<ICategory>) {
    categories.value = data;
  }

  return {
    categories,
    loadCategories,
    setCategories,
  };
});
