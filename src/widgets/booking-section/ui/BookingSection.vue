<template>
  <section :id="sectionId" class="section-shell booking">
    <div class="panel booking__panel">
      <div class="booking__copy" data-animate="booking-copy">
        <SectionBadge :label="sectionData.eyebrow" tone="orange" />
        <h2 class="section-title section-title--compact">
          {{ sectionData.titleStart }}
          <span class="section-title__accent section-title__accent--blue">{{ sectionData.titleAccent }}</span>
        </h2>
        <p class="section-copy">{{ sectionData.copy }}</p>

        <InlineLink
          :href="sectionData.linkHref"
          :label="sectionData.linkLabel"
          tone="orange"
          animate-id="booking-link"
        />
      </div>

      <div class="booking__visual" data-animate="booking-visual">
        <img class="booking__image" :src="sectionData.image" :alt="sectionData.imageAlt" />
        <div class="booking__bubble" data-animate="booking-bubble">
          <span>{{ sectionData.bubble.label }}</span>
          <strong>{{ sectionData.bubble.value }}</strong>
          <small>{{ sectionData.bubble.copy }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BookingSectionContent } from '@/pages/landing/model/landing.types';
import InlineLink from '@/shared/ui/InlineLink.vue';
import SectionBadge from '@/shared/ui/SectionBadge.vue';

withDefaults(
  defineProps<{
    sectionData: BookingSectionContent;
    sectionId?: string;
  }>(),
  {
    sectionId: 'book'
  }
);
</script>
