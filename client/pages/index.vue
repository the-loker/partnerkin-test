<script lang="ts" setup>
  import { OrderList } from '@/widgets/order-list';
  import { OrderCard } from '@/widgets/order-card';
  import { useOrderStore } from '@/entities/order';
  import { useApiErrorHandler } from '@/shared/api';
  import { usePaginateScroll } from '@/shared/composables';

  definePageMeta({
    name: 'home-page',
    layout: 'default',
  });

  const { loadOrders, setOrders, appendOrders } = useOrderStore();
  const { orders } = storeToRefs(useOrderStore());

  const container = shallowRef<HTMLElement | undefined>();
  const page = ref<number>(1);
  const loading = ref<boolean>(false);
  const query = new URLSearchParams({ page: String(page.value) });

  const { data, error } = await useAsyncData('orders', () => loadOrders(query));
  const { destroy } = usePaginateScroll(container, loadOrdersCallback);

  if (data.value) {
    setOrders(data.value);
  }

  if (error.value) {
    useApiErrorHandler(error.value);
  }

  async function loadOrdersCallback() {
    try {
      loading.value = true;

      query.set('page', String(page.value + 1));

      const res = await loadOrders(query);

      if (!res.length) {
        destroy();

        return;
      }

      page.value = page.value + 1;

      appendOrders(res);
    } catch (e: unknown) {
      useApiErrorHandler(e);
    } finally {
      loading.value = false;
    }
  }
</script>

<template>
  <OrderList :orders="orders">
    <template v-slot="order">
      <OrderCard :order="order" />
    </template>

    <template #pagination>
      <div ref="container">
        <span v-if="loading">Загрузка...</span>
      </div>
    </template>
  </OrderList>
</template>
