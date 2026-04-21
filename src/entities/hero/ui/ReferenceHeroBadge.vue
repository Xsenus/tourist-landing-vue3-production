<template>
  <div class="reference-hero-badge">
    <span class="reference-hero-badge__icon" :class="`reference-hero-badge__icon--${badge.icon}`"></span>
    <div class="reference-hero-badge__copy">
      <strong>{{ badge.title }}</strong>
      <small>{{ badge.copy }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HeroInfoBadgeContent } from '@/pages/landing/model/landing.types';

defineProps<{
  badge: HeroInfoBadgeContent;
}>();
</script>

<style scoped>
.reference-hero-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 14px 12px 14px 10px;
  border-radius: 11px;
  background: rgba(238, 238, 238, 0.84);
  backdrop-filter: blur(6.6px);
  box-shadow: 0 16px 28px rgba(15, 23, 42, 0.08);
}

.reference-hero-badge__icon {
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.reference-hero-badge__icon::before,
.reference-hero-badge__icon::after {
  content: '';
  position: absolute;
}

.reference-hero-badge__icon--shield::before {
  inset: 3px 8px 2px;
  background: linear-gradient(180deg, #2cc987 0%, #14955c 100%);
  clip-path: polygon(50% 0, 100% 18%, 88% 79%, 50% 100%, 12% 79%, 0 18%);
}

.reference-hero-badge__icon--shield::after {
  left: 16px;
  top: 15px;
  width: 12px;
  height: 8px;
  border-left: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  transform: rotate(-45deg);
}

.reference-hero-badge__icon--gift::before {
  left: 7px;
  right: 7px;
  bottom: 7px;
  height: 18px;
  border-radius: 4px;
  background: linear-gradient(180deg, #28c283 0%, #14955c 100%);
}

.reference-hero-badge__icon--gift::after {
  left: 5px;
  right: 5px;
  top: 8px;
  height: 14px;
  border-radius: 4px;
  background:
    linear-gradient(90deg, transparent 14px, #ffffff 14px 18px, transparent 18px),
    linear-gradient(180deg, #28c283 0%, #14955c 100%);
  box-shadow: inset 0 -5px 0 rgba(255, 255, 255, 0.08);
}

.reference-hero-badge__copy strong,
.reference-hero-badge__copy small {
  display: block;
}

.reference-hero-badge__copy strong {
  color: #12181c;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.16;
  white-space: nowrap;
}

.reference-hero-badge__copy small {
  margin-top: 2px;
  color: #12181c;
  font-size: 14px;
  line-height: 1.12;
  white-space: nowrap;
}
</style>
