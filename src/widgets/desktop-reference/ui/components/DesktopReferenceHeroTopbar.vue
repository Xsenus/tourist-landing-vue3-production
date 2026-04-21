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

    <ReferenceHeroVisual
      class="desktop-reference-hero-build"
      data-design-element="desktop-hero-visual"
      :breakpoint="'desktop'"
      :content="heroSectionContent"
      :layout="referenceHeroVisualConfig.desktop"
    />
  </div>
</template>

<script setup lang="ts">
import { heroSectionContent } from '@/pages/landing/model/landing-content';
import { referenceHeroVisualConfig } from '@/pages/landing/model/reference-content';
import ReferenceHeroVisual from '@/entities/hero/ui/ReferenceHeroVisual.vue';
</script>

<style scoped>
.desktop-reference-hero-build {
  position: absolute;
  right: 260px;
  top: 82px;
}
</style>
