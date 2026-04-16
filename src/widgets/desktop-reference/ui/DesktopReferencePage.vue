<template>
  <main
    id="main-content"
    class="main-container"
    data-design-element="desktop-page"
    data-figma-node="21:14"
    data-layout-mode="desktop"
  >
    <DesktopReferenceHeroSection />
    <DesktopReferenceCardSection />
    <DesktopReferenceBookingSection />
    <DesktopReferenceProfileSection />
    <DesktopReferenceJourneySection />
    <DesktopReferenceFooterSection />
  </main>
</template>

<script setup lang="ts">
import './desktop-reference.css';

import DesktopReferenceBookingSection from './DesktopReferenceBookingSection.vue';
import DesktopReferenceCardSection from './DesktopReferenceCardSection.vue';
import DesktopReferenceFooterSection from './DesktopReferenceFooterSection.vue';
import DesktopReferenceHeroSection from './DesktopReferenceHeroSection.vue';
import DesktopReferenceJourneySection from './DesktopReferenceJourneySection.vue';
import DesktopReferenceProfileSection from './DesktopReferenceProfileSection.vue';
</script>
