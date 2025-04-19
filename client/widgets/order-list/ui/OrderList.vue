<script lang="ts" setup>
  import { orderListProps } from '@widgets/order-list';

  const props = defineProps(orderListProps);
</script>

<template>
  <section class="order-list">
    <template v-for="order in props.orders">
      <slot v-bind="order" />
    </template>
  </section>
</template>

<style lang="scss">
  @use './style.scss';
</style>
