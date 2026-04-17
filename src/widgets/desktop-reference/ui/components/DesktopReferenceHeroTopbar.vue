<template>
  <div class="frame" data-design-element="desktop-hero-topbar" data-figma-node="21:165">
    <div class="frame-1">
      <a class="frame-2" href="#identity" data-design-element="desktop-login-link"><span class="log-in">Log in</span></a>
      <a class="frame-3" href="#deals" data-design-element="desktop-signup-link"><span class="sign-up">Sign up</span></a>
    </div>

    <button
      class="desktop-language-trigger"
      type="button"
      aria-label="Change language"
      data-design-element="desktop-language-switch"
    >
      <span class="en">EN</span>
      <span class="chevron-down"></span>
    </button>

    <div class="group desktop-reference-hero-build hero__visual-build" data-design-element="desktop-hero-visual">
      <div class="phone-mockup hero__phone hero__phone--back" aria-hidden="true">
        <div class="phone-mockup__screen phone-mockup__screen--map">
          <img class="phone-mockup__ghost-art" :src="heroSectionContent.backPhoneImage" alt="" />
        </div>
        <img class="phone-mockup__frame" :src="heroSectionContent.phoneFrame" alt="" />
      </div>

      <div class="phone-mockup hero__phone hero__phone--front">
        <div class="phone-mockup__screen">
          <HeroPhoneUi :screen="heroSectionContent.phoneUi" />
        </div>
        <img class="phone-mockup__frame" :src="heroSectionContent.phoneFrame" alt="" aria-hidden="true" />
      </div>

      <HeroMemberCard :card="heroSectionContent.card" />

      <HeroInfoBadge
        v-for="(badge, badgeIndex) in heroSectionContent.badges"
        :key="badge.title"
        :badge="badge"
        :modifier="badgeIndex === 0 ? 'top' : 'bottom'"
      />

      <p class="hero__scribble desktop-reference-hero-build__scribble">{{ heroSectionContent.note }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { heroSectionContent } from '@/pages/landing/model/landing-content';
import HeroInfoBadge from '@/entities/hero/ui/HeroInfoBadge.vue';
import HeroMemberCard from '@/entities/hero/ui/HeroMemberCard.vue';
import HeroPhoneUi from '@/entities/hero/ui/HeroPhoneUi.vue';
</script>

<style scoped>
.desktop-reference-hero-build {
  background: none !important;
  overflow: visible;
  isolation: isolate;
}

.desktop-reference-hero-build__scribble {
  right: -6px;
  bottom: -26px;
  width: 166px;
  font-size: 22px;
}

.desktop-reference-hero-build__scribble::after {
  content: '';
  position: absolute;
  left: -46px;
  top: -6px;
  width: 42px;
  height: 22px;
  border-bottom: 3px solid #1c110a;
  border-left: 3px solid #1c110a;
  border-radius: 0 0 0 18px;
  transform: rotate(-28deg);
}

.desktop-reference-hero-build :deep(.hero__phone--back) {
  left: 17%;
  top: 55.5%;
  width: min(29%, 214px);
}

.desktop-reference-hero-build :deep(.hero__phone--front) {
  left: 46.2%;
  top: 54.2%;
  width: min(40.5%, 302px);
}

.desktop-reference-hero-build :deep(.tourist-card) {
  right: 1.2%;
  top: 7.8%;
  width: min(33.5%, 246px);
}

.desktop-reference-hero-build :deep(.hero-badge--top) {
  top: 37.8%;
  right: -18px;
}

.desktop-reference-hero-build :deep(.hero-badge--bottom) {
  top: 54.8%;
  right: -6px;
}
</style>
