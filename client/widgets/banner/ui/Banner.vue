<script lang="ts" setup>
  import { IconCloseRound } from '@/shared/ui/icons';
  import { bannerProps } from '../model';

  const props = defineProps(bannerProps);
</script>

<template>
  <div class="banner" :style="{ width: props.width, height: props.height }">
    <button v-if="props.closable" class="banner-close">
      <IconCloseRound />
    </button>

    <slot>
      <div class="banner__default">Ad block</div>
    </slot>
  </div>
</template>

<style lang="scss">
  @import './style.scss';
</style>
