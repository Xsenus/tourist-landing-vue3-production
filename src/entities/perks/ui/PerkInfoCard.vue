<template>
  <article class="info-card" data-animate="perks-info-card">
    <div class="info-card__icon" :class="`info-card__icon--${icon}`"></div>
    <div class="info-card__copy">
      <strong>{{ title }}</strong>
      <small>{{ copy }}</small>
    </div>

    <div v-if="chips.length" class="chip-row">
      <span v-for="item in chips" :key="item" class="chip-row__chip" data-animate="chip-row-chip">{{ item }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    copy: string;
    icon: 'shield' | 'gift';
    chips?: string[];
  }>(),
  {
    chips: () => []
  }
);
</script>
