<script lang="ts" setup>
  import { Sidebar } from '@/widgets/sidebar';
  import { TopCategories } from '@/widgets/top-categories';
</script>

<template>
  <div class="wrapper layout-default">
    <Sidebar class="layout-default__sidebar">
      <TopCategories />
    </Sidebar>

    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
  .layout-default {
    $layout-padding: 20px;
    $sidebar-width: 235px;

    display: grid;

    width: 100%;
    max-width: 1024px;
    min-height: 100dvh;
    padding: $layout-padding;

    background-color: #f3f5f8;

    gap: 24px;
    grid-template-columns: $sidebar-width 1fr;

    @media (max-width: 1023px) {
      $sidebar-width: 216px;

      max-width: 768px;

      grid-template-columns: $sidebar-width 1fr;
    }

    @media (max-width: 767px) {
      max-width: 360px;
    }

    &__sidebar {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
</style>
