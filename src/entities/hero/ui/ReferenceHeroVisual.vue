<template>
  <div class="reference-hero-visual" :class="`reference-hero-visual--${breakpoint}`" :style="canvasStyle">
    <div class="reference-hero-visual__layer reference-hero-visual__layer--back" :style="layerStyle(layout.backPhone)">
      <div class="reference-hero-visual__phone reference-hero-visual__phone--back">
        <div class="reference-hero-visual__phone-screen reference-hero-visual__phone-screen--map">
          <img class="reference-hero-visual__map-art" :src="content.backPhoneImage" alt="" />
        </div>
        <img class="reference-hero-visual__phone-frame" :src="content.phoneFrame" alt="" />
      </div>
    </div>

    <div class="reference-hero-visual__layer reference-hero-visual__layer--front" :style="layerStyle(layout.frontPhone)">
      <div class="reference-hero-visual__phone reference-hero-visual__phone--front">
        <div class="reference-hero-visual__phone-screen">
          <HeroPhoneUi :screen="content.phoneUi" />
        </div>
        <img class="reference-hero-visual__phone-frame" :src="content.phoneFrame" alt="" />
      </div>
    </div>

    <ReferenceHeroMemberCard :card="content.card" :style="layerStyle(layout.card)" />

    <ReferenceHeroBadge
      class="reference-hero-visual__badge"
      :badge="content.badges[0]"
      :style="layerStyle(layout.badges.top)"
    />
    <ReferenceHeroBadge
      class="reference-hero-visual__badge"
      :badge="content.badges[1]"
      :style="layerStyle(layout.badges.bottom)"
    />

    <p class="reference-hero-visual__scribble" :style="scribbleStyle">{{ content.note }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { HeroSectionContent } from '@/pages/landing/model/landing.types';
import type { ReferenceBreakpoint, ReferenceHeroVisualConfig, ReferenceLayerLayout } from '@/pages/landing/model/reference.types';
import HeroPhoneUi from './HeroPhoneUi.vue';
import ReferenceHeroBadge from './ReferenceHeroBadge.vue';
import ReferenceHeroMemberCard from './ReferenceHeroMemberCard.vue';

const props = defineProps<{
  content: HeroSectionContent;
  layout: ReferenceHeroVisualConfig;
  breakpoint: ReferenceBreakpoint;
}>();

const canvasStyle = computed(() => ({
  width: props.layout.width,
  height: props.layout.height
}));

const scribbleStyle = computed(() => ({
  right: props.layout.scribble.right,
  bottom: props.layout.scribble.bottom,
  width: props.layout.scribble.width,
  fontSize: props.layout.scribble.fontSize
}));

const layerStyle = (layer: ReferenceLayerLayout) => ({
  top: layer.top,
  left: layer.left,
  right: layer.right,
  bottom: layer.bottom,
  width: layer.width,
  zIndex: layer.zIndex,
  transform: [layer.rotate ? `rotate(${layer.rotate})` : '', layer.scale ? `scale(${layer.scale})` : '']
    .filter(Boolean)
    .join(' ')
});
</script>

<style scoped>
.reference-hero-visual {
  position: relative;
  isolation: isolate;
}

.reference-hero-visual__layer,
.reference-hero-visual__badge,
.reference-tourist-card {
  position: absolute;
}

.reference-hero-visual__phone {
  position: relative;
  filter: drop-shadow(0 28px 40px rgba(41, 74, 126, 0.16));
}

.reference-hero-visual__phone-screen {
  position: absolute;
  inset: 3.4% 4.1%;
  overflow: hidden;
  border-radius: 36px;
  background: #ffffff;
}

.reference-hero-visual__phone-screen::before {
  content: none;
}

.reference-hero-visual__phone--front .reference-hero-visual__phone-screen::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  width: 78px;
  height: 20px;
  border-radius: 999px;
  background: #05070a;
  transform: translateX(-50%);
  z-index: 3;
}

.reference-hero-visual__phone-screen--map {
  border-radius: 30px;
  background: linear-gradient(180deg, #f9fbff 0%, #eef5fb 100%);
}

.reference-hero-visual__phone-frame,
.reference-hero-visual__map-art {
  display: block;
  width: 100%;
}

.reference-hero-visual__map-art {
  height: 100%;
  object-fit: cover;
}

.reference-hero-visual__badge {
  position: absolute;
  transform-origin: top left;
}

.reference-hero-visual__scribble {
  position: absolute;
  margin: 0;
  color: #12181c;
  font-family: 'Comic Sans MS', 'Trebuchet MS', cursive;
  font-weight: 700;
  line-height: 0.98;
  white-space: pre-line;
  transform: rotate(-8deg);
  transform-origin: left top;
}

.reference-hero-visual__scribble::before {
  content: '';
  position: absolute;
  left: -34px;
  top: 12px;
  width: 34px;
  height: 54px;
  border-left: 4px solid #12181c;
  border-bottom: 4px solid #12181c;
  border-radius: 0 0 0 30px;
  transform: rotate(48deg);
}

.reference-hero-visual :deep(.phone-ui) {
  padding: 11px 11px 13px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
}

.reference-hero-visual :deep(.phone-ui__status) {
  font-size: 12px;
  font-weight: 800;
}

.reference-hero-visual :deep(.phone-ui__status-icons span) {
  width: 8px;
  height: 8px;
  background: #dde5ed;
}

.reference-hero-visual :deep(.phone-ui__appbar) {
  margin-top: 9px;
}

.reference-hero-visual :deep(.phone-ui__brand) {
  gap: 10px;
}

.reference-hero-visual :deep(.phone-ui__brand strong) {
  font-size: 16px;
  font-weight: 800;
}

.reference-hero-visual :deep(.phone-ui__brand-mark) {
  width: 28px;
  height: 28px;
  border-radius: 9px;
  font-size: 18px;
}

.reference-hero-visual :deep(.phone-ui__location) {
  min-height: 34px;
  padding: 0 12px;
  font-size: 11px;
}

.reference-hero-visual :deep(.phone-ui__feature) {
  margin-top: 14px;
  min-height: 181px;
  border-radius: 23px;
}

.reference-hero-visual :deep(.phone-ui__feature img) {
  height: 181px;
}

.reference-hero-visual :deep(.phone-ui__feature-copy) {
  left: 14px;
  right: 66px;
  bottom: 17px;
}

.reference-hero-visual :deep(.phone-ui__feature-copy small) {
  font-size: 11px;
  line-height: 1.1;
}

.reference-hero-visual :deep(.phone-ui__feature-copy span) {
  font-size: 10px;
}

.reference-hero-visual :deep(.phone-ui__feature-copy strong) {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.18;
}

.reference-hero-visual :deep(.phone-ui__feature-badge) {
  top: 14px;
  right: 14px;
  min-height: 36px;
  border-radius: 11px;
  font-size: 10px;
}

.reference-hero-visual :deep(.phone-ui__section-head strong) {
  font-size: 18px;
}

.reference-hero-visual :deep(.phone-ui__section-head small) {
  font-size: 11px;
}

.reference-hero-visual :deep(.phone-ui__tiles) {
  gap: 8px;
  margin-top: 10px;
}

.reference-hero-visual :deep(.phone-ui__tile) {
  min-height: 130px;
  border-radius: 16px;
}

.reference-hero-visual :deep(.phone-ui__tile-copy) {
  inset: auto 10px 8px 10px;
}

.reference-hero-visual :deep(.phone-ui__tile-copy strong) {
  font-size: 12px;
  line-height: 1.08;
}

.reference-hero-visual :deep(.phone-ui__tile-copy span) {
  margin-top: 18px;
  font-size: 9px;
  color: rgba(255, 255, 255, 0.86);
}

.reference-hero-visual :deep(.phone-ui__nav) {
  margin-top: auto;
  padding-top: 12px;
}

.reference-hero-visual--mobile :deep(.phone-ui) {
  padding: 7px 7px 9px;
}

.reference-hero-visual--mobile .reference-hero-visual__phone--front .reference-hero-visual__phone-screen::before {
  top: 5px;
  width: 36px;
  height: 10px;
}

.reference-hero-visual--mobile :deep(.phone-ui__brand strong) {
  font-size: 11px;
}

.reference-hero-visual--mobile :deep(.phone-ui__brand-mark) {
  width: 19px;
  height: 19px;
  border-radius: 6px;
  font-size: 12px;
}

.reference-hero-visual--mobile :deep(.phone-ui__location) {
  min-height: 22px;
  padding: 0 8px;
  font-size: 8px;
}

.reference-hero-visual--mobile :deep(.phone-ui__feature) {
  min-height: 92px;
  margin-top: 8px;
  border-radius: 12px;
}

.reference-hero-visual--mobile :deep(.phone-ui__feature img) {
  height: 92px;
}

.reference-hero-visual--mobile :deep(.phone-ui__feature-copy) {
  left: 8px;
  right: 44px;
  bottom: 8px;
}

.reference-hero-visual--mobile :deep(.phone-ui__feature-copy small),
.reference-hero-visual--mobile :deep(.phone-ui__feature-copy span) {
  font-size: 7px;
}

.reference-hero-visual--mobile :deep(.phone-ui__feature-copy strong) {
  margin-top: 4px;
  font-size: 8px;
}

.reference-hero-visual--mobile :deep(.phone-ui__feature-badge) {
  min-height: 20px;
  padding: 0 6px;
  border-radius: 7px;
  font-size: 6px;
}

.reference-hero-visual--mobile :deep(.phone-ui__section-head) {
  gap: 2px;
  margin-top: 8px;
}

.reference-hero-visual--mobile :deep(.phone-ui__section-head strong) {
  font-size: 9px;
}

.reference-hero-visual--mobile :deep(.phone-ui__section-head small) {
  font-size: 7px;
}

.reference-hero-visual--mobile :deep(.phone-ui__tiles) {
  gap: 4px;
  margin-top: 6px;
}

.reference-hero-visual--mobile :deep(.phone-ui__tile) {
  min-height: 54px;
  border-radius: 8px;
}

.reference-hero-visual--mobile :deep(.phone-ui__tile-copy) {
  inset: auto 5px 4px;
}

.reference-hero-visual--mobile :deep(.phone-ui__tile-copy strong) {
  font-size: 6px;
}

.reference-hero-visual--mobile :deep(.phone-ui__tile-copy span) {
  margin-top: 8px;
  font-size: 5px;
}

.reference-hero-visual--mobile :deep(.phone-ui__nav) {
  padding-top: 8px;
}

.reference-hero-visual--mobile :deep(.phone-ui__nav-item small) {
  font-size: 6px;
}

.reference-hero-visual--mobile :deep(.reference-hero-badge) {
  gap: 9px;
  padding: 11px 12px;
  border-radius: 15px;
}

.reference-hero-visual--mobile :deep(.reference-hero-badge__icon) {
  width: 28px;
  height: 28px;
}

.reference-hero-visual--mobile :deep(.reference-hero-badge__copy strong) {
  font-size: 9px;
}

.reference-hero-visual--mobile :deep(.reference-hero-badge__copy small) {
  font-size: 8px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card) {
  padding: 10px 10px 11px;
  border-width: 3px;
  border-radius: 18px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__label) {
  font-size: 6px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__avatar-shell) {
  width: 60px;
  height: 60px;
  margin-top: 8px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__avatar) {
  width: 48px;
  height: 48px;
  margin: 6px 0 0 6px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__identity) {
  margin-top: 4px;
  padding-left: 2px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__name) {
  font-size: 12px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__handle) {
  margin-top: 2px;
  font-size: 8px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__qr) {
  width: 54px;
  height: 54px;
  margin-top: 8px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__qr-box) {
  width: 13px;
  height: 13px;
  border-width: 3px;
  border-radius: 4px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__qr-box--tl),
.reference-hero-visual--mobile :deep(.reference-tourist-card__qr-box--tr) {
  top: 4px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__qr-box--tl),
.reference-hero-visual--mobile :deep(.reference-tourist-card__qr-box--bl) {
  left: 4px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__qr-box--tr) {
  right: 4px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__qr-box--bl) {
  bottom: 4px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__qr-noise) {
  inset: 10px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__footer) {
  padding-top: 10px;
  font-size: 6px;
}

.reference-hero-visual--mobile :deep(.reference-tourist-card__footer strong) {
  font-size: 12px;
}
</style>
