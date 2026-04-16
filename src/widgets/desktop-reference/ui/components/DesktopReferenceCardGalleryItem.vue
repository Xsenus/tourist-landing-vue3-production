<template>
  <div class="desktop-card-preview__gallery-item" :data-design-element="designElement">
    <img :alt="alt" class="desktop-card-preview__gallery-image" :src="src" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  designElement: string;
}>();
</script>
