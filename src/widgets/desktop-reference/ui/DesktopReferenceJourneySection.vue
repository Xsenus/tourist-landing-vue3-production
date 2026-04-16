<template>
  <div
    id="journey"
    class="rectangle-87"
    data-design-element="desktop-journey-section"
    data-figma-node="21:316"
  >
    <DesktopReferenceJourneyIntro />
    <DesktopReferenceJourneyMap />
    <div class="ellipse-aa" data-design-element="desktop-journey-country-bubble"></div>
    <DesktopReferenceJourneyCountries />
    <DesktopReferenceJourneyStats />
  </div>
</template>

<script setup lang="ts">
import DesktopReferenceJourneyCountries from './components/DesktopReferenceJourneyCountries.vue';
import DesktopReferenceJourneyIntro from './components/DesktopReferenceJourneyIntro.vue';
import DesktopReferenceJourneyMap from './components/DesktopReferenceJourneyMap.vue';
import DesktopReferenceJourneyStats from './components/DesktopReferenceJourneyStats.vue';
</script>
