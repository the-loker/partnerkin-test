<script lang="ts" setup>
  import { orderCardProps } from '../model';

  const props = defineProps(orderCardProps);
  const { order } = toRefs(props);

  const dateFormat = computed(() =>
    new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' }).format(
      order.value.publish_date
    )
  );
</script>

<template>
  <article class="order-card">
    <div class="order-card__header">
      <h3 class="order-card__header-title">{{ order.name }}</h3>

      <div class="order-card__header-price">{{ order.price }} руб.</div>
    </div>

    <div class="order-card__info">
      <div class="order-card__info-user">{{ order.user_login }}</div>

      <div class="order-card__info-date">{{ dateFormat }}</div>
    </div>

    <div class="order-card__description">{{ order.text }}</div>
  </article>
</template>

<style lang="scss">
  @import './style.scss';
</style>
