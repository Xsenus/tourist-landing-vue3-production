<template>
  <main
    id="top"
    class="main-container mobile-reference-page"
    data-design-element="mobile-page"
    data-figma-node="46:505"
    data-layout-mode="mobile"
  >
    <MobileReferenceHeader />
    <MobileReferenceHeroSection />
    <MobileReferenceDealsSection />
    <MobileReferenceCardSection />
    <MobileReferenceBookingSection />
    <MobileReferenceProfileSection />
    <MobileReferenceJourneySection />
    <MobileReferenceFooterSection />
  </main>
</template>

<script lang="ts" setup>
import './mobile-reference.css';

import MobileReferenceBookingSection from './components/MobileReferenceBookingSection.vue';
import MobileReferenceCardSection from './components/MobileReferenceCardSection.vue';
import MobileReferenceDealsSection from './components/MobileReferenceDealsSection.vue';
import MobileReferenceFooterSection from './components/MobileReferenceFooterSection.vue';
import MobileReferenceHeader from './components/MobileReferenceHeader.vue';
import MobileReferenceHeroSection from './components/MobileReferenceHeroSection.vue';
import MobileReferenceJourneySection from './components/MobileReferenceJourneySection.vue';
import MobileReferenceProfileSection from './components/MobileReferenceProfileSection.vue';
</script>
