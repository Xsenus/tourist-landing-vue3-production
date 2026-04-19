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
  gap: 12px;
  padding: 14px;
  border-radius: 30px;
  background: linear-gradient(180deg, #2f261d 0%, #1f1a16 100%);
  box-shadow: 0 24px 44px rgba(15, 23, 42, 0.2);
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
  gap: 7px;
  color: #14c7ac;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.reference-journey-preview-card__badge {
  min-height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
  font-size: 10px;
  line-height: 22px;
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
  left: 10px;
  top: 8px;
  width: 8px;
  height: 8px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
}

.reference-journey-preview-card__share::after {
  left: 14px;
  top: 7px;
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
  height: 250px;
  object-fit: cover;
}

.reference-journey-preview-card__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(12, 18, 28, 0.04) 0%, rgba(12, 18, 28, 0.74) 100%);
}

.reference-journey-preview-card__copy {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 54px;
  color: #ffffff;
}

.reference-journey-preview-card__copy h3 {
  margin: 0;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.04em;
}

.reference-journey-preview-card__copy p {
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.34;
  color: rgba(255, 255, 255, 0.76);
}

.reference-journey-preview-card__cta {
  min-height: 42px;
  border: 0;
  border-radius: 12px;
  background: #14c7ac;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}

.reference-journey-preview-card__cta--ghost {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  padding: 0 14px;
  min-height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
}

.reference-journey-preview-card__map {
  overflow: hidden;
  border-radius: 18px;
  background: #ffffff;
}

.reference-journey-preview-card__map img {
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
}
</style>
