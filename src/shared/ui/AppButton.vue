<template>
  <!-- Native anchor keeps hash navigation simple and preserves direct section linking. -->
  <a :href="href" class="app-button" :class="`app-button--${variant}`">
    <span>{{ label }}</span>
    <span
      v-if="icon !== 'none'"
      class="app-button__icon"
      :class="`app-button__icon--${icon}`"
      aria-hidden="true"
    ></span>
  </a>
</template>

<script setup lang="ts">
import type { ButtonIcon, ButtonVariant } from '@/shared/model/ui';

withDefaults(
  defineProps<{
    label: string;
    href?: string;
    variant?: ButtonVariant;
    icon?: ButtonIcon;
  }>(),
  {
    href: '#',
    variant: 'primary',
    icon: 'arrow'
  }
);
</script>
