<template>
  <article class="identity-card identity-card--ui identity-card--main" data-animate="identity-main-screen">
    <div class="identity-preview identity-preview--main">
      <div class="identity-preview__photo-shell">
        <div class="identity-preview__status" data-animate="identity-status">{{ profile.time }}</div>

        <img
          class="identity-preview__hero-image"
          :src="profile.image"
          :alt="profile.name"
          data-animate="identity-hero-image"
        />

        <div class="identity-preview__hero-shade"></div>

        <div class="identity-preview__hero-copy" data-animate="identity-hero-copy">
          <h3 class="identity-preview__hero-name">{{ profile.name }}</h3>
          <p class="identity-preview__hero-handle">{{ profile.handle }}</p>
        </div>

        <button class="identity-preview__prompt" type="button" data-animate="identity-prompt">
          {{ profile.prompt }}
        </button>
      </div>

      <div class="identity-preview__body" data-animate="identity-body">
        <button
          v-for="action in profile.actions"
          :key="action"
          class="identity-preview__action identity-preview__action--main"
          type="button"
        >
          {{ action }}
        </button>

        <div class="identity-preview__links">
          <strong>{{ profile.socialHeading }}</strong>

          <a class="identity-preview__link" href="#" @click.prevent>
            <span class="identity-preview__link-icon identity-preview__link-icon--messenger" aria-hidden="true"></span>
            <span class="identity-preview__link-copy">
              <small>{{ profile.socialLabel }}</small>
              <span>{{ profile.socialHandle }}</span>
            </span>
            <span class="identity-preview__link-arrow" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IdentityMainScreenContent } from '@/pages/landing/model/landing.types';

defineProps<{
  profile: IdentityMainScreenContent;
}>();
</script>
