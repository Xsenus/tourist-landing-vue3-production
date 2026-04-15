<template>
  <a :href="href" class="inline-link" :class="toneClass" :data-animate="animateId">
    {{ label }}
    <span aria-hidden="true">→</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    label: string;
    href?: string;
    tone?: 'default' | 'blue' | 'orange';
    animateId?: string;
  }>(),
  {
    href: '#',
    tone: 'default',
    animateId: 'inline-link'
  }
);

const toneClass = computed(() => {
  if (props.tone === 'default') {
    return undefined;
  }

  return `inline-link--${props.tone}`;
});
</script>
