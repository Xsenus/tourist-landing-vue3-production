<template>
  <div
    id="journey"
    class="rectangle-7c mobile-journey-section"
    data-design-element="mobile-journey-section"
    data-figma-node="58:1023"
  >
    <div class="frame-7d" data-design-element="mobile-journey-intro">
      <span class="your-journey-7e">YOUR JOURNEY</span>
      <div class="frame-7f">
        <div class="frame-80">
          <span class="see-everywhere">See everywhere</span><span class="youve-been">you've been</span>
        </div>
        <span class="pin-countries-cities">Pin the countries and cities you've visited. <br />Track your journey and inspire others.</span>
      </div>
    </div>
    <div class="frame-81" data-design-element="mobile-journey-tasks">
      <div class="frame-82">
        <div class="mingcute-earth-line"></div>
        <span class="mark-countries-visited">Mark countries you've visited</span>
      </div>
      <div class="frame-83">
        <div class="solar-buildings-outline"></div>
        <span class="add-favorite-cities">Add your favorite cities</span>
      </div>
      <div class="frame-84">
        <div class="glyphs-analytics-bold"></div>
        <span class="watch-map-grow">Watch your map grow</span>
      </div>
    </div>
    <div class="rectangle-85" data-design-element="mobile-journey-country-list">
      <div class="frame-86" data-design-element="mobile-journey-country-stack">
        <MobileReferenceCountryItem
          wrapper-class="group-87"
          group-class="group-88"
          frame-class="frame-89"
          country-class="germany"
          cities-class="berlin-hamburg-munich"
          flag-class="germany-de"
          stat-class="cities-8a"
          flag="de"
          country="Germany"
          count="8 CITIES"
          cities-html="Berlin, Hamburg, Munich, Cologne, <br />and 5 more"
        />
        <div class="rectangle-8b"></div>
        <MobileReferenceCountryItem
          wrapper-class="group-8c"
          group-class="group-8d"
          frame-class="frame-8e"
          country-class="italy"
          cities-class="rome-milan-venice"
          flag-class="italy-it"
          stat-class="cities-8f"
          flag="it"
          country="Italy"
          count="8 CITIES"
          cities-html="Rome, Milan, Venice, Florence, <br />and 3 more"
        />
        <div class="rectangle-90"></div>
        <MobileReferenceCountryItem
          wrapper-class="group-91"
          group-class="group-92"
          frame-class="frame-93"
          country-class="japan"
          cities-class="tokyo-kyoto-osaka"
          flag-class="japan-jp"
          stat-class="cities-94"
          flag="jp"
          country="Japan"
          count="8 CITIES"
          cities-html="Tokyo, Kyoto, Osaka, Nara"
        />
        <div class="rectangle-95"></div>
        <MobileReferenceCountryItem
          wrapper-class="group-96"
          group-class="group-97"
          frame-class="frame-98"
          country-class="united-states"
          cities-class="new-york-los-angeles"
          flag-class="united-states-of-america-us"
          stat-class="cities-99"
          flag="us"
          country="United States"
          count="8 CITIES"
          cities-html="New York, Los Angeles, Miami, <br />and 4 more"
        />
      </div>
      <a class="frame-9a" href="#top" data-design-element="mobile-journey-show-all">
        <span class="show-all-countries">Show all countries</span>
        <ArrowRightIcon class="arrow-9b" />
      </a>
    </div>
    <div class="rectangle-9c" data-design-element="mobile-journey-counts-card">
      <div class="frame-9d">
        <div class="frame-9e">
          <div class="group-9f">
            <div class="group-a0">
              <div class="famicons-earth-sharp"></div>
              <div class="rectangle-a1"></div>
            </div>
            <div class="frame-a2">
              <span class="text-59">32</span><span class="countries-a3">Countries</span>
            </div>
          </div>
        </div>
        <div class="frame-a4">
          <div class="group-a5">
            <div class="group-a6">
              <div class="solar-buildings-outline-a7"></div>
              <div class="rectangle-a8"></div>
            </div>
            <div class="frame-a9">
              <span class="text-5b">96</span><span class="cities-aa">Cities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-ab mobile-reference-journey__travelers" data-design-element="mobile-journey-travelers-card">
      <TravelersBoard :travelers="journeySectionContent.travelers" />
    </div>
    <div class="frame-b2" data-design-element="mobile-journey-map">
      <div class="empty"></div>
      <div class="ellipse-b3"></div>
      <div class="group-b4"></div>
      <div class="ellipse-b5"></div>
      <div class="group-b6" data-design-element="mobile-journey-pin-note">
        <div class="frame-b7">
          <div class="map-pin"></div>
          <div class="frame-b8">
            <span class="new-pin">New pin!</span><span class="barcelona-spain">Barcelona, Spain</span>
          </div>
        </div>
        <div class="rectangle-b9"></div>
      </div>
      <div class="ellipse-ba"></div>
      <div class="ellipse-bb"></div>
      <div class="ellipse-bc"></div>
      <div class="ellipse-bd"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { journeySectionContent } from '@/pages/landing/model/landing-content';
import TravelersBoard from '@/entities/journey/ui/TravelersBoard.vue';
import ArrowRightIcon from '@/shared/ui/ArrowRightIcon.vue';
import MobileReferenceCountryItem from './MobileReferenceCountryItem.vue';
</script>

<style scoped>
.mobile-reference-journey__travelers {
  padding: 0;
  background: transparent;
}

.mobile-reference-journey__travelers :deep(.travelers-board) {
  width: 100%;
  height: 100%;
  padding: 14px 16px;
  border-radius: 19px;
  background: #f5f6fa;
  box-shadow: none;
}

.mobile-reference-journey__travelers :deep(.travelers-board__copy strong) {
  font-size: 18px;
}

.mobile-reference-journey__travelers :deep(.travelers-board__copy small) {
  font-size: 13px;
  line-height: 1.38;
}
</style>
