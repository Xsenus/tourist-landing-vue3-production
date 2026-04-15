<template>
  <button :class="['round-control', `round-control--${side}`]" type="button" :aria-label="label">
    <slot>{{ side === 'left' ? '‹' : '›' }}</slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    side: 'left' | 'right';
    label: string;
  }>(),
  {
    side: 'left'
  }
);
</script>
