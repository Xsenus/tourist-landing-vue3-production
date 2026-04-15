<template>
  <div class="hero-badge" :class="`hero-badge--${modifier}`" :data-animate="`hero-badge-${modifier}`">
    <span class="hero-badge__icon" :class="`hero-badge__icon--${badge.icon}`"></span>
    <div>
      <strong>{{ badge.title }}</strong>
      <small>{{ badge.copy }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HeroInfoBadgeContent } from '@/pages/landing/model/landing.types';

withDefaults(
  defineProps<{
    badge: HeroInfoBadgeContent;
    modifier?: 'top' | 'bottom';
  }>(),
  {
    modifier: 'top'
  }
);
</script>
