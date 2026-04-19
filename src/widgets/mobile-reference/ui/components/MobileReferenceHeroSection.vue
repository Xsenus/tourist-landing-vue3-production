<template>
  <div id="hero" class="mobile-hero-section" data-design-element="mobile-hero-section">
    <div class="frame-bf" data-design-element="mobile-hero-copy">
      <div class="frame-c0">
        <div class="star-c1"></div>
        <span class="future-of-travel">THE FUTURE OF TRAVEL</span>
      </div>
      <div class="frame-c2" data-design-element="mobile-hero-headline">
        <div class="group-c3">
          <div class="flex-row-bcd">
            <div class="vector-c4"></div>
            <div class="frame-c5">
              <span class="travel-better">Travel better.</span>
              <div class="save-more-c6">
                <span class="save-c7">Save</span><span class="space"> </span><span class="more-c8">more.</span>
              </div>
            </div>
          </div>
          <div class="vector-c9"></div>
        </div>
        <span class="exclusive-deals">
          Exclusive deals from local businesses. <br />No middlemen. Just real connections <br />and unforgettable experiences.
        </span>
      </div>
    </div>
    <MobileReferenceHeroActions />
    <div class="frame-cb" data-design-element="mobile-hero-proof">
      <div class="frame-cc">
        <span class="travelers">20,000+ travelers</span><span class="exploring">already exploring</span>
      </div>
      <div class="frame-cd" data-design-element="mobile-hero-proof-stars">
        <div class="star-ce"></div>
        <div class="star-cf"></div>
        <div class="star-d0"></div>
        <div class="star-d1"></div>
        <div class="star-d2"></div>
      </div>
    </div>
    <div class="frame-d3 mobile-reference-hero__avatars" data-design-element="mobile-hero-social-strip">
      <AvatarStack :items="socialProofContent.avatars" :size="36" :overlap="10" />
    </div>
    <div class="frame-d4" data-design-element="mobile-hero-visual">
      <ReferenceHeroVisual
        class="mobile-reference-hero__visual"
        :breakpoint="'mobile'"
        :content="heroSectionContent"
        :layout="referenceHeroVisualConfig.mobile"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { heroSectionContent, socialProofContent } from '@/pages/landing/model/landing-content';
import { referenceHeroVisualConfig } from '@/pages/landing/model/reference-content';
import ReferenceHeroVisual from '@/entities/hero/ui/ReferenceHeroVisual.vue';
import AvatarStack from '@/shared/ui/AvatarStack.vue';
import MobileReferenceHeroActions from './MobileReferenceHeroActions.vue';
</script>

<style scoped>
.mobile-reference-hero__avatars {
  display: flex;
  align-items: center;
  background: none;
}

.mobile-reference-hero__visual {
  position: absolute;
  left: 18px;
  top: 0;
}

.frame-d4 {
  overflow: visible;
}
</style>
