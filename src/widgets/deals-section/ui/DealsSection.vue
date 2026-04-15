<template>
  <section :id="sectionId" class="section-shell deals">
    <div class="panel deals__panel">
      <div class="deals__intro" data-animate="deals-copy">
        <SectionBadge :label="sectionData.eyebrow" tone="mint" />
        <h2 class="section-title deals__title">
          <span>
            {{ sectionData.title[0] }}
            <span class="section-title__accent section-title__accent--green">{{ sectionData.title[1] }}</span>
          </span>
          <span class="deals__title-line section-title__accent section-title__accent--black">
            {{ sectionData.title[2] }}
          </span>
        </h2>
        <p class="section-copy">{{ sectionData.copy }}</p>

        <div class="trust-points">
          <div
            v-for="point in sectionData.points"
            :key="point.title"
            class="trust-point"
            data-animate="trust-point"
          >
            <span class="trust-point__icon"></span>
            <div class="trust-point__copy">
              <strong>{{ point.title }}</strong>
              <small>{{ point.text }}</small>
            </div>
          </div>
        </div>

        <InlineLink :href="sectionData.linkHref" :label="sectionData.linkLabel" animate-id="deals-link" />
      </div>

      <div class="deals__gallery" data-animate="deals-gallery">
        <article
          v-for="card in sectionData.cards"
          :key="card.title"
          class="deal-card"
          :class="`deal-card--${card.variant}`"
          data-animate="deal-card"
        >
          <img :src="card.image" :alt="card.title" />
          <div v-if="card.variant !== 'ticket'" class="deal-card__shade"></div>
          <div v-if="card.discount" class="deal-card__discount">{{ card.discount }}</div>

          <div v-if="card.variant === 'ticket'" class="deal-card__ticket">
            <strong>{{ card.title }}</strong>
            <span>{{ card.copy }}</span>
            <small>{{ card.meta }}</small>
          </div>

          <div v-else class="deal-card__body">
            <h3>{{ card.title }}</h3>
            <p v-if="card.copy">{{ card.copy }}</p>
          </div>
        </article>

        <button class="round-control deals__control deals__control--left" type="button" aria-label="Previous deal">
          &#8249;
        </button>

        <button class="round-control deals__control deals__control--right" type="button" aria-label="Next deal">
          &#8250;
        </button>
      </div>

      <p class="deals__note" data-animate="deals-note">{{ sectionData.note }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DealsSectionContent } from '@/pages/landing/model/landing.types';
import InlineLink from '@/shared/ui/InlineLink.vue';
import SectionBadge from '@/shared/ui/SectionBadge.vue';

withDefaults(
  defineProps<{
    sectionData: DealsSectionContent;
    sectionId?: string;
  }>(),
  {
    sectionId: 'deals'
  }
);
</script>
