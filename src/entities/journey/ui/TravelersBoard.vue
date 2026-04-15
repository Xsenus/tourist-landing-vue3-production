<template>
  <div class="travelers-board" data-animate="travelers-board">
    <AvatarStack :items="travelers.avatars" :size="34" :overlap="8" compact />
    <div class="travelers-board__copy">
      <strong>{{ travelers.title }}</strong>
      <small>{{ travelers.copy }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarStack from '@/shared/ui/AvatarStack.vue';
import type { JourneyTravelerContent } from '@/pages/landing/model/landing.types';

defineProps<{
  travelers: JourneyTravelerContent;
}>();
</script>
