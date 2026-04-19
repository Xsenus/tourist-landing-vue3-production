<template>
  <div
    class="reference-profile-card-stack"
    :class="`reference-profile-card-stack--${props.variant}`"
    :data-design-element="props.designElement"
  >
    <div
      class="reference-profile-card-stack__screen reference-profile-card-stack__screen--left"
      :data-design-element="`${props.prefix}-left`"
      :style="screenStyle(props.layout[props.variant].left)"
    >
      <ReferenceIdentitySideCard :screen="props.screens.left" modifier="left" />
    </div>

    <div
      class="reference-profile-card-stack__screen reference-profile-card-stack__screen--main"
      :data-design-element="`${props.prefix}-main`"
      :style="screenStyle(props.layout[props.variant].main)"
    >
      <ReferenceIdentityMainCard :profile="props.screens.main" />
    </div>

    <div
      class="reference-profile-card-stack__screen reference-profile-card-stack__screen--right"
      :data-design-element="`${props.prefix}-right`"
      :style="screenStyle(props.layout[props.variant].right)"
    >
      <ReferenceIdentitySideCard :screen="props.screens.right" modifier="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { referenceIdentityStackConfig } from '@/pages/landing/model/reference-content';
import type { IdentityMainScreenContent, IdentitySideScreenContent } from '@/pages/landing/model/landing.types';
import type { ReferenceIdentityScreenLayout, ReferenceIdentityStackConfig } from '@/pages/landing/model/reference.types';
import ReferenceIdentityMainCard from './ReferenceIdentityMainCard.vue';
import ReferenceIdentitySideCard from './ReferenceIdentitySideCard.vue';

const props = withDefaults(
  defineProps<{
    variant: 'desktop' | 'tablet' | 'mobile';
    screens: {
      left: IdentitySideScreenContent;
      main: IdentityMainScreenContent;
      right: IdentitySideScreenContent;
    };
    layout?: ReferenceIdentityStackConfig;
    designElement?: string;
    prefix?: string;
  }>(),
  {
    layout: () => referenceIdentityStackConfig,
    designElement: 'reference-profile-card-stack',
    prefix: 'reference-profile-card'
  }
);

const screenStyle = (screen: ReferenceIdentityScreenLayout) => ({
  top: screen.top,
  left: screen.left,
  right: screen.right,
  width: screen.width,
  zIndex: screen.zIndex,
  transform: [screen.rotate ? `rotate(${screen.rotate})` : '', screen.scale ? `scale(${screen.scale})` : '']
    .filter(Boolean)
    .join(' ')
});
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

.reference-profile-card-stack__screen :deep(.reference-identity-card) {
  position: static;
  left: auto;
  right: auto;
  bottom: auto;
  width: 100%;
  transform: none;
}

.reference-profile-card-stack__screen--left {
  transform-origin: top left;
}

.reference-profile-card-stack__screen--main {
  transform-origin: top left;
}

.reference-profile-card-stack__screen--right {
  transform-origin: top right;
}
</style>
