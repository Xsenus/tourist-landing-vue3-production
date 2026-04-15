<template>
  <article class="country-card__item" data-animate="country-item">
    <div class="country-card__flag" :class="`country-card__flag--${country.flag}`"></div>
    <div class="country-card__copy">
      <strong>{{ country.name }}</strong>
      <small>{{ country.cities }}</small>
    </div>
    <span class="country-card__count">{{ country.count }}</span>
  </article>
</template>

<script setup lang="ts">
import type { JourneyCountryContent } from '@/pages/landing/model/landing.types';

defineProps<{
  country: JourneyCountryContent;
}>();
</script>
