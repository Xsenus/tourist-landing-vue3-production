<template>
  <div class="frame-49 desktop-card-preview-card" data-design-element="desktop-card-preview">
    <div class="desktop-card-preview__topbar" data-design-element="desktop-card-preview-topbar">
      <div class="desktop-card-preview__brand" data-design-element="desktop-card-preview-brand">
        <div class="desktop-card-preview__brand-mark">T</div>
        <span class="desktop-card-preview__brand-text">tourist.com/Alex</span>
      </div>
      <span class="desktop-card-preview__member-badge" data-design-element="desktop-card-preview-member-badge">MEMBER</span>
    </div>

    <div class="desktop-card-preview__hero" data-design-element="desktop-card-preview-hero">
      <img alt="Alex Explorer avatar" class="desktop-card-preview__avatar" :src="avatarAlex" />
      <span class="desktop-card-preview__name">Alex Explorer</span>
      <span class="desktop-card-preview__meta">Traveler • 47 countries</span>
    </div>

    <div class="desktop-card-preview__stats" data-design-element="desktop-card-preview-stats">
      <DesktopReferenceCardStatItem
        v-for="stat in stats"
        :key="stat.label"
        :design-element="stat.designElement"
        :label="stat.label"
        :value="stat.value"
      />
    </div>

    <div class="desktop-card-preview__gallery" data-design-element="desktop-card-preview-gallery">
      <DesktopReferenceCardGalleryItem
        v-for="item in gallery"
        :key="item.designElement"
        :alt="item.alt"
        :design-element="item.designElement"
        :src="item.src"
      />
    </div>
  </div>
  <div class="union" data-design-element="desktop-card-preview-accent"></div>
</template>

<script setup lang="ts">
import avatarAlex from '@/shared/assets/images/avatar-alex.jpg';
import avatarCamila from '@/shared/assets/images/avatar-camila.jpg';
import avatarHero from '@/shared/assets/images/avatar-hero.jpg';
import avatarJonah from '@/shared/assets/images/avatar-jonah.jpg';
import DesktopReferenceCardGalleryItem from './DesktopReferenceCardGalleryItem.vue';
import DesktopReferenceCardStatItem from './DesktopReferenceCardStatItem.vue';

const stats = [
  {
    value: '34',
    label: 'Trips',
    designElement: 'desktop-card-preview-stat-trips'
  },
  {
    value: '56',
    label: 'Countries',
    designElement: 'desktop-card-preview-stat-countries'
  },
  {
    value: '1.2K',
    label: 'Cities',
    designElement: 'desktop-card-preview-stat-cities'
  }
];

const gallery = [
  {
    src: avatarCamila,
    alt: 'Travel gallery photo one',
    designElement: 'desktop-card-preview-gallery-item-1'
  },
  {
    src: avatarHero,
    alt: 'Travel gallery photo two',
    designElement: 'desktop-card-preview-gallery-item-2'
  },
  {
    src: avatarJonah,
    alt: 'Travel gallery photo three',
    designElement: 'desktop-card-preview-gallery-item-3'
  }
];
</script>
