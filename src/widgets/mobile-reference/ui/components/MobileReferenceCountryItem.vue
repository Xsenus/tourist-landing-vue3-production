<template>
  <div :class="wrapperClass" data-design-element="mobile-country-item">
    <div :class="groupClass">
      <div :class="frameClass">
        <span :class="countryClass">{{ country }}</span><span :class="citiesClass" v-html="citiesHtml"></span>
      </div>
      <div :class="flagClass"></div>
    </div>
    <span :class="statClass">8 CITIES</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  wrapperClass: string;
  groupClass: string;
  frameClass: string;
  countryClass: string;
  citiesClass: string;
  flagClass: string;
  statClass: string;
  country: string;
  citiesHtml: string;
}>();
</script>
