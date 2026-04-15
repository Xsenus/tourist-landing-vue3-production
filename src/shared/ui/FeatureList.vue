<template>
  <ul class="feature-list" :class="{ 'feature-list--green': tone === 'green' }" data-animate="feature-list">
    <li v-for="item in items" :key="item" data-animate="feature-item">
      <span class="feature-list__icon"></span>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { SectionTone } from '@/shared/model/ui';

withDefaults(
  defineProps<{
    items?: string[];
    tone?: SectionTone;
  }>(),
  {
    items: () => [],
    tone: 'orange'
  }
);
</script>
