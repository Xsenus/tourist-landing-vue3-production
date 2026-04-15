<template>
  <div
    id="top"
    class="flex-row-ec"
    data-design-element="desktop-hero-section"
    data-figma-node="21:16"
  >
    <DesktopReferenceHeroTopbar />
    <DesktopReferenceNavBar />
    <DesktopReferenceHeroCopy />
    <DesktopReferenceHeroSocialProof />
    <DesktopReferenceDealsPanel />
  </div>
</template>

<script setup lang="ts">
import DesktopReferenceDealsPanel from './components/DesktopReferenceDealsPanel.vue';
import DesktopReferenceHeroCopy from './components/DesktopReferenceHeroCopy.vue';
import DesktopReferenceHeroSocialProof from './components/DesktopReferenceHeroSocialProof.vue';
import DesktopReferenceHeroTopbar from './components/DesktopReferenceHeroTopbar.vue';
import DesktopReferenceNavBar from './DesktopReferenceNavBar.vue';
</script>
