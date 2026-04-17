<template>
  <article class="tourist-card" data-animate="hero-member-card">
    <div class="tourist-card__label">TOURIST CARD</div>
    <img class="tourist-card__avatar" :src="card.avatar" :alt="card.name" data-animate="card-avatar" />

    <div class="tourist-card__identity">
      <div class="tourist-card__name" data-animate="card-name">{{ card.name }}</div>
      <div class="tourist-card__handle" data-animate="card-handle">{{ card.handle }}</div>
    </div>

    <div class="tourist-card__qr" aria-hidden="true" data-animate="card-qr">
      <span class="tourist-card__qr-box tourist-card__qr-box--tl"></span>
      <span class="tourist-card__qr-box tourist-card__qr-box--tr"></span>
      <span class="tourist-card__qr-box tourist-card__qr-box--bl"></span>
      <span class="tourist-card__qr-noise"></span>
    </div>

    <div class="tourist-card__footer" data-animate="card-footer">
      <span>MEMBER SINCE</span>
      <strong>{{ card.memberSince }}</strong>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { HeroMemberCardContent } from '@/pages/landing/model/landing.types';

defineProps<{
  card: HeroMemberCardContent;
}>();
</script>
