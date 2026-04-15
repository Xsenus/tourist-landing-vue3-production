<template>
  <section :id="sectionId" class="section-shell hero">
    <div class="panel hero__panel">
      <div class="hero__grid">
        <div class="hero__content" data-animate="hero-copy">
          <p class="hero__eyebrow" data-animate="hero-eyebrow">
            <span class="hero__eyebrow-mark" aria-hidden="true"></span>
            <span>{{ hero.eyebrow }}</span>
          </p>

          <h1 class="hero__title" data-animate="hero-title">
            <span class="hero__title-line" data-animate="hero-title-line">{{ hero.titleTop }}</span>
            <span class="hero__title-line hero__title-line--accent" data-animate="hero-title-line">
              <span class="hero__title-accent hero__title-accent--green">{{ hero.titleGreen }}</span>
              <span class="hero__title-accent hero__title-accent--orange">{{ hero.titleOrange }}</span>
              <span class="hero__title-spark" aria-hidden="true"></span>
            </span>
          </h1>

          <p class="hero__summary" data-animate="hero-summary">{{ hero.summary }}</p>

          <div class="hero__actions" data-animate="hero-actions">
            <AppButton :href="hero.primaryHref" :label="hero.primaryLabel" variant="primary" />
            <AppButton
              :href="hero.secondaryHref"
              :label="hero.secondaryLabel"
              variant="secondary"
              icon="play"
            />
          </div>

          <div class="hero__proof" data-animate="hero-proof">
            <AvatarStack :items="socialProof.avatars" :size="48" :overlap="12" />

            <div class="hero__proof-copy">
              <div class="hero__proof-top">
                <span class="hero__proof-headline">{{ socialProof.headline }}</span>
                <span class="hero__proof-stars" aria-label="5 star rating">
                  <span v-for="starIndex in 5" :key="starIndex">&#9733;</span>
                </span>
              </div>
              <div class="hero__proof-subline">{{ socialProof.subline }}</div>
            </div>
          </div>
        </div>

        <div class="hero__visual" :style="visualStyle" data-animate="hero-visual">
          <div class="hero__visual-build">
            <div class="phone-mockup hero__phone hero__phone--back" aria-hidden="true">
              <div
                class="phone-mockup__screen"
                :class="hero.backPhoneImage ? 'phone-mockup__screen--map' : 'phone-mockup__screen--ghost'"
              >
                <img
                  v-if="hero.backPhoneImage"
                  class="phone-mockup__ghost-art"
                  :src="hero.backPhoneImage"
                  alt=""
                />
              </div>
              <img class="phone-mockup__frame" :src="hero.phoneFrame" alt="" />
            </div>

            <div class="phone-mockup hero__phone hero__phone--front">
              <div class="phone-mockup__screen">
                <HeroPhoneUi :screen="hero.phoneUi" />
              </div>
              <img class="phone-mockup__frame" :src="hero.phoneFrame" alt="" aria-hidden="true" />
            </div>

            <HeroMemberCard :card="hero.card" />

            <HeroInfoBadge
              v-for="(badge, badgeIndex) in hero.badges"
              :key="badge.title"
              :badge="badge"
              :modifier="badgeIndex === 0 ? 'top' : 'bottom'"
            />

            <p class="hero__scribble">{{ hero.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { HeroSectionContent, SocialProofContent } from '@/pages/landing/model/landing.types';
import HeroInfoBadge from '@/entities/hero/ui/HeroInfoBadge.vue';
import HeroMemberCard from '@/entities/hero/ui/HeroMemberCard.vue';
import HeroPhoneUi from '@/entities/hero/ui/HeroPhoneUi.vue';
import AppButton from '@/shared/ui/AppButton.vue';
import AvatarStack from '@/shared/ui/AvatarStack.vue';

const props = withDefaults(
  defineProps<{
    hero: HeroSectionContent;
    socialProof: SocialProofContent;
    sectionId?: string;
  }>(),
  {
    sectionId: 'top'
  }
);

const visualStyle = computed(() => ({
  '--hero-bg-image': `url(${props.hero.background})`
}));
</script>
