<template>
  <div class="friends-strip" data-animate="friends-strip">
    <AvatarStack :items="avatars" :size="34" :overlap="8" compact />
    <span class="friends-strip__text">{{ copy }}</span>
  </div>
</template>

<script setup lang="ts">
import AvatarStack from '@/shared/ui/AvatarStack.vue';
import type { AvatarItem } from '@/pages/landing/model/landing.types';

defineProps<{
  avatars: AvatarItem[];
  copy: string;
}>();
</script>
