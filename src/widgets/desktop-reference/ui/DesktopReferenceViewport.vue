<template>
  <div class="desktop-reference-viewport" data-design-element="desktop-page-fit">
    <div class="desktop-reference-viewport__stage" :style="stageStyle">
      <div
        class="desktop-reference-viewport__canvas"
        data-design-element="desktop-page-fit-canvas"
        :style="canvasStyle"
      >
        <DesktopReferencePage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

import DesktopReferencePage from './DesktopReferencePage.vue';

const DESKTOP_CANVAS_WIDTH = 1920;
const DESKTOP_CANVAS_HEIGHT = 4012;
const VIEWPORT_SIDE_PADDING = 20;

const viewportWidth = ref(typeof window === 'undefined' ? DESKTOP_CANVAS_WIDTH : window.innerWidth);

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
  if (viewportWidth.value >= DESKTOP_CANVAS_WIDTH) {
    return 1;
  }

  const availableWidth = Math.max(320, viewportWidth.value - VIEWPORT_SIDE_PADDING * 2);
  return Math.max(0.65, availableWidth / DESKTOP_CANVAS_WIDTH);
});

const stageStyle = computed(() => ({
  height: `${Math.round(DESKTOP_CANVAS_HEIGHT * scale.value)}px`
}));

const canvasStyle = computed(() => ({
  width: `${DESKTOP_CANVAS_WIDTH}px`,
  transform: `scale(${scale.value})`
}));
</script>

<style scoped>
.desktop-reference-viewport {
  min-height: 100vh;
  background: #fcfcfc;
}

.desktop-reference-viewport__stage {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.desktop-reference-viewport__canvas {
  flex: none;
  transform-origin: top center;
}
</style>
