<template>
  <div class="flex-column-cce" data-design-element="desktop-profile-visual">
    <div class="group-72"></div>
    <div class="star-73"></div>
    <div class="desktop-profile-visual-stack" data-design-element="desktop-profile-visual-stack">
      <ReferenceProfileCardStack
        design-element="desktop-profile-screen-stack"
        prefix="desktop-profile-screen"
        variant="desktop"
      />
    </div>
    <div class="star-75"></div>
  </div>
</template>

<script setup lang="ts">
import ReferenceProfileCardStack from '@/entities/identity/ui/ReferenceProfileCardStack.vue';
</script>
