<template>
  <div class="desktop-reference-hero-proof" data-design-element="desktop-hero-proof">
    <AvatarStack :items="socialProofContent.avatars" :overlap="13" :size="48" />

    <div class="hero__proof-copy">
      <div class="hero__proof-top">
        <span class="hero__proof-headline">{{ socialProofContent.headline }}</span>
        <span class="desktop-reference-hero-proof__stars" aria-label="5 star rating">
          <span v-for="star in 5" :key="star">&#9733;</span>
        </span>
      </div>
      <div class="hero__proof-subline">{{ socialProofContent.subline }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { socialProofContent } from '@/pages/landing/model/landing-content';
import AvatarStack from '@/shared/ui/AvatarStack.vue';
</script>

<style scoped>
.desktop-reference-hero-proof {
  position: absolute;
  left: 0;
  top: 592px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 26;
}

.desktop-reference-hero-proof__stars {
  display: inline-flex;
  gap: 4px;
  color: #f2af2c;
  font-size: 18px;
  line-height: 1;
}
</style>
