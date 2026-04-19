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
  padding: 16px 18px 19px;
  border: 4px solid #172329;
  border-radius: 28px;
  background: linear-gradient(180deg, #2ec38f 0%, #13895b 100%);
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
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: right;
}

.reference-tourist-card__avatar-shell {
  width: 142px;
  height: 142px;
  margin: 18px 0 0 2px;
  border-radius: 50%;
  background: radial-gradient(circle at 54% 50%, #8fd5ff 0 68%, transparent 68%);
}

.reference-tourist-card__avatar {
  width: 110px;
  height: 110px;
  margin: 16px 0 0 14px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.14);
}

.reference-tourist-card__identity {
  margin-top: 8px;
  padding-left: 6px;
}

.reference-tourist-card__name {
  font-size: 24px;
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.reference-tourist-card__handle {
  margin-top: 4px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.08;
  opacity: 0.92;
}

.reference-tourist-card__qr {
  width: 128px;
  height: 128px;
  margin: 22px 0 0 4px;
  border-radius: 14px;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.98) 13px, transparent 13px) 0 0 / 21px 21px,
    linear-gradient(rgba(255, 255, 255, 0.98) 13px, transparent 13px) 0 0 / 21px 21px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25));
}

.reference-tourist-card__qr-box {
  position: absolute;
  width: 28px;
  height: 28px;
  border: 5px solid rgba(12, 14, 20, 0.96);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.98);
}

.reference-tourist-card__qr-box--tl {
  top: 9px;
  left: 9px;
}

.reference-tourist-card__qr-box--tr {
  top: 9px;
  right: 9px;
}

.reference-tourist-card__qr-box--bl {
  left: 9px;
  bottom: 9px;
}

.reference-tourist-card__qr-noise {
  position: absolute;
  inset: 22px;
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
  padding: 22px 0 0 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.reference-tourist-card__footer strong {
  display: block;
  margin-top: 4px;
  font-size: 22px;
  line-height: 1;
  letter-spacing: -0.04em;
}
</style>
