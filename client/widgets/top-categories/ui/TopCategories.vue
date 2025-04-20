<script lang="ts" setup>
  import { useCategoryStore } from '@/entities/category';
  import { useApiErrorHandler } from '@/shared/api';
  import { IconCrownBold } from '@/shared/ui/icons';

  const { loadCategories, setCategories } = useCategoryStore();
  const { categories } = storeToRefs(useCategoryStore());

  const { data, error } = await useAsyncData('categories', () =>
    loadCategories()
  );

  if (data.value) {
    setCategories(data.value);
  }

  if (error.value) {
    useApiErrorHandler(error.value);
  }
</script>

<template>
  <div class="top-categories">
    <div class="top-categories__header">
      <span class="top-categories__header-icon"><IconCrownBold /></span>

      <span class="top-categories__header-title">ТОП категории</span>
    </div>

    <ul class="top-categories__list">
      <li
        class="top-categories__list-item"
        v-for="category in categories"
        :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  @import './style.scss';
</style>
