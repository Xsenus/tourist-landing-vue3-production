<template>
  <div
    class="avatar-stack"
    :class="{ 'avatar-stack--compact': compact }"
    :style="stackStyle"
    data-animate="avatar-stack"
  >
    <img
      v-for="(person, index) in items"
      :key="`${person.name}-${index}`"
      class="avatar-stack__item"
      :src="person.image"
      :alt="person.name"
      :style="{ zIndex: items.length - index }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { AvatarItem } from '@/pages/landing/model/landing.types';

const props = withDefaults(
  defineProps<{
    items?: AvatarItem[];
    size?: number;
    overlap?: number;
    compact?: boolean;
  }>(),
  {
    items: () => [],
    size: 42,
    overlap: 10,
    compact: false
  }
);

const stackStyle = computed(() => ({
  '--avatar-size': `${props.size}px`,
  '--avatar-overlap': `${props.overlap}px`
}));
</script>
