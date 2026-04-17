<template>
  <div
    class="reference-profile-card-stack"
    :class="`reference-profile-card-stack--${variant}`"
    :data-design-element="designElement"
  >
    <div
      class="reference-profile-card-stack__screen reference-profile-card-stack__screen--left"
      :data-design-element="`${prefix}-left`"
    >
      <IdentitySideCard :screen="screens.left" modifier="left" />
    </div>

    <div
      class="reference-profile-card-stack__screen reference-profile-card-stack__screen--main"
      :data-design-element="`${prefix}-main`"
    >
      <IdentityMainCard :profile="screens.main" />
    </div>

    <div
      class="reference-profile-card-stack__screen reference-profile-card-stack__screen--right"
      :data-design-element="`${prefix}-right`"
    >
      <IdentitySideCard :screen="screens.right" modifier="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IdentityMainScreenContent, IdentitySideScreenContent } from '@/pages/landing/model/landing.types';
import IdentityMainCard from './IdentityMainCard.vue';
import IdentitySideCard from './IdentitySideCard.vue';

withDefaults(
  defineProps<{
    variant: 'desktop' | 'mobile';
    screens: {
      left: IdentitySideScreenContent;
      main: IdentityMainScreenContent;
      right: IdentitySideScreenContent;
    };
    designElement?: string;
    prefix?: string;
  }>(),
  {
    designElement: 'reference-profile-card-stack',
    prefix: 'reference-profile-card'
  }
);
</script>

<style scoped>
.reference-profile-card-stack {
  position: relative;
  width: 100%;
  height: 100%;
}

.reference-profile-card-stack__screen {
  position: absolute;
}

.reference-profile-card-stack__screen :deep(.identity-card) {
  position: static;
  left: auto;
  right: auto;
  bottom: auto;
  width: 100%;
  transform: none;
}

.reference-profile-card-stack__screen--left,
.reference-profile-card-stack__screen--right {
  width: 242px;
}

.reference-profile-card-stack__screen--main {
  width: 317px;
  z-index: 3;
}

.reference-profile-card-stack--desktop .reference-profile-card-stack__screen--left {
  top: 93px;
  left: -6px;
  z-index: 1;
  transform: scale(0.946) rotate(-7.8deg);
  transform-origin: top left;
}

.reference-profile-card-stack--desktop .reference-profile-card-stack__screen--main {
  top: 0;
  left: 137px;
  transform: scale(1.123);
  transform-origin: top left;
}

.reference-profile-card-stack--desktop .reference-profile-card-stack__screen--right {
  top: 91px;
  right: -8px;
  z-index: 2;
  transform: scale(0.942) rotate(7.8deg);
  transform-origin: top right;
}

.reference-profile-card-stack--mobile .reference-profile-card-stack__screen--left {
  top: 72px;
  left: 8px;
  z-index: 1;
  transform: scale(0.47) rotate(-7.8deg);
  transform-origin: top left;
}

.reference-profile-card-stack--mobile .reference-profile-card-stack__screen--main {
  top: 0;
  left: 82px;
  transform: scale(0.55);
  transform-origin: top left;
}

.reference-profile-card-stack--mobile .reference-profile-card-stack__screen--right {
  top: 70px;
  right: 6px;
  z-index: 2;
  transform: scale(0.47) rotate(7.8deg);
  transform-origin: top right;
}
</style>
