<template>
  <article
    class="reference-identity-card reference-identity-card--side"
    :class="[`reference-identity-card--${modifier}`, `reference-identity-card--${screen.tone}`]"
  >
    <div class="reference-identity-card__panel">
      <div class="reference-identity-card__topbar">
        <template v-if="modifier === 'left'">
          <span class="reference-identity-card__time">9:41</span>
          <div class="reference-identity-card__topbar-copy">
            <span class="reference-identity-card__back"></span>
            <span>{{ screen.topLabel }}</span>
          </div>
        </template>
        <template v-else>
          <div class="reference-identity-card__topbar-copy">
            <span>{{ screen.topLabel }}</span>
          </div>
          <div class="reference-identity-card__system reference-identity-card__system--dark">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </template>
      </div>

      <button v-if="modifier === 'right'" class="reference-identity-card__share" type="button"></button>

      <div class="reference-identity-card__brand-row">
        <span class="reference-identity-card__brand-name">{{ screen.brand }}</span>
        <span class="reference-identity-card__brand-badge">{{ screen.badge }}</span>
      </div>

      <img class="reference-identity-card__avatar" :src="screen.image" :alt="screen.name" />
      <h3>{{ screen.name }}</h3>
      <p class="reference-identity-card__handle">{{ screen.handle }}</p>
      <p class="reference-identity-card__copy">{{ screen.copy }}</p>

      <button class="reference-identity-card__prompt" type="button">
        {{ screen.prompt }}
      </button>

      <div class="reference-identity-card__actions">
        <button
          v-for="action in screen.actions"
          :key="action"
          class="reference-identity-card__action"
          :class="`reference-identity-card__action--${screen.tone}`"
          type="button"
        >
          {{ action }}
        </button>
      </div>

      <div class="reference-identity-card__links">
        <strong>{{ screen.socialHeading }}</strong>
        <a class="reference-identity-card__link" href="#" @click.prevent>
          <span class="reference-identity-card__link-icon"></span>
          <span class="reference-identity-card__link-copy">
            <small>{{ screen.socialLabel }}</small>
            <span>{{ screen.socialHandle }}</span>
          </span>
          <span class="reference-identity-card__link-arrow"></span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IdentitySideScreenContent } from '@/pages/landing/model/landing.types';

withDefaults(
  defineProps<{
    screen: IdentitySideScreenContent;
    modifier?: 'left' | 'right';
  }>(),
  {
    modifier: 'left'
  }
);
</script>

<style scoped>
.reference-identity-card {
  border-radius: 37px;
  overflow: hidden;
  box-shadow: 0 24px 46px rgba(15, 23, 42, 0.11);
}

.reference-identity-card__panel {
  position: relative;
  height: 100%;
  padding: 18px 18px 16px;
}

.reference-identity-card--green .reference-identity-card__panel {
  background: linear-gradient(180deg, rgba(237, 248, 245, 0.96) 0%, rgba(255, 255, 255, 0.96) 100%);
}

.reference-identity-card--orange .reference-identity-card__panel {
  background: linear-gradient(180deg, rgba(255, 242, 236, 0.96) 0%, rgba(255, 255, 255, 0.96) 100%);
}

.reference-identity-card__topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reference-identity-card__topbar-copy {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #313840;
  font-size: 13px;
  font-weight: 700;
}

.reference-identity-card__time {
  color: #313840;
  font-size: 13px;
  font-weight: 800;
}

.reference-identity-card__back {
  width: 14px;
  height: 14px;
  border-left: 3px solid #3a4047;
  border-bottom: 3px solid #3a4047;
  transform: rotate(45deg);
}

.reference-identity-card__system {
  display: inline-flex;
  gap: 4px;
}

.reference-identity-card__system span {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(18, 24, 28, 0.72);
}

.reference-identity-card__share {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 12px;
  background: rgba(18, 24, 28, 0.04);
}

.reference-identity-card__share::before,
.reference-identity-card__share::after {
  content: '';
  position: absolute;
}

.reference-identity-card__share::before {
  left: 13px;
  top: 11px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #3a4047;
  border-right: 2px solid #3a4047;
}

.reference-identity-card__share::after {
  left: 17px;
  top: 10px;
  width: 2px;
  height: 14px;
  background: #3a4047;
  transform: rotate(45deg);
}

.reference-identity-card__brand-row {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
}

.reference-identity-card__brand-name {
  color: #19bea2;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.reference-identity-card__brand-badge {
  min-height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  background: #1dcfb5;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  line-height: 24px;
}

.reference-identity-card__avatar {
  display: block;
  width: 88px;
  height: 88px;
  margin-top: 20px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 16px 26px rgba(46, 40, 34, 0.18);
}

.reference-identity-card__panel h3 {
  margin: 18px 0 0;
  color: #1b1f23;
  font-size: 34px;
  line-height: 0.96;
  letter-spacing: -0.05em;
}

.reference-identity-card__handle {
  margin: 4px 0 0;
  color: #838d97;
  font-size: 14px;
}

.reference-identity-card__copy {
  margin: 18px 0 0;
  color: #8d9197;
  font-size: 15px;
  line-height: 1.45;
}

.reference-identity-card__prompt {
  width: 100%;
  min-height: 52px;
  margin-top: 18px;
  border: 0;
  border-radius: 18px;
  background: rgba(165, 144, 124, 0.2);
  color: #54483e;
  font-size: 15px;
  font-weight: 700;
}

.reference-identity-card__actions {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}

.reference-identity-card__action {
  min-height: 50px;
  border: 0;
  border-radius: 16px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}

.reference-identity-card__action--green {
  background: #2f785f;
}

.reference-identity-card__action--orange {
  background: #ff572b;
}

.reference-identity-card__links {
  margin-top: 16px;
  padding-top: 18px;
  border-top: 1px solid rgba(18, 24, 28, 0.08);
}

.reference-identity-card__links strong {
  display: block;
  font-size: 18px;
  line-height: 1.08;
}

.reference-identity-card__link {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) 8px;
  gap: 12px;
  align-items: center;
  margin-top: 14px;
  text-decoration: none;
}

.reference-identity-card__link-icon {
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(180deg, #f3e7ff, #dde7ff);
}

.reference-identity-card__link-icon::before {
  content: '';
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  background: linear-gradient(180deg, #8d6df8, #4e9cff);
}

.reference-identity-card__link-copy small,
.reference-identity-card__link-copy span {
  display: block;
}

.reference-identity-card__link-copy small {
  color: #99a1aa;
  font-size: 11px;
}

.reference-identity-card__link-copy span {
  color: #12181c;
  font-size: 15px;
  font-weight: 700;
}

.reference-identity-card__link-arrow {
  width: 8px;
  height: 8px;
  border-top: 2px solid #98a0aa;
  border-right: 2px solid #98a0aa;
  transform: rotate(45deg);
}
</style>
