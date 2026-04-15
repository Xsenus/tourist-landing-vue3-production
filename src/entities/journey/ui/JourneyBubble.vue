<template>
  <div class="journey__bubble" :style="bubble.style" data-animate="journey-bubble">
    <img :src="bubble.image" :alt="bubble.label" />
    <span class="journey__bubble-label">{{ bubble.label }}</span>
  </div>
</template>

<script setup lang="ts">
import type { JourneyBubbleContent } from '@/pages/landing/model/landing.types';

defineProps<{
  bubble: JourneyBubbleContent;
}>();
</script>
