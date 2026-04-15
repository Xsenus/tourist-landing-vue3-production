<template>
  <article
    class="identity-card identity-card--ui"
    :class="[`identity-card--${modifier}`, `identity-card--${screen.tone}`]"
    :data-animate="`identity-${modifier}-screen`"
  >
    <div class="identity-preview identity-preview--side" :class="`identity-preview--${screen.tone}`">
      <div class="identity-preview__side-topbar">
        <span class="identity-preview__side-label">{{ screen.topLabel }}</span>
        <button class="identity-preview__share" type="button" aria-label="Share contact"></button>
      </div>

      <div class="identity-preview__side-brand">
        <span class="identity-preview__side-brand-name">{{ screen.brand }}</span>
        <span class="identity-preview__side-brand-badge">{{ screen.badge }}</span>
      </div>

      <img class="identity-preview__side-avatar" :src="screen.image" :alt="screen.name" />

      <h3 class="identity-preview__side-name">{{ screen.name }}</h3>
      <p class="identity-preview__side-handle">{{ screen.handle }}</p>
      <p class="identity-preview__side-copy">{{ screen.copy }}</p>

      <button class="identity-preview__prompt identity-preview__prompt--side" type="button">
        {{ screen.prompt }}
      </button>

      <div class="identity-preview__side-actions">
        <button
          v-for="action in screen.actions"
          :key="action"
          class="identity-preview__action"
          :class="`identity-preview__action--${screen.tone}`"
          type="button"
        >
          {{ action }}
        </button>
      </div>

      <div class="identity-preview__links identity-preview__links--side">
        <strong>{{ screen.socialHeading }}</strong>

        <a class="identity-preview__link" href="#" @click.prevent>
          <span class="identity-preview__link-icon identity-preview__link-icon--messenger" aria-hidden="true"></span>
          <span class="identity-preview__link-copy">
            <small>{{ screen.socialLabel }}</small>
            <span>{{ screen.socialHandle }}</span>
          </span>
          <span class="identity-preview__link-arrow" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IdentitySideScreenContent } from '@/pages/landing/model/landing.types';

withDefaults(
  defineProps<{
    screen: IdentitySideScreenContent;
    modifier?: 'left' | 'right';
  }>(),
  {
    modifier: 'left'
  }
);
</script>
