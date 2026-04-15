<template>
  <section :id="sectionId" class="section-shell identity">
    <div class="panel identity__panel">
      <div class="identity__copy" data-animate="identity-copy">
        <SectionBadge :label="sectionData.eyebrow" tone="mint" />

        <h2 class="section-title section-title--large">
          {{ sectionData.titleStart }}
          <span class="section-title__accent section-title__accent--green">{{ sectionData.titleAccent }}</span>
        </h2>

        <p class="identity__handwritten" data-animate="identity-script">{{ sectionData.script }}</p>
        <p class="section-copy">{{ sectionData.copy }}</p>

        <FeatureList :items="sectionData.features" tone="green" />

        <AppButton :href="sectionData.buttonHref" :label="sectionData.buttonLabel" variant="green" />
      </div>

      <div class="identity__visual" data-animate="identity-visual">
        <!-- These three cards stay independent to make timeline-based animation possible later. -->
        <IdentitySideCard modifier="left" :screen="sectionData.screens.left" />
        <IdentityMainCard :profile="sectionData.screens.main" />
        <IdentitySideCard modifier="right" :screen="sectionData.screens.right" />

        <div class="identity__floating-link" data-animate="identity-floating-link">
          <span aria-hidden="true">&#8734;</span>
        </div>

        <span class="identity__spark identity__spark--one" data-animate="identity-spark"></span>
        <span class="identity__spark identity__spark--two" data-animate="identity-spark"></span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IdentityMainCard from '@/entities/identity/ui/IdentityMainCard.vue';
import IdentitySideCard from '@/entities/identity/ui/IdentitySideCard.vue';
import type { IdentitySectionContent } from '@/pages/landing/model/landing.types';
import AppButton from '@/shared/ui/AppButton.vue';
import FeatureList from '@/shared/ui/FeatureList.vue';
import SectionBadge from '@/shared/ui/SectionBadge.vue';

withDefaults(
  defineProps<{
    sectionData: IdentitySectionContent;
    sectionId?: string;
  }>(),
  {
    sectionId: 'identity'
  }
);
</script>
