<script lang="ts" setup>
  import { Sidebar } from '@/widgets/sidebar';
  import { TopCategories } from '@/widgets/top-categories';
</script>

<template>
  <div class="wrapper">
    <Sidebar>
      <TopCategories />
    </Sidebar>

    <main>
      <slot />
    </main>
  </div>
</template>
