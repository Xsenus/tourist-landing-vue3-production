<template>
  <div class="desktop-card-preview__stat" :data-design-element="designElement">
    <span class="desktop-card-preview__stat-value">{{ value }}</span>
    <span class="desktop-card-preview__stat-label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
  designElement: string;
}>();
</script>
