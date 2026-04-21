<template>
  <article class="reference-tourist-card">
    <span class="reference-tourist-card__marker" aria-hidden="true"></span>
    <div class="reference-tourist-card__label">TOURIST CARD</div>

    <div class="reference-tourist-card__avatar-shell">
      <img class="reference-tourist-card__avatar" :src="card.avatar" :alt="card.name" />
    </div>

    <div class="reference-tourist-card__identity">
      <div class="reference-tourist-card__name">{{ card.name }}</div>
      <div class="reference-tourist-card__handle">{{ card.handle }}</div>
    </div>

    <img class="reference-tourist-card__qr" :src="heroCardQrRefTight" alt="" aria-hidden="true" />

    <div class="reference-tourist-card__footer">
      <span>MEMBER SINCE</span>
      <strong>{{ card.memberSince }}</strong>
    </div>
  </article>
</template>

<script setup lang="ts">
import { heroCardQrRefTight } from '@/shared/assets/images';
import type { HeroMemberCardContent } from '@/pages/landing/model/landing.types';

defineProps<{
  card: HeroMemberCardContent;
}>();
</script>

<style scoped>
.reference-tourist-card {
  position: absolute;
  width: 100%;
  aspect-ratio: 404 / 977;
  min-height: 0;
  border: 1.05cqw solid #18292f;
  border-radius: 7.8cqw;
  background: linear-gradient(137deg, #1f9868 0%, #22b77e 100%);
  box-shadow: 0 24px 40px rgba(15, 23, 42, 0.12);
  color: #ffffff;
  container-type: inline-size;
  overflow: hidden;
}

.reference-tourist-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0) 34%);
  pointer-events: none;
}

.reference-tourist-card__marker {
  position: absolute;
  top: 4.8cqw;
  left: 4.4cqw;
  width: 2.6cqw;
  height: 2.6cqw;
  border: 0.42cqw solid rgba(171, 228, 206, 0.52);
  border-radius: 50%;
}

.reference-tourist-card__label,
.reference-tourist-card__identity,
.reference-tourist-card__qr,
.reference-tourist-card__footer,
.reference-tourist-card__avatar-shell,
.reference-tourist-card__marker {
  position: relative;
  z-index: 1;
}

.reference-tourist-card__label {
  position: absolute;
  top: 8.9cqw;
  right: 7.1cqw;
  font-size: 3.45cqw;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-align: right;
  opacity: 0.94;
}

.reference-tourist-card__avatar-shell {
  position: absolute;
  top: 24.9cqw;
  left: 7.6cqw;
  width: 51.2cqw;
  height: 51.2cqw;
  border-radius: 50%;
  background: radial-gradient(circle at 54% 50%, #79baff 0 70%, transparent 70%);
}

.reference-tourist-card__avatar {
  width: 40.4cqw;
  height: 40.4cqw;
  margin: 5.4cqw 0 0 5.4cqw;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.14);
}

.reference-tourist-card__identity {
  position: absolute;
  left: 10.8cqw;
  top: 104.2cqw;
  width: 50cqw;
}

.reference-tourist-card__name {
  font-size: 8.1cqw;
  font-weight: 800;
  line-height: 0.96;
  letter-spacing: -0.045em;
  white-space: nowrap;
}

.reference-tourist-card__handle {
  margin-top: 1.2cqw;
  font-size: 4.45cqw;
  font-weight: 700;
  line-height: 1.08;
  opacity: 0.92;
}

.reference-tourist-card__qr {
  position: absolute;
  left: 4.7cqw;
  top: 138.6cqw;
  width: 46.6cqw;
  height: auto;
  display: block;
}

.reference-tourist-card__footer {
  position: absolute;
  left: 5.1cqw;
  bottom: 9.1cqw;
  display: flex;
  flex-direction: column;
  gap: 0.6cqw;
  font-size: 2.85cqw;
  font-weight: 700;
  letter-spacing: 0.08em;
  opacity: 0.9;
}

.reference-tourist-card__footer strong {
  display: block;
  font-size: 7cqw;
  line-height: 1;
  letter-spacing: -0.04em;
}
</style>
