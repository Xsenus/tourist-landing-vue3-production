<template>
  <div class="landing-desktop-canvas">
    <main id="main-content" class="landing-desktop-canvas__frame">
      <img
        class="landing-desktop-canvas__image"
        :src="desktopImage"
        alt="Tourist landing page desktop reference"
        fetchpriority="high"
      />

      <span id="top" class="landing-desktop-canvas__anchor" style="top: 0%"></span>
      <span id="deals" class="landing-desktop-canvas__anchor" style="top: 1500px"></span>
      <span id="card" class="landing-desktop-canvas__anchor" style="top: 2361px"></span>
      <span id="perks" class="landing-desktop-canvas__anchor" style="top: 2361px"></span>
      <span id="book" class="landing-desktop-canvas__anchor" style="top: 3463px"></span>
      <span id="identity" class="landing-desktop-canvas__anchor" style="top: 4271px"></span>
      <span id="journey" class="landing-desktop-canvas__anchor" style="top: 5698px"></span>

      <a
        v-for="hotspot in hotspots"
        :key="hotspot.id"
        class="landing-desktop-canvas__hotspot"
        :href="hotspot.href"
        :style="hotspot.style"
      >
        <span class="sr-only">{{ hotspot.label }}</span>
      </a>
    </main>
  </div>
</template>

<script setup lang="ts">
import desktopImage from '@/shared/assets/images/landing-desktop-full.png';

type DesktopHotspot = {
  id: string;
  href: string;
  label: string;
  style: Record<string, string>;
};

const hotspots: DesktopHotspot[] = [
  {
    id: 'brand',
    href: '#top',
    label: 'Tourist',
    style: { left: '0px', top: '20px', width: '150px', height: '52px' }
  },
  {
    id: 'nav-explore',
    href: '#deals',
    label: 'Explore',
    style: { left: '341px', top: '24px', width: '92px', height: '44px' }
  },
  {
    id: 'nav-deals',
    href: '#deals',
    label: 'Deals',
    style: { left: '450px', top: '24px', width: '86px', height: '44px' }
  },
  {
    id: 'nav-business',
    href: '#book',
    label: 'For Businesses',
    style: { left: '556px', top: '24px', width: '204px', height: '44px' }
  },
  {
    id: 'nav-about',
    href: '#identity',
    label: 'About',
    style: { left: '780px', top: '24px', width: '96px', height: '44px' }
  },
  {
    id: 'nav-support',
    href: '#journey',
    label: 'Support',
    style: { left: '903px', top: '24px', width: '108px', height: '44px' }
  },
  {
    id: 'header-login',
    href: '#identity',
    label: 'Log in',
    style: { left: '1062px', top: '22px', width: '102px', height: '52px' }
  },
  {
    id: 'header-signup',
    href: '#deals',
    label: 'Sign up',
    style: { left: '1185px', top: '22px', width: '116px', height: '52px' }
  },
  {
    id: 'hero-primary',
    href: '#deals',
    label: 'Join Tourist for Free',
    style: { left: '0px', top: '695px', width: '338px', height: '72px' }
  },
  {
    id: 'hero-secondary',
    href: '#deals',
    label: 'See deals',
    style: { left: '372px', top: '695px', width: '219px', height: '72px' }
  },
  {
    id: 'deals-link',
    href: '#book',
    label: 'See how it works',
    style: { left: '58px', top: '1436px', width: '286px', height: '56px' }
  },
  {
    id: 'perks-link',
    href: '#identity',
    label: 'Get your free card',
    style: { left: '58px', top: '2470px', width: '332px', height: '64px' }
  },
  {
    id: 'booking-link',
    href: '#journey',
    label: 'See how it works',
    style: { left: '59px', top: '3359px', width: '278px', height: '57px' }
  },
  {
    id: 'identity-link',
    href: '#journey',
    label: 'Create Your Profile',
    style: { left: '55px', top: '4790px', width: '324px', height: '75px' }
  },
  {
    id: 'journey-link',
    href: '#top',
    label: 'Show all countries',
    style: { left: '1035px', top: '7302px', width: '357px', height: '69px' }
  }
];
</script>
