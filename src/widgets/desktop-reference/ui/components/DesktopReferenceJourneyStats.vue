<template>
  <div class="rectangle-b2" data-design-element="desktop-journey-counts-card">
    <div class="frame-b3">
      <div class="group-b4">
        <div class="group-b5">
          <div class="famicons-earth-sharp"></div>
          <div class="rectangle-b6"></div>
        </div>
        <div class="frame-b7">
          <span class="text-6f">32</span>
          <span class="countries-b8">Countries</span>
        </div>
      </div>
      <div class="group-b9">
        <div class="group-ba">
          <div class="solar-buildings-outline-bb"></div>
          <div class="rectangle-bc"></div>
        </div>
        <div class="frame-bd">
          <span class="text-71">96</span>
          <span class="cities-be">Cities</span>
        </div>
      </div>
    </div>
  </div>
  <div class="rectangle-bf desktop-reference-journey-stats__travelers" data-design-element="desktop-journey-travelers-card">
    <TravelersBoard :travelers="journeySectionContent.travelers" />
  </div>
</template>

<script setup lang="ts">
import { journeySectionContent } from '@/pages/landing/model/landing-content';
import TravelersBoard from '@/entities/journey/ui/TravelersBoard.vue';
</script>

<style scoped>
.desktop-reference-journey-stats__travelers {
  padding: 0;
  background: transparent;
  box-shadow: none;
}

.desktop-reference-journey-stats__travelers :deep(.travelers-board) {
  width: 100%;
  height: 100%;
  padding: 18px 22px;
  border-radius: 19px;
  background: #f5f6fa;
  box-shadow: none;
}

.desktop-reference-journey-stats__travelers :deep(.travelers-board__copy strong) {
  font-size: 22px;
}

.desktop-reference-journey-stats__travelers :deep(.travelers-board__copy small) {
  margin-top: 7px;
  font-size: 16px;
  line-height: 1.42;
}
</style>
