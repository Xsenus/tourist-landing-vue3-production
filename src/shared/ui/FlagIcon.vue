<template>
  <span class="flag-icon" :class="[`flag-icon--${country}`, className]">
    <template v-if="country === 'de'">
      <span class="flag-icon__stripe flag-icon__stripe--black"></span>
      <span class="flag-icon__stripe flag-icon__stripe--red"></span>
      <span class="flag-icon__stripe flag-icon__stripe--yellow"></span>
    </template>

    <template v-else-if="country === 'it'">
      <span class="flag-icon__stripe flag-icon__stripe--green"></span>
      <span class="flag-icon__stripe flag-icon__stripe--white"></span>
      <span class="flag-icon__stripe flag-icon__stripe--red-soft"></span>
    </template>

    <span v-else-if="country === 'jp'" class="flag-icon__field flag-icon__field--white">
      <span class="flag-icon__dot flag-icon__dot--jp"></span>
    </span>

    <span v-else class="flag-icon__field flag-icon__field--us">
      <span class="flag-icon__canton"></span>
    </span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  country: 'de' | 'it' | 'jp' | 'us';
  className?: string;
}>();
</script>

<style scoped>
.flag-icon {
  display: inline-flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: none !important;
  box-shadow: inset 0 0 0 1px rgba(18, 24, 28, 0.06);
}

.flag-icon__stripe,
.flag-icon__field {
  display: block;
  width: 100%;
  height: 100%;
}

.flag-icon--de {
  flex-direction: column;
}

.flag-icon__stripe--black {
  background: #101010;
}

.flag-icon__stripe--red {
  background: #da291c;
}

.flag-icon__stripe--yellow {
  background: #ffce00;
}

.flag-icon__stripe--green {
  background: #009246;
}

.flag-icon__stripe--white,
.flag-icon__field--white {
  background: #ffffff;
}

.flag-icon__stripe--red-soft {
  background: #ce2b37;
}

.flag-icon__field--white,
.flag-icon__field--us {
  position: relative;
}

.flag-icon__dot--jp {
  position: absolute;
  inset: 0;
  width: 54%;
  height: 54%;
  margin: auto;
  border-radius: 50%;
  background: #bc002d;
}

.flag-icon__field--us {
  background:
    repeating-linear-gradient(180deg, #b22234 0 10.4%, #ffffff 10.4% 20.8%);
}

.flag-icon__canton {
  position: absolute;
  top: 0;
  left: 0;
  width: 42%;
  height: 55%;
  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.92) 0 0.8px, transparent 1px) 0 0 / 5px 5px,
    #3c3b6e;
}
</style>
