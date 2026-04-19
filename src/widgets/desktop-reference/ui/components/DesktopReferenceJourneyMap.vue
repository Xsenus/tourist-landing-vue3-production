<template>
  <div class="empty" data-design-element="desktop-journey-map">
    <div class="flex-column-bed">
      <div class="ellipse-89"></div>
      <div class="ellipse-8a"></div>
      <div class="group-8b"></div>
      <div class="rectangle-8c" data-design-element="desktop-journey-pin-note">
        <div class="frame-8d">
          <div class="map-pin"></div>
          <div class="frame-8e">
            <span class="new-pin">New pin!</span>
            <span class="barcelona-spain">Barcelona, Spain</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-column-cc">
      <div class="ellipse-8f"></div>
      <div class="ellipse-90"></div>
    </div>
    <div class="ellipse-91"></div>
    <div class="vector-92"></div>
  </div>
  <div class="desktop-reference-journey-map__preview" data-design-element="desktop-journey-map-art">
    <ReferenceJourneyPreviewCard :preview="referenceJourneyPreviewCard" />
  </div>
  <div class="desktop-reference-journey-map__note" data-design-element="desktop-journey-map-note">
    <span>Your world,</span>
    <span>your story</span>
  </div>
</template>

<script setup lang="ts">
import { referenceJourneyPreviewCard } from '@/pages/landing/model/reference-content';
import ReferenceJourneyPreviewCard from '@/entities/journey/ui/ReferenceJourneyPreviewCard.vue';
</script>

<style scoped>
.desktop-reference-journey-map__preview {
  position: absolute;
  top: 104px;
  left: 1078px;
  width: 236px;
  z-index: 301;
}

.desktop-reference-journey-map__preview :deep(.reference-journey-preview-card) {
  width: 100%;
  min-height: 496px;
}

.desktop-reference-journey-map__note {
  position: absolute;
  left: 292px;
  top: 416px;
  z-index: 304;
  color: #17243b;
  font-family: 'Comic Sans MS', 'Trebuchet MS', cursive;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.05;
  transform: rotate(-9deg);
}

.desktop-reference-journey-map__note span {
  display: block;
}

.desktop-reference-journey-map__note::after {
  content: '';
  position: absolute;
  right: -74px;
  top: 18px;
  width: 68px;
  height: 34px;
  border-top: 4px solid #2b9b5f;
  border-right: 4px solid #2b9b5f;
  border-radius: 0 24px 0 0;
  transform: rotate(26deg);
}
</style>
