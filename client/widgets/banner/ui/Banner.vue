<script lang="ts" setup>
  import { bannerProps } from '../model';

  const props = defineProps(bannerProps);
</script>

<template>
  <div class="banner" :style="{ width: props.width, height: props.height }">
    <slot>
      <div class="banner__default">Ad block</div>
    </slot>
  </div>
</template>

<style lang="scss">
  @import './style.scss';
</style>
