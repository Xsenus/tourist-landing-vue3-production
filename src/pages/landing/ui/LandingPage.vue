<template>
  <DesktopReferenceViewport v-if="screenMode === 'desktop'" />

  <MobileReferencePage v-else-if="screenMode === 'mobile'" />

  <TabletReferencePage v-else />
</template>

<script setup lang="ts">
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue';

type ScreenMode = 'desktop' | 'tablet' | 'mobile';

const DesktopReferenceViewport = defineAsyncComponent(
  () => import('@/widgets/desktop-reference/ui/DesktopReferenceViewport.vue')
);
const TabletReferencePage = defineAsyncComponent(
  () => import('@/widgets/tablet-reference/ui/TabletReferencePage.vue')
);
const MobileReferencePage = defineAsyncComponent(
  () => import('@/widgets/mobile-reference/ui/MobileReferencePage.vue')
);

const resolveScreenMode = (): ScreenMode => {
  if (typeof window === 'undefined') {
    return 'tablet';
  }

  if (window.innerWidth >= 1280) {
    return 'desktop';
  }

  if (window.innerWidth <= 767) {
    return 'mobile';
  }

  return 'tablet';
};

const screenMode = ref<ScreenMode>(resolveScreenMode());

const syncScreenMode = (): void => {
  screenMode.value = resolveScreenMode();
};

onMounted(() => {
  if (typeof window === 'undefined') {
    return;
  }

  syncScreenMode();
  window.addEventListener('resize', syncScreenMode);
});

onBeforeUnmount(() => {
  if (typeof window === 'undefined') {
    return;
  }

  window.removeEventListener('resize', syncScreenMode);
});
</script>
