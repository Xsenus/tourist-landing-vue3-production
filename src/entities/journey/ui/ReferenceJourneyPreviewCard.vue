<template>
  <article class="reference-journey-preview-card">
    <div class="reference-journey-preview-card__header">
      <div class="reference-journey-preview-card__brand">
        <span>{{ preview.brand }}</span>
        <span class="reference-journey-preview-card__badge">{{ preview.badge }}</span>
      </div>
      <button class="reference-journey-preview-card__share" type="button" aria-label="Share"></button>
    </div>

    <div class="reference-journey-preview-card__portrait-shell">
      <img class="reference-journey-preview-card__portrait" :src="preview.avatar" :alt="preview.name" />
      <div class="reference-journey-preview-card__shade"></div>
      <div class="reference-journey-preview-card__copy">
        <h3>{{ preview.name }}</h3>
        <p>{{ preview.summary }}</p>
      </div>
      <span class="reference-journey-preview-card__cta reference-journey-preview-card__cta--ghost">
        {{ preview.actions[0] }}
      </span>
    </div>

    <button class="reference-journey-preview-card__cta" type="button">{{ preview.actions[1] }}</button>
    <button class="reference-journey-preview-card__cta" type="button">{{ preview.actions[2] }}</button>

    <div class="reference-journey-preview-card__map">
      <img :src="preview.footerMap" alt="" />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ReferenceJourneyPreviewCardData } from '@/pages/landing/model/reference.types';

defineProps<{
  preview: ReferenceJourneyPreviewCardData;
}>();
</script>

<style scoped>
.reference-journey-preview-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border-radius: 30px;
  background: linear-gradient(180deg, #47372b 0%, #231b15 100%);
  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.16);
  overflow: hidden;
}

.reference-journey-preview-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reference-journey-preview-card__brand {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #14c7ac;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.reference-journey-preview-card__badge {
  min-height: 20px;
  padding: 0 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 9px;
  line-height: 20px;
  letter-spacing: 0.06em;
}

.reference-journey-preview-card__share {
  position: relative;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
}

.reference-journey-preview-card__share::before,
.reference-journey-preview-card__share::after {
  content: '';
  position: absolute;
}

.reference-journey-preview-card__share::before {
  left: 9px;
  top: 7px;
  width: 8px;
  height: 8px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
}

.reference-journey-preview-card__share::after {
  left: 13px;
  top: 6px;
  width: 2px;
  height: 12px;
  background: #ffffff;
  transform: rotate(45deg);
}

.reference-journey-preview-card__portrait-shell {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

.reference-journey-preview-card__portrait {
  display: block;
  width: 100%;
  height: 258px;
  object-fit: cover;
}

.reference-journey-preview-card__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(12, 18, 28, 0.02) 0%, rgba(12, 18, 28, 0.74) 100%);
}

.reference-journey-preview-card__copy {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 56px;
  color: #ffffff;
}

.reference-journey-preview-card__copy h3 {
  margin: 0;
  font-size: 24px;
  line-height: 0.92;
  letter-spacing: -0.04em;
}

.reference-journey-preview-card__copy p {
  margin: 8px 0 0;
  font-size: 11px;
  line-height: 1.34;
  color: rgba(255, 255, 255, 0.76);
}

.reference-journey-preview-card__cta {
  min-height: 57px;
  border: 0;
  border-radius: 14px;
  background: #13c0ab;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.reference-journey-preview-card__cta--ghost {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  padding: 0 13px;
  min-height: 38px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
}

.reference-journey-preview-card__map {
  overflow: hidden;
  border-radius: 16px;
  background: #ffffff;
}

.reference-journey-preview-card__map img {
  display: block;
  width: 100%;
  height: 94px;
  object-fit: cover;
}
</style>
