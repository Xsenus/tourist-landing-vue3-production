/**
 * Hash scrolling is intentionally handled here instead of ad-hoc click handlers
 * so future internal routes can reuse the same behavior.
 */
import { createRouter, createWebHistory } from 'vue-router';

const LandingPage = () => import('@/pages/landing/ui/LandingPage.vue');

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 112,
        behavior: 'smooth'
      };
    }

    return { top: 0 };
  }
});
