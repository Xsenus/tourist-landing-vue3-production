<template>
  <DesktopReferencePage v-if="screenMode === 'desktop'" />

  <MobileReferencePage v-else-if="screenMode === 'mobile'" />

  <template v-else>
    <SiteHeader :nav-items="navigationItems" />
    <HeroSection :hero="heroSectionContent" :social-proof="socialProofContent" />

    <!-- Page sections remain flat here while internals are delegated to widgets/entities for handoff clarity. -->
    <main id="main-content" class="page-main">
      <DealsSection :section-data="dealsSectionContent" />
      <PerksSection :section-data="perksSectionContent" />
      <BookingSection :section-data="bookingSectionContent" />
      <IdentitySection :section-data="identitySectionContent" />
      <JourneySection :section-data="journeySectionContent" />
    </main>
  </template>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue';

import {
  bookingSectionContent,
  dealsSectionContent,
  heroSectionContent,
  identitySectionContent,
  journeySectionContent,
  navigationItems,
  perksSectionContent,
  socialProofContent
} from '@/pages/landing/model/landing-content';
import BookingSection from '@/widgets/booking-section/ui/BookingSection.vue';
import DealsSection from '@/widgets/deals-section/ui/DealsSection.vue';
import HeroSection from '@/widgets/hero-section/ui/HeroSection.vue';
import IdentitySection from '@/widgets/identity-section/ui/IdentitySection.vue';
import JourneySection from '@/widgets/journey-section/ui/JourneySection.vue';
import SiteHeader from '@/widgets/site-header/ui/SiteHeader.vue';
import PerksSection from '@/widgets/perks-section/ui/PerksSection.vue';

type ScreenMode = 'desktop' | 'tablet' | 'mobile';

const DesktopReferencePage = defineAsyncComponent(
  () => import('@/widgets/desktop-reference/ui/DesktopReferencePage.vue')
);
const MobileReferencePage = defineAsyncComponent(
  () => import('@/widgets/mobile-reference/ui/MobileReferencePage.vue')
);

const resolveScreenMode = (): ScreenMode => {
  if (typeof window === 'undefined') {
    return 'tablet';
  }

  if (window.innerWidth >= 1280) {
    return 'desktop';
  }

  if (window.innerWidth <= 767) {
    return 'mobile';
  }

  return 'tablet';
};

const screenMode = ref<ScreenMode>(resolveScreenMode());

const syncScreenMode = (): void => {
  screenMode.value = resolveScreenMode();
};

onMounted(() => {
  if (typeof window === 'undefined') {
    return;
  }

  syncScreenMode();
  window.addEventListener('resize', syncScreenMode);
});

onBeforeUnmount(() => {
  if (typeof window === 'undefined') {
    return;
  }

  window.removeEventListener('resize', syncScreenMode);
});
</script>
