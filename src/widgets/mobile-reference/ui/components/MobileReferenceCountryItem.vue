<template>
  <div :class="wrapperClass" data-design-element="mobile-country-item" :data-country="country">
    <div :class="groupClass">
      <div :class="frameClass">
        <span :class="countryClass">{{ country }}</span>
        <span :class="citiesClass">
          <template v-for="(line, index) in cityLines" :key="`${country}-${index}`">
            {{ line }}<br v-if="index < cityLines.length - 1" />
          </template>
        </span>
      </div>
      <FlagIcon class="country-flag" :country="flag" />
    </div>
    <span :class="statClass">{{ count }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FlagIcon from '@/shared/ui/FlagIcon.vue';

const props = defineProps<{
  wrapperClass: string;
  groupClass: string;
  frameClass: string;
  countryClass: string;
  citiesClass: string;
  flagClass: string;
  statClass: string;
  flag: 'de' | 'it' | 'jp' | 'us';
  country: string;
  citiesHtml: string;
  count?: string;
}>();

const cityLines = computed(() => props.citiesHtml.split(/<br\s*\/?>/i).map((line) => line.trim()));
</script>

<style scoped>
.country-flag {
  position: absolute;
  top: 8px;
  left: 0;
  width: 33px;
  height: 25px;
  border-radius: 3px;
}
</style>
