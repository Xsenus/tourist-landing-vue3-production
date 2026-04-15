<template>
  <div class="phone-ui" data-animate="hero-phone-screen">
    <div class="phone-ui__status" data-animate="phone-status">
      <span>{{ screen.time }}</span>
      <div class="phone-ui__status-icons">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="phone-ui__appbar" data-animate="phone-appbar">
      <div class="phone-ui__brand">
        <span class="phone-ui__brand-mark" aria-hidden="true">t</span>
        <strong>{{ screen.brand }}</strong>
      </div>
      <div class="phone-ui__location">
        <span class="phone-ui__location-pin" aria-hidden="true"></span>
        <span>{{ screen.location }}</span>
      </div>
    </div>

    <article class="phone-ui__feature" data-animate="phone-promo">
      <img :src="screen.promo.image" :alt="screen.promo.title" />
      <div class="phone-ui__feature-shade"></div>

      <div class="phone-ui__feature-copy">
        <small>{{ screen.promo.eyebrow }}</small>
        <span>{{ screen.promo.meta }}</span>
        <strong>{{ screen.promo.title }}</strong>
      </div>

      <div class="phone-ui__feature-badge">{{ screen.promo.discount }}</div>
    </article>

    <div class="phone-ui__section-head" data-animate="phone-section-head">
      <strong>{{ screen.sectionTitle }}</strong>
      <small>{{ screen.sectionAction }}</small>
    </div>

    <div class="phone-ui__tiles" data-animate="phone-cards">
      <article
        v-for="card in screen.cards"
        :key="card.title"
        class="phone-ui__tile"
        data-animate="phone-card"
      >
        <img :src="card.image" :alt="card.title" />
        <div class="phone-ui__tile-shade"></div>
        <div class="phone-ui__tile-copy">
          <strong>{{ card.title }}</strong>
          <span>{{ card.meta }}</span>
        </div>
      </article>
    </div>

    <div class="phone-ui__nav" data-animate="phone-nav">
      <button
        v-for="item in screen.nav"
        :key="item.label"
        class="phone-ui__nav-item"
        :class="{ 'phone-ui__nav-item--active': item.active }"
        type="button"
        data-animate="phone-nav-item"
      >
        <span class="phone-ui__nav-icon" :class="`phone-ui__nav-icon--${item.icon}`" aria-hidden="true"></span>
        <small>{{ item.label }}</small>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HeroPhoneUiContent } from '@/pages/landing/model/landing.types';

defineProps<{
  screen: HeroPhoneUiContent;
}>();
</script>
