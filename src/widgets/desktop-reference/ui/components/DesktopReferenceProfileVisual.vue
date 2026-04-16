<template>
  <div class="flex-column-cce" data-design-element="desktop-profile-visual">
    <div class="group-72"></div>
    <div class="star-73"></div>
    <div class="desktop-profile-visual-stack" data-design-element="desktop-profile-visual-stack">
      <img
        alt=""
        aria-hidden="true"
        class="desktop-profile-screen desktop-profile-screen--left"
        data-design-element="desktop-profile-screen-left"
        :src="desktopProfileLeftRef"
      />
      <img
        alt=""
        aria-hidden="true"
        class="desktop-profile-screen desktop-profile-screen--center"
        data-design-element="desktop-profile-screen-center"
        :src="desktopProfileCenterRef"
      />
      <img
        alt=""
        aria-hidden="true"
        class="desktop-profile-screen desktop-profile-screen--right"
        data-design-element="desktop-profile-screen-right"
        :src="desktopProfileRightRef"
      />
    </div>
    <div class="star-75"></div>
  </div>
</template>

<script setup lang="ts">
import desktopProfileCenterRef from '@/shared/assets/images/desktop-profile-center-ref.png';
import desktopProfileLeftRef from '@/shared/assets/images/desktop-profile-left-ref.png';
import desktopProfileRightRef from '@/shared/assets/images/desktop-profile-right-ref.png';
</script>
