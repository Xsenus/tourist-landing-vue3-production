<template>
  <header class="site-header" :class="{ 'site-header--menu-open': menuOpen }">
    <div class="site-header__inner">
      <a class="brand" href="#top" aria-label="Tourist" @click="closeMenu">
        <span class="brand__mark">T</span>
        <span class="brand__name">tourist</span>
      </a>

      <nav class="site-header__nav" aria-label="Primary">
        <a v-for="item in navItems" :key="item.label" class="site-header__link" :href="item.href">
          {{ item.label }}
        </a>
      </nav>

      <div class="site-header__actions">
        <button class="site-header__lang" type="button" aria-label="Language selector">
          <span>EN</span>
          <span class="site-header__lang-chevron" aria-hidden="true"></span>
        </button>
        <a class="site-header__login" href="#identity">Log in</a>
        <a class="site-header__signup" href="#deals">Sign up</a>
        <button
          class="site-header__burger"
          type="button"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <Transition name="mobile-nav-fade">
      <nav
        v-if="menuOpen"
        id="mobile-navigation"
        class="site-header__mobile panel"
        aria-label="Mobile navigation"
      >
        <a
          v-for="item in navItems"
          :key="`${item.label}-mobile`"
          class="site-header__mobile-link"
          :href="item.href"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { NavigationItem } from '@/pages/landing/model/landing.types';

withDefaults(
  defineProps<{
    navItems?: NavigationItem[];
  }>(),
  {
    navItems: () => []
  }
);

const menuOpen = ref(false);

const toggleMenu = (): void => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = (): void => {
  menuOpen.value = false;
};
</script>
