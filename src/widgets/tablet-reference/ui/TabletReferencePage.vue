<template>
  <main class="tablet-reference-page" data-layout-mode="tablet" data-design-element="tablet-page">
    <div class="tablet-reference-page__viewport" :style="viewportStyle">
      <div class="tablet-reference-page__canvas" :style="canvasStyle">
        <DesktopReferencePage />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

import { tabletReferenceLayout } from '@/pages/landing/model/reference-content';
import DesktopReferencePage from '@/widgets/desktop-reference/ui/DesktopReferencePage.vue';

const DESKTOP_CANVAS_WIDTH = 1920;
const DESKTOP_CANVAS_HEIGHT = 4012;

const viewportWidth = ref(
  typeof window === 'undefined' ? tabletReferenceLayout.maxWidth : window.innerWidth
);

const syncViewportWidth = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  viewportWidth.value = window.innerWidth;
};

onMounted(() => {
  syncViewportWidth();
  window.addEventListener('resize', syncViewportWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncViewportWidth);
});

const scale = computed(() => {
  const availableWidth = Math.min(viewportWidth.value, tabletReferenceLayout.maxWidth) - tabletReferenceLayout.minPadding * 2;
  return Math.max(0.4, Math.min(availableWidth / DESKTOP_CANVAS_WIDTH, 0.665));
});

const viewportStyle = computed(() => ({
  height: `${Math.round(DESKTOP_CANVAS_HEIGHT * scale.value)}px`
}));

const canvasStyle = computed(() => ({
  width: `${DESKTOP_CANVAS_WIDTH}px`,
  transform: `scale(${scale.value})`
}));
</script>

<style scoped>
.tablet-reference-page {
  min-height: 100vh;
  padding: 20px 0 32px;
  background: #fcfcfc;
}

.tablet-reference-page__viewport {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.tablet-reference-page__canvas {
  flex: none;
  transform-origin: top center;
}
</style>
