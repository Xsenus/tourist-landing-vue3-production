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
  top: 101px;
  left: 1000px;
  width: 252px;
  z-index: 301;
}

.desktop-reference-journey-map__preview :deep(.reference-journey-preview-card) {
  width: 100%;
  min-height: 483px;
  border-radius: 30px;
}

.desktop-reference-journey-map__note {
  position: absolute;
  left: 286px;
  top: 399px;
  width: 149px;
  z-index: 304;
  color: #18365b;
  font-family: 'Comic Sans MS', 'Trebuchet MS', cursive;
  font-size: 20px;
  font-weight: 700;
  line-height: 0.94;
  transform: rotate(-7deg);
  transform-origin: left top;
}

.desktop-reference-journey-map__note span {
  display: block;
}

.desktop-reference-journey-map__note::after {
  content: '';
  position: absolute;
  right: -48px;
  top: 20px;
  width: 58px;
  height: 38px;
  border-top: 3px solid #2b9b5f;
  border-right: 3px solid #2b9b5f;
  border-radius: 0 24px 0 0;
  transform: rotate(34deg);
}
</style>
