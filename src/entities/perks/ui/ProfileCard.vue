<template>
  <article class="profile-card" data-animate="profile-card">
    <div class="profile-card__top">
      <div class="profile-card__url">{{ profile.url }}</div>
      <span class="badge-pill badge-pill--green">{{ profile.member }}</span>
    </div>

    <img class="profile-card__avatar" :src="profile.avatar" :alt="profile.name" />
    <h3 class="profile-card__name">{{ profile.name }}</h3>
    <p class="profile-card__meta">{{ profile.role }}</p>

    <div class="profile-card__stats">
      <div v-for="stat in profile.stats" :key="stat.label" class="profile-card__stat" data-animate="profile-stat">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </div>

    <div class="profile-card__thumbs">
      <img
        v-for="thumb in profile.thumbs"
        :key="thumb.image"
        :src="thumb.image"
        :alt="thumb.label"
        data-animate="profile-thumb"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PerksProfileContent } from '@/pages/landing/model/landing.types';

defineProps<{
  profile: PerksProfileContent;
}>();
</script>
