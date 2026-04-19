<template>
  <article class="reference-identity-card reference-identity-card--main">
    <div class="reference-identity-card__media">
      <div class="reference-identity-card__status">
        <span>{{ profile.time }}</span>
        <div class="reference-identity-card__system">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="reference-identity-card__brand">
        <span class="reference-identity-card__brand-name">tourist</span>
        <span class="reference-identity-card__brand-badge">PLUS</span>
      </div>

      <img class="reference-identity-card__hero" :src="profile.image" :alt="profile.name" />
      <div class="reference-identity-card__shade"></div>

      <div class="reference-identity-card__hero-copy">
        <h3>{{ profile.name }}</h3>
        <p>{{ profile.handle }}</p>
      </div>

      <button class="reference-identity-card__prompt" type="button">
        {{ profile.prompt }}
      </button>
    </div>

    <div class="reference-identity-card__body">
      <button
        v-for="action in profile.actions"
        :key="action"
        class="reference-identity-card__action"
        type="button"
      >
        {{ action }}
      </button>

      <div class="reference-identity-card__links">
        <strong>{{ profile.socialHeading }}</strong>
        <a class="reference-identity-card__link" href="#" @click.prevent>
          <span class="reference-identity-card__link-icon"></span>
          <span class="reference-identity-card__link-copy">
            <small>{{ profile.socialLabel }}</small>
            <span>{{ profile.socialHandle }}</span>
          </span>
          <span class="reference-identity-card__link-arrow"></span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IdentityMainScreenContent } from '@/pages/landing/model/landing.types';

defineProps<{
  profile: IdentityMainScreenContent;
}>();
</script>

<style scoped>
.reference-identity-card {
  border-radius: 38px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 26px 56px rgba(15, 23, 42, 0.12);
}

.reference-identity-card--main {
  width: 100%;
}

.reference-identity-card__media {
  position: relative;
  padding: 14px 14px 0;
}

.reference-identity-card__status,
.reference-identity-card__brand,
.reference-identity-card__hero-copy,
.reference-identity-card__prompt {
  position: absolute;
  z-index: 2;
}

.reference-identity-card__status {
  left: 28px;
  right: 28px;
  top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
}

.reference-identity-card__system {
  display: inline-flex;
  gap: 5px;
}

.reference-identity-card__system span {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
}

.reference-identity-card__brand {
  top: 16px;
  left: 50%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transform: translateX(-50%);
}

.reference-identity-card__brand-name {
  color: #ffffff;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.reference-identity-card__brand-badge {
  min-height: 28px;
  padding: 0 11px;
  border-radius: 999px;
  background: #ffffff;
  color: #20bea3;
  font-size: 13px;
  font-weight: 800;
  line-height: 28px;
}

.reference-identity-card__hero {
  display: block;
  width: 100%;
  height: 360px;
  border-radius: 32px 32px 22px 22px;
  object-fit: cover;
}

.reference-identity-card__shade {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 14px;
  height: 360px;
  border-radius: 32px 32px 22px 22px;
  background:
    linear-gradient(180deg, rgba(12, 18, 28, 0.06) 0%, rgba(12, 18, 28, 0.16) 38%, rgba(92, 66, 37, 0.62) 100%);
}

.reference-identity-card__hero-copy {
  left: 42px;
  right: 42px;
  bottom: 100px;
  color: #ffffff;
  text-align: center;
}

.reference-identity-card__hero-copy h3 {
  margin: 0;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.04em;
}

.reference-identity-card__hero-copy p {
  margin: 8px 0 0;
  font-size: 14px;
  opacity: 0.88;
}

.reference-identity-card__prompt {
  left: 14px;
  right: 14px;
  bottom: 0;
  min-height: 66px;
  border: 0;
  border-radius: 22px;
  background: rgba(132, 106, 77, 0.54);
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  backdrop-filter: blur(14px);
}

.reference-identity-card__body {
  display: grid;
  gap: 10px;
  padding: 14px;
}

.reference-identity-card__action {
  min-height: 58px;
  border: 0;
  border-radius: 18px;
  background: #9fc7d6;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}

.reference-identity-card__links {
  margin-top: 2px;
  padding-top: 16px;
  border-top: 1px solid rgba(18, 24, 28, 0.08);
}

.reference-identity-card__links strong {
  display: block;
  font-size: 18px;
  line-height: 1.08;
}

.reference-identity-card__link {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) 8px;
  gap: 12px;
  align-items: center;
  margin-top: 14px;
  text-decoration: none;
}

.reference-identity-card__link-icon {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(180deg, #f3e7ff, #dde7ff);
}

.reference-identity-card__link-icon::before {
  content: '';
  position: absolute;
  inset: 8px;
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
