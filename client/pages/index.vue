<script lang="ts" setup>
  import { OrderList } from '@/widgets/order-list';
  import { OrderCard } from '@/widgets/order-card';
  import { getOrders } from '@/entities/order';
  import { useApiErrorHandler } from '@/shared/api';

  definePageMeta({
    name: 'home-page',
    layout: 'default',
  });

  const { data, error } = useAsyncData('orders', () => getOrders());

  if (error.value) {
    useApiErrorHandler(error.value);
  }
</script>

<template>
  <OrderList v-if="data" :orders="data" v-slot="order">
    <OrderCard :order="order" />
  </OrderList>
</template>
