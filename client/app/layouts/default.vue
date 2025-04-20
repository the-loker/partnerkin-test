<script lang="ts" setup>
  import { Sidebar } from '@/widgets/sidebar';
  import { TopCategories } from '@/widgets/top-categories';
  import { Banner } from '@/widgets/banner';
</script>

<template>
  <div class="wrapper layout-default">
    <Banner width="100%" height="70px" />

    <div class="layout-default__inner">
      <Sidebar class="layout-default__sidebar">
        <TopCategories />

        <Banner width="100%" height="312px" />
      </Sidebar>

      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
  .layout-default {
    $sidebar-width: 235px;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1024px;
    min-height: 100dvh;
    padding: 20px;

    background-color: var(--bg-light);

    gap: 20px;

    @media (max-width: 1023px) {
      max-width: 768px;
    }

    @media (max-width: 767px) {
      max-width: 360px;
    }

    &__inner {
      display: grid;

      gap: 24px;
      grid-template-columns: $sidebar-width 1fr;

      @media (max-width: 1023px) {
        $sidebar-width: 216px;

        grid-template-columns: $sidebar-width 1fr;
      }

      @media (max-width: 767px) {
        grid-template-columns: 100%;
      }
    }

    &__sidebar {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
</style>
