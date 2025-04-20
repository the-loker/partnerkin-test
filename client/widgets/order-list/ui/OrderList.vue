<script lang="ts" setup>
  import { orderListProps } from '@widgets/order-list';

  const props = defineProps(orderListProps);
</script>

<template>
  <section class="order-list">
    <template v-for="order in props.orders">
      <slot v-bind="order" />
    </template>

    <slot name="pagination" />
  </section>
</template>

<style lang="scss">
  @import './style.scss';
</style>
