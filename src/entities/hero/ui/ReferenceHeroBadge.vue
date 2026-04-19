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
  gap: 14px;
  min-width: 0;
  padding: 17px 21px;
  border-radius: 19px;
  background: rgba(248, 250, 252, 0.92);
  backdrop-filter: blur(14px);
  box-shadow: 0 20px 36px rgba(15, 23, 42, 0.14);
}

.reference-hero-badge__icon {
  position: relative;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
}

.reference-hero-badge__icon::before,
.reference-hero-badge__icon::after {
  content: '';
  position: absolute;
}

.reference-hero-badge__icon--shield::before {
  inset: 4px 8px 2px;
  background: linear-gradient(180deg, #2cc987 0%, #14955c 100%);
  clip-path: polygon(50% 0, 100% 18%, 88% 79%, 50% 100%, 12% 79%, 0 18%);
}

.reference-hero-badge__icon--shield::after {
  left: 16px;
  top: 16px;
  width: 12px;
  height: 8px;
  border-left: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  transform: rotate(-45deg);
}

.reference-hero-badge__icon--gift::before {
  left: 9px;
  right: 9px;
  bottom: 8px;
  height: 18px;
  border-radius: 4px;
  background: linear-gradient(180deg, #28c283 0%, #14955c 100%);
}

.reference-hero-badge__icon--gift::after {
  left: 7px;
  right: 7px;
  top: 8px;
  height: 13px;
  border-radius: 4px;
  background:
    linear-gradient(90deg, transparent 12px, #ffffff 12px 16px, transparent 16px),
    linear-gradient(180deg, #28c283 0%, #14955c 100%);
  box-shadow: inset 0 -5px 0 rgba(255, 255, 255, 0.08);
}

.reference-hero-badge__copy strong,
.reference-hero-badge__copy small {
  display: block;
}

.reference-hero-badge__copy strong {
  color: #12181c;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.16;
}

.reference-hero-badge__copy small {
  margin-top: 4px;
  color: #59616b;
  font-size: 15px;
  line-height: 1.12;
}
</style>
