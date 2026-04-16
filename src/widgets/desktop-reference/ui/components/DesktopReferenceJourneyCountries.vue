<template>
  <div class="rectangle-93" data-design-element="desktop-journey-country-list">
    <a class="frame-94" href="#top" data-design-element="desktop-journey-show-all">
      <span class="show-all-countries">Show all countries</span>
      <ArrowRightIcon class="arrow-95" />
    </a>
    <div class="frame-96" data-design-element="desktop-journey-country-stack">
      <DesktopReferenceCountryItem
        wrapper-class="group-97"
        group-class="group-98"
        frame-class="frame-99"
        country-class="germany"
        cities-class="berlin-hamburg-munich"
        flag-class="germany-de"
        stat-class="cities-9a"
        country="Germany"
        cities-html="Berlin, Hamburg, Munich, <br />Cologne, and 5 more"
      />
      <div class="rectangle-9b"></div>
      <DesktopReferenceCountryItem
        wrapper-class="group-9c"
        group-class="group-9d"
        frame-class="frame-9e"
        country-class="italy"
        cities-class="rome-milan-venice"
        flag-class="italy-it"
        stat-class="cities-9f"
        country="Italy"
        cities-html="Rome, Milan, Venice, <br />Florence, and 3 more"
      />
      <div class="rectangle-a0"></div>
      <DesktopReferenceCountryItem
        wrapper-class="group-a1"
        group-class="group-a2"
        frame-class="frame-a3"
        country-class="japan"
        cities-class="tokyo-kyoto-osaka"
        flag-class="japan-jp"
        stat-class="cities-a4"
        country="Japan"
        cities-html="Tokyo, Kyoto, Osaka, <br />Nara"
      />
      <div class="rectangle-a5"></div>
      <DesktopReferenceCountryItem
        wrapper-class="group-a6"
        group-class="group-a7"
        frame-class="frame-a8"
        country-class="united-states"
        cities-class="new-york-los-angeles"
        flag-class="united-states-of-america-us"
        stat-class="cities-a9"
        country="United States"
        cities-html="New York, Los Angeles, <br />Miami, and 4 more"
      />
    </div>
    <div class="ellipse-aa"></div>
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from '@/shared/ui/ArrowRightIcon.vue';
import DesktopReferenceCountryItem from './DesktopReferenceCountryItem.vue';
</script>
