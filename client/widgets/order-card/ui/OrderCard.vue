<script lang="ts" setup>
  import { orderCardProps } from '../model';

  const props = defineProps(orderCardProps);
  const { order } = toRefs(props);
</script>

<template>
  <article class="order-card">
    <div>{{ order.name }}</div>
  </article>
</template>

<style lang="scss">
  @use './style.scss';

</style>
