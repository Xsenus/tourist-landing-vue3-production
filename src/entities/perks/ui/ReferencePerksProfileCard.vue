<template>
  <article class="reference-perks-profile-card" :class="`reference-perks-profile-card--${variant}`" :style="cardStyle" data-design-element="reference-perks-profile-card">
    <div class="reference-perks-profile-card__topbar">
      <div class="reference-perks-profile-card__brand">
        <div class="reference-perks-profile-card__brand-mark">T</div>
        <span class="reference-perks-profile-card__brand-text">{{ profile.url }}</span>
      </div>
      <span class="reference-perks-profile-card__member-badge">{{ profile.member }}</span>
    </div>

    <div class="reference-perks-profile-card__hero">
      <img :alt="`${profile.name} avatar`" class="reference-perks-profile-card__avatar" :src="profile.avatar" />
      <span class="reference-perks-profile-card__name">{{ profile.name }}</span>
      <span class="reference-perks-profile-card__meta">{{ profile.role }}</span>
    </div>

    <div class="reference-perks-profile-card__stats">
      <div
        v-for="stat in profile.stats"
        :key="stat.label"
        class="reference-perks-profile-card__stat"
      >
        <span class="reference-perks-profile-card__stat-value">{{ stat.value }}</span>
        <span class="reference-perks-profile-card__stat-label">{{ stat.label }}</span>
      </div>
    </div>

    <div class="reference-perks-profile-card__gallery">
      <div
        v-for="thumb in profile.thumbs"
        :key="thumb.image"
        class="reference-perks-profile-card__gallery-item"
      >
        <img :alt="thumb.label" class="reference-perks-profile-card__gallery-image" :src="thumb.image" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { PerksProfileContent } from '@/pages/landing/model/landing.types';
import { referencePerksCardConfig } from '@/pages/landing/model/reference-content';

const props = withDefaults(
  defineProps<{
  profile: PerksProfileContent;
  variant?: 'desktop' | 'tablet' | 'mobile';
}>(),
  {
    variant: 'desktop'
  }
);

const cardStyle = computed(() => {
  const config = referencePerksCardConfig[props.variant];

  return {
    '--reference-perks-padding': config.padding,
    '--reference-perks-radius': config.radius,
    '--reference-perks-border-width': config.borderWidth,
    '--reference-perks-avatar-size': config.avatarSize,
    '--reference-perks-name-size': config.nameSize,
    '--reference-perks-meta-size': config.metaSize,
    '--reference-perks-gallery-height': config.galleryHeight,
    '--reference-perks-stat-value-size': config.statValueSize,
    '--reference-perks-stat-label-size': config.statLabelSize,
    '--reference-perks-topbar-padding': config.topbarPadding
  };
});
</script>

<style scoped>
.reference-perks-profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: var(--reference-perks-padding);
  background: linear-gradient(180deg, #fefaf7 0%, #fcf7f3 100%);
  border: var(--reference-perks-border-width) solid #ffffff;
  border-radius: var(--reference-perks-radius);
  box-shadow: 0 12px 24px 0 rgba(72, 72, 72, 0.08);
}

.reference-perks-profile-card__topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--reference-perks-topbar-padding);
}

.reference-perks-profile-card__brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.reference-perks-profile-card__brand-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  color: #ffffff;
  font-family: Heebo, sans-serif;
  font-size: 23px;
  font-weight: 700;
  line-height: 1;
  background: #25b877;
  border-radius: 8px;
}

.reference-perks-profile-card__brand-text {
  color: #12181c;
  font-family: Heebo, sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.reference-perks-profile-card__member-badge {
  min-height: 28px;
  padding: 0 14px;
  color: #62c098;
  font-family: Heebo, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 28px;
  background: #ddf3e8;
  border-radius: 999px;
}

.reference-perks-profile-card__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 16px;
}

.reference-perks-profile-card__avatar {
  width: var(--reference-perks-avatar-size);
  height: var(--reference-perks-avatar-size);
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  box-shadow: 0 6px 18px 0 rgba(99, 78, 53, 0.16);
}

.reference-perks-profile-card__name {
  margin-top: 14px;
  color: #12181c;
  font-family: Heebo, sans-serif;
  font-size: var(--reference-perks-name-size);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.03em;
  text-align: center;
  white-space: nowrap;
}

.reference-perks-profile-card__meta {
  margin-top: 8px;
  color: #53565c;
  font-family: Heebo, sans-serif;
  font-size: var(--reference-perks-meta-size);
  font-weight: 500;
  line-height: 1.15;
  text-align: center;
  white-space: nowrap;
}

.reference-perks-profile-card__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  margin-top: 24px;
  padding: 0 10px;
}

.reference-perks-profile-card__stat {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.reference-perks-profile-card__stat:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 6px;
  right: -1px;
  width: 1px;
  height: 41px;
  background: #e5ddd4;
}

.reference-perks-profile-card__stat-value {
  color: #12181c;
  font-family: Heebo, sans-serif;
  font-size: var(--reference-perks-stat-value-size);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.reference-perks-profile-card__stat-label {
  color: #2e3740;
  font-family: Heebo, sans-serif;
  font-size: var(--reference-perks-stat-label-size);
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
}

.reference-perks-profile-card__gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
  width: 100%;
  margin-top: 18px;
}

.reference-perks-profile-card__gallery-item {
  height: var(--reference-perks-gallery-height);
  overflow: hidden;
  border-radius: 16px;
  background: #e8dccf;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
}

.reference-perks-profile-card__gallery-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
