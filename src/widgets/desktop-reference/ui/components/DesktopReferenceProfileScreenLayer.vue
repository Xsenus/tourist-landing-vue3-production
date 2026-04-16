<template>
  <img
    alt=""
    aria-hidden="true"
    class="desktop-profile-screen"
    :class="`desktop-profile-screen--${variant}`"
    :data-design-element="designElement"
    :src="src"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  variant: 'left' | 'center' | 'right';
  designElement: string;
}>();
</script>
