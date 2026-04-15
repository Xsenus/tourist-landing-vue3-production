<template>
  <span class="section-tag" :class="`section-tag--${tone}`">
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import type { SectionTone } from '@/shared/model/ui';

withDefaults(
  defineProps<{
    label: string;
    tone?: SectionTone;
  }>(),
  {
    tone: 'green'
  }
);
</script>
