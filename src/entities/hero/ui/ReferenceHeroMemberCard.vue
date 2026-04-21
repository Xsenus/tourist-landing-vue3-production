<template>
  <article class="reference-tourist-card">
    <div class="reference-tourist-card__label">TOURIST CARD</div>

    <div class="reference-tourist-card__avatar-shell">
      <img class="reference-tourist-card__avatar" :src="card.avatar" :alt="card.name" />
    </div>

    <div class="reference-tourist-card__identity">
      <div class="reference-tourist-card__name">{{ card.name }}</div>
      <div class="reference-tourist-card__handle">{{ card.handle }}</div>
    </div>

    <div class="reference-tourist-card__qr" aria-hidden="true">
      <span class="reference-tourist-card__qr-box reference-tourist-card__qr-box--tl"></span>
      <span class="reference-tourist-card__qr-box reference-tourist-card__qr-box--tr"></span>
      <span class="reference-tourist-card__qr-box reference-tourist-card__qr-box--bl"></span>
      <span class="reference-tourist-card__qr-noise"></span>
    </div>

    <div class="reference-tourist-card__footer">
      <span>MEMBER SINCE</span>
      <strong>{{ card.memberSince }}</strong>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { HeroMemberCardContent } from '@/pages/landing/model/landing.types';

defineProps<{
  card: HeroMemberCardContent;
}>();
</script>

<style scoped>
.reference-tourist-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 13px 16px 16px;
  border: 5px solid #172329;
  border-radius: 28px;
  background: linear-gradient(180deg, #28a774 0%, #169261 100%);
  box-shadow: 0 26px 44px rgba(15, 23, 42, 0.12);
  color: #ffffff;
  overflow: hidden;
}

.reference-tourist-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 34%);
  pointer-events: none;
}

.reference-tourist-card__label,
.reference-tourist-card__identity,
.reference-tourist-card__qr,
.reference-tourist-card__footer,
.reference-tourist-card__avatar-shell {
  position: relative;
  z-index: 1;
}

.reference-tourist-card__label {
  width: 100%;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: right;
}

.reference-tourist-card__avatar-shell {
  width: 122px;
  height: 122px;
  margin: 16px 0 0 6px;
  border-radius: 50%;
  background: radial-gradient(circle at 54% 50%, #8fd5ff 0 68%, transparent 68%);
}

.reference-tourist-card__avatar {
  width: 96px;
  height: 96px;
  margin: 13px 0 0 13px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.14);
}

.reference-tourist-card__identity {
  margin-top: 10px;
  padding-left: 4px;
}

.reference-tourist-card__name {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.reference-tourist-card__handle {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.08;
  opacity: 0.92;
}

.reference-tourist-card__qr {
  width: 112px;
  height: 112px;
  margin: 20px 0 0 8px;
  border-radius: 14px;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.98) 11px, transparent 11px) 0 0 / 18px 18px,
    linear-gradient(rgba(255, 255, 255, 0.98) 11px, transparent 11px) 0 0 / 18px 18px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25));
}

.reference-tourist-card__qr-box {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 4px solid rgba(12, 14, 20, 0.96);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.98);
}

.reference-tourist-card__qr-box--tl {
  top: 8px;
  left: 8px;
}

.reference-tourist-card__qr-box--tr {
  top: 8px;
  right: 8px;
}

.reference-tourist-card__qr-box--bl {
  left: 8px;
  bottom: 8px;
}

.reference-tourist-card__qr-noise {
  position: absolute;
  inset: 18px;
  background:
    radial-gradient(circle at 15% 18%, rgba(12, 14, 20, 0.95) 0 8px, transparent 9px),
    radial-gradient(circle at 48% 62%, rgba(12, 14, 20, 0.95) 0 6px, transparent 7px),
    radial-gradient(circle at 68% 25%, rgba(12, 14, 20, 0.95) 0 5px, transparent 6px),
    radial-gradient(circle at 74% 70%, rgba(12, 14, 20, 0.95) 0 8px, transparent 9px),
    radial-gradient(circle at 36% 32%, rgba(12, 14, 20, 0.95) 0 5px, transparent 6px),
    radial-gradient(circle at 56% 44%, rgba(12, 14, 20, 0.95) 0 4px, transparent 5px),
    radial-gradient(circle at 26% 76%, rgba(12, 14, 20, 0.95) 0 7px, transparent 8px),
    radial-gradient(circle at 84% 48%, rgba(12, 14, 20, 0.95) 0 5px, transparent 6px);
}

.reference-tourist-card__footer {
  margin-top: auto;
  padding: 18px 0 0 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.reference-tourist-card__footer strong {
  display: block;
  margin-top: 4px;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.04em;
}
</style>
