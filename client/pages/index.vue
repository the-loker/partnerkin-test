<script lang="ts" setup>
  import { OrderList } from '@/widgets/order-list';
  import { OrderCard } from '@/widgets/order-card';
  import { Banner } from '@/widgets/banner';
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
  <div class="home-page">
    <Banner
      class="home-page-banner"
      width="100%"
      height="94px"
      :closable="true">
      <div class="home-page-banner__header">
        <h3 class="home-page-banner__header-title">
          Хочешь разметить заказ или услугу?
        </h3>

        <p class="home-page-banner__header-subtitle">
          Кликай и разместись за 1 минуту
        </p>
      </div>

      <img
        class="home-page-banner__image-arrow"
        src="/images/banner-arrow.svg"
        alt=""
        loading="lazy" />

      <img
        class="home-page-banner__image-illustration"
        src="/images/banner-illustration.svg"
        alt=""
        loading="lazy" />
    </Banner>

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
  </div>
</template>

<style lang="scss">
  .home-page {
    display: flex;
    flex-direction: column;

    gap: 16px;
  }

  .home-page-banner {
    position: relative;

    padding: 16px;

    background-color: #fff6c7;

    @media (max-width: 1023px) {
      height: 114px !important;
    }

    @media (max-width: 767px) {
      display: none;
    }

    &__header {
      display: flex;
      flex-direction: column;

      gap: 6px;

      @media (max-width: 1023px) {
        width: 65%;
      }

      &-title {
        color: var(--color-primary-black);

        @include heading-medium-large;
      }

      &-subtitle {
        margin: 0;

        color: var(--color-primary-black);

        @include text-small;
      }
    }

    &__image-arrow,
    &__image-illustration {
      position: absolute;
    }

    &__image-arrow {
      top: 46px;
      right: 200px;

      @media (max-width: 1023px) {
        display: none;
      }
    }

    &__image-illustration {
      top: 0;
      right: 40px;

      @media (max-width: 1023px) {
        top: 26px;

        width: 138px;
        height: 82px;
      }
    }
  }
</style>
