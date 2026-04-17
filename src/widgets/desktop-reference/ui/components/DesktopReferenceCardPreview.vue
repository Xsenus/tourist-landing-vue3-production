<template>
  <div class="frame-49" data-design-element="desktop-card-preview">
    <ReferencePerksProfileCard :profile="referencePerksProfile" />
  </div>
  <div class="union" data-design-element="desktop-card-preview-accent"></div>
</template>

<script setup lang="ts">
import { referencePerksProfile } from '@/pages/landing/model/reference-content';
import ReferencePerksProfileCard from '@/entities/perks/ui/ReferencePerksProfileCard.vue';
</script>
